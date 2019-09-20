﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using MSLibrary.Collections.Hash;
using MSLibrary.LanguageTranslate;
using MSLibrary.Transaction;
using MSLibrary.DAL;

namespace MSLibrary.Logger.DAL
{
    /// <summary>
    /// 通用日志数据操作
    /// 日志用CommonLog-{parentAction}作为组名称查找哈希组，
    /// 如果找不到，则使用CommonLogDefaultHashGroupName作为组名称查找哈希组，
    /// 以parentID作为key在找到的哈希组中找到对应的节点信息
    /// </summary>
    public class CommonLogStore : ICommonLogStore
    {

        private const string _groupNameFormatting = "CommonLog-{0}";
        private const string _groupType = "CommonLog";

        private static string _commonLogDefaultHashGroupName;
        /// <summary>
        /// 通用日志默认哈希组名称
        /// 需要在系统初始化时赋值
        /// </summary>
        public static string CommonLogDefaultHashGroupName
        {
            set
            {
                _commonLogDefaultHashGroupName = value;
            }
        }


        private IHashGroupRepository _hashGroupRepository;
        private IStoreInfoResolveService _storeInfoResolveService;
        private ICommonLogConnectionFactory _commonLogConnectionFactory;

        public CommonLogStore(IHashGroupRepository hashGroupRepository,IStoreInfoResolveService storeInfoResolveService, ICommonLogConnectionFactory commonLogConnectionFactory)
        {
            _hashGroupRepository = hashGroupRepository;
            _storeInfoResolveService = storeInfoResolveService;
            _commonLogConnectionFactory = commonLogConnectionFactory;
        }

        public async Task Add(CommonLog log)
        {

            var group = await getHashGroup(log.ParentActionName);

            var dbInfo = await StoreInfoHelper.GetHashStoreInfo(group,_storeInfoResolveService, log.ParentID.ToString());


            var tableNameCommonlog = getTableName(group.Name, dbInfo.TableNames);

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, dbInfo.DBConnectionNames.ReadAndWrite, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran
                })
                {
                    SqlParameter parameter;
             
                    if (log.ID == Guid.Empty)
                    {
                        command.CommandText = string.Format(@"insert into {0} ([id],[parentid],[previousid],[contextinfo],[actionname],[parentactionname],[requestbody],[requesturi],[message],[root],[level],[createtime],[modifytime])
                                                values (default,@parentid,@previousid,@contextinfo,@actionname,@parentactionname,@requestbody,@requesturi,@message,@root,@level,GETUTCDATE(),GETUTCDATE()); 
                                                SELECT @newid=[id] FROM {0} WHERE [sequence]=SCOPE_IDENTITY()", tableNameCommonlog);

                        parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                        {
                            Direction = ParameterDirection.Output
                        };
                        command.Parameters.Add(parameter);
                    }
                    else
                    {
                        command.CommandText = string.Format(@"insert into {0} ([id],[parentid],[previousid],[contextinfo],[actionname],[parentactionname],[requestbody],[requesturi],[message],[root],[level],[createtime],[modifytime])
                                                VALUES (@id,@parentid,@previousid,@contextinfo,@actionname,@parentactionname,@requestbody,@requesturi,@message,@root,@level,GETUTCDATE(),GETUTCDATE())", tableNameCommonlog);

                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = log.ID
                        };
                        command.Parameters.Add(parameter);
                    }


                    parameter = new SqlParameter("@parentid", SqlDbType.UniqueIdentifier)
                    {
                        Value = log.ParentID
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@previousid", SqlDbType.UniqueIdentifier)
                    {
                        Value = log.PreviousID
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@contextinfo", SqlDbType.NVarChar, log.ContextInfo.Length)
                    {
                        Value = log.ContextInfo
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@actionname", SqlDbType.NVarChar, 300)
                    {
                        Value = log.ActionName
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@parentactionname", SqlDbType.NVarChar, 300)
                    {
                        Value = log.ParentActionName
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@requestbody", SqlDbType.NVarChar, log.RequestBody.Length)
                    {
                        Value = log.RequestBody
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@requesturi", SqlDbType.NVarChar, 500)
                    {
                        Value = log.RequestUri
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@message", SqlDbType.NVarChar, log.Message.Length)
                    {
                        Value = log.Message
                    };
                    command.Parameters.Add(parameter);


                    parameter = new SqlParameter("@root", SqlDbType.Bit)
                    {
                        Value = log.Root
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@level", SqlDbType.Int)
                    {
                        Value = log.Level
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    await command.ExecuteNonQueryAsync();

                    if (log.ID == Guid.Empty)
                    {
                        log.ID = (Guid)command.Parameters["@newid"].Value;
                    }
                }
            });
        }

        public async Task<CommonLog> QueryByID(Guid id, Guid parentID, string parentActionName)
        {
            var group = await getHashGroup(parentActionName);

            var dbInfo = await StoreInfoHelper.GetHashStoreInfo(group, _storeInfoResolveService, parentID.ToString());

            var tableNameCommonlog = getTableName(group.Name, dbInfo.TableNames);

            CommonLog result = null;
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, dbInfo.DBConnectionNames.Read, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }
                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                })
                {
                    SqlParameter parameter;

                    command.CommandText = string.Format(@"select {0} from [dbo].[{1}] where id=@id;", StoreHelper.GetCommonLogSelectFields(string.Empty), tableNameCommonlog);
                    parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    SqlDataReader reader = null;


                    using (reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            result = new CommonLog();
                            StoreHelper.SetCommonLogSelectFields(result, reader, string.Empty);
                        }
                        reader.Close();
                    }
                }
            });

            return result;
        }

        public async Task<List<CommonLog>> QueryRootByConditionTop(string parentActionName,int? level, int top)
        {
            List<CommonLog> logs = new List<CommonLog>();

            List<HashGroup> groups = new List<HashGroup>();

            if (parentActionName != null)
            {
                var group = await getHashGroup(parentActionName);
                await queryRootByConditionTop(group, parentActionName, level, top, logs);
            }
            else
            {
                await _hashGroupRepository.QueryByType(_groupType, async(group)=>
                {
                    await queryRootByConditionTop(group, parentActionName, level, top, logs);
                });

            }

            logs = (from item in logs
                    orderby item.CreateTime descending
                    select item).Take(top).ToList();

            return logs;
        }

        public async Task AddLocal(CommonLog log)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _commonLogConnectionFactory.CreateAllForLocalCommonLog(), async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran
                })
                {
                    SqlParameter parameter;

                    if (log.ID == Guid.Empty)
                    {
                        command.CommandText = string.Format(@"insert into CommonLog_Local ([id],[parentid],[contextinfo],[actionname],[parentactionname],[requestbody],[requesturi],[message],[root],[level],[createtime],[modifytime])
                                                values (default,@parentid,@contextinfo,@actionname,@parentactionname,@requestbody,@requesturi,@message,@root,@level,GETUTCDATE(),GETUTCDATE()); 
                                                SELECT @newid=[id] FROM {0} WHERE [sequence]=SCOPE_IDENTITY()");

                        parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                        {
                            Direction = ParameterDirection.Output
                        };
                        command.Parameters.Add(parameter);
                    }
                    else
                    {
                        command.CommandText = string.Format(@"insert into CommonLog_Local ([id],[parentid],[contextinfo],[actionname],[parentactionname],[requestbody],[requesturi],[message],[root],[level],[createtime],[modifytime])
                                                VALUES (@id,@parentid,@contextinfo,@actionname,@parentactionname,@requestbody,@requesturi,@message,@root,@level,GETUTCDATE(),GETUTCDATE())");

                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = log.ID
                        };
                        command.Parameters.Add(parameter);
                    }


                    parameter = new SqlParameter("@parentid", SqlDbType.UniqueIdentifier)
                    {
                        Value = log.ParentID
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@contextinfo", SqlDbType.NVarChar, log.ContextInfo.Length)
                    {
                        Value = log.ContextInfo
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@actionname", SqlDbType.NVarChar, 300)
                    {
                        Value = log.ActionName
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@parentactionname", SqlDbType.NVarChar, 300)
                    {
                        Value = log.ParentActionName
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@requestbody", SqlDbType.NVarChar, log.RequestBody.Length)
                    {
                        Value = log.RequestBody
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@requesturi", SqlDbType.NVarChar, 500)
                    {
                        Value = log.RequestUri
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@message", SqlDbType.NVarChar, log.Message.Length)
                    {
                        Value = log.Message
                    };
                    command.Parameters.Add(parameter);


                    parameter = new SqlParameter("@root", SqlDbType.Bit)
                    {
                        Value = log.Root
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@level", SqlDbType.Int)
                    {
                        Value = log.Level
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    await command.ExecuteNonQueryAsync();

                    if (log.ID == Guid.Empty)
                    {
                        log.ID = (Guid)command.Parameters["@newid"].Value;
                    }
                }
            });
        }

        public async Task<CommonLog> QueryLocalByID(Guid id)
        {
            CommonLog result = null;
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _commonLogConnectionFactory.CreateReadForLocalCommonLog(), async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }
                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                })
                {
                    SqlParameter parameter;

                    command.CommandText = string.Format(@"select {0} from [dbo].[CommonLog_Local] where id=@id;", StoreHelper.GetCommonLogSelectFields(string.Empty));
                    parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    SqlDataReader reader = null;


                    using (reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            result = new CommonLog();
                            StoreHelper.SetCommonLogSelectFields(result, reader, string.Empty);
                        }
                        reader.Close();
                    }
                }
            });

            return result;
        }

        public async Task<QueryResult<CommonLog>> QueryLocal(string message, int page, int pageSize)
        {
            QueryResult<CommonLog> result = new QueryResult<CommonLog>();
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _commonLogConnectionFactory.CreateReadForLocalCommonLog(), async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }
                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                })
                {
                    SqlParameter parameter;

                    command.CommandText = string.Format(@"SELECT @count = COUNT(*)
                                                    FROM [dbo].[CommonLog_Local]
                                                    WHERE [message] like @message                                                         
                                                    
                                                    SELECT {0}
                                                    FROM [dbo].[CommonLog_Local]
                                                    WHERE [message] like @message  
                                                    ORDER BY [sequence] desc OFFSET (@pagesize * (@currentpage - 1)) ROWS FETCH NEXT @pagesize ROWS ONLY;", StoreHelper.GetCommonLogSelectFields(string.Empty));
                    parameter = new SqlParameter("@message", SqlDbType.NVarChar,850)
                    {
                        Value = $"{message.ToSqlLike()}%"
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@currentpage", SqlDbType.Int)
                    {
                        Value = page
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@pagesize", SqlDbType.Int)
                    {
                        Value = pageSize
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@count", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    SqlDataReader reader = null;


                    using (reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var log = new CommonLog();
                            StoreHelper.SetCommonLogSelectFields(log, reader, string.Empty);
                            result.Results.Add(log);

                        }
                        reader.Close();

                        result.TotalCount = (int)command.Parameters["@count"].Value;
                        result.CurrentPage = page;
                    }
                }
            });

            return result;
        }

        public async Task<QueryResult<CommonLog>> QueryByParentId(Guid parentID, string parentActionName, int page, int pageSize)
        {
            var group = await getHashGroup(parentActionName);

            var dbInfo = await StoreInfoHelper.GetHashStoreInfo(group, _storeInfoResolveService, parentID.ToString());

            var tableNameCommonlog = getTableName(group.Name, dbInfo.TableNames);


            QueryResult<CommonLog> result = new QueryResult<CommonLog>();
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, dbInfo.DBConnectionNames.Read, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }
                using (SqlCommand command = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                })
                {
                    SqlParameter parameter;

                    command.CommandText = string.Format(@"SELECT @count = COUNT(*)
                                                    FROM [dbo].[{1}] 
                                                    where [parentid]=@parentid
                                                    
                                                    SELECT {0}
                                                    FROM [dbo].[{1}] 
                                                    where [parentid]=@parentid
                                                    ORDER BY [sequence] OFFSET (@pagesize * (@currentpage - 1)) ROWS FETCH NEXT @pagesize ROWS ONLY;", StoreHelper.GetCommonLogSelectFields(string.Empty), tableNameCommonlog);


                    parameter = new SqlParameter("@parentid", SqlDbType.UniqueIdentifier)
                    {
                        Value = parentID
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@currentpage", SqlDbType.Int)
                    {
                        Value = page
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@pagesize", SqlDbType.Int)
                    {
                        Value = pageSize
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter("@count", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    SqlDataReader reader = null;


                    using (reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var log = new CommonLog();
                            StoreHelper.SetCommonLogSelectFields(log, reader, string.Empty);
                            result.Results.Add(log);

                        }
                        reader.Close();

                        result.TotalCount = (int)command.Parameters["@count"].Value;
                        result.CurrentPage = page;
                    }
                }
            });

            return result;
        }


        private async Task queryRootByConditionTop(HashGroup group,string parentActionName, int? level, int top,List<CommonLog> logs)
        {
            var dbInfos = await StoreInfoHelper.GetHashStoreInfos(group, _storeInfoResolveService);

            foreach (var dbInfoItem in dbInfos)
            {
                var tableNameCommonlog = getTableName(group.Name, dbInfoItem.TableNames);

                await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, dbInfoItem.DBConnectionNames.Read, async (conn, transaction) =>
                {
                    SqlTransaction sqlTran = null;
                    if (transaction != null)
                    {
                        sqlTran = (SqlTransaction)transaction;
                    }
                    using (SqlCommand command = new SqlCommand()
                    {
                        Connection = (SqlConnection)conn,
                        CommandType = CommandType.Text,
                        Transaction = sqlTran,
                    })
                    {
                        SqlParameter parameter;
                        string strConditionParentActionName = string.Empty;
                        if (strConditionParentActionName!=null)
                        {
                            strConditionParentActionName = "and [parentactionname]=@parentactionname";
                            parameter = new SqlParameter("@parentactionname", SqlDbType.NVarChar,300)
                            {
                                Value = parentActionName
                            };
                            command.Parameters.Add(parameter);
                        }

                        string strConditionLevel = string.Empty;
                        if (level!=null)
                        {
                            strConditionParentActionName = "and [level]=@level";
                            parameter = new SqlParameter("@level", SqlDbType.Int)
                            {
                                Value = level.Value
                            };
                            command.Parameters.Add(parameter);
                        }

                        command.CommandText = string.Format(@"select top (@top) {0} from [dbo].[{1}] where 1=1 {2} {3} order by [sequence] desc;", StoreHelper.GetCommonLogSelectFields(string.Empty), tableNameCommonlog,strConditionParentActionName,strConditionLevel);

                        parameter = new SqlParameter("@top", SqlDbType.Int)
                        {
                            Value = top
                        };
                        command.Parameters.Add(parameter);


                        command.Prepare();

                        SqlDataReader reader = null;


                        using (reader = await command.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                var log = new CommonLog();
                                StoreHelper.SetCommonLogSelectFields(log, reader, string.Empty);
                                logs.Add(log);
                            }
                            reader.Close();
                        }
                    }
                });

            }
        }
        private async Task<HashGroup> getHashGroup(string parentAction)
        {

            var group = await HashGroupRepositoryHelper.QueryByName(string.Format(_groupNameFormatting, parentAction));

            if (group == null)
            {
                group = await HashGroupRepositoryHelper.QueryByName(_commonLogDefaultHashGroupName);
            }

            if (group == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundHashGroupByName,
                    DefaultFormatting = "没有找到名称为{0}的一致性哈希组",
                    ReplaceParameters = new List<object>() { _commonLogDefaultHashGroupName }
                };

                throw new UtilityException((int)Errors.NotFoundHashGroupByName, fragment);
            }

            return group;
        }





        private string getTableName(string groupName, Dictionary<string,string> tableNames)
        {
            if (!tableNames.TryGetValue(HashEntityNames.CommonLog, out string tableName))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundKeyInHashNodeKeyInfo,
                    DefaultFormatting = "哈希组{0}中的哈希节点关键信息中找不到键值{1}",
                    ReplaceParameters = new List<object>() { groupName
                    , HashEntityNames.CommonLog }
                };

                throw new UtilityException((int)Errors.NotFoundKeyInHashNodeKeyInfo, fragment);
            }

            return tableName;
        }
    }
}
