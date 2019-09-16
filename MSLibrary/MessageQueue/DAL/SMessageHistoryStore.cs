using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.MessageQueue.DAL;
using MSLibrary.Collections.Hash;
using MSLibrary.DAL;
using MSLibrary.LanguageTranslate;
using MSLibrary.Transaction;
using System.Data.SqlClient;
using System.Data;

namespace MSLibrary.MessageQueue.DAL
{

    [Injection(InterfaceType = typeof(ISMessageHistoryStore), Scope = InjectionScope.Singleton)]
    public class SMessageHistoryStore : ISMessageHistoryStore
    {

        private static string _messageHistoryHashGroupName;
        /// <summary>
        /// 消息历史记录需要用到的一致性哈希组的名称
        /// 需要在系统初始化时赋值
        /// </summary>
        public static string MessageHistoryHashGroupName
        {
            set
            {
                _messageHistoryHashGroupName = value;
            }
        }


        private IHashGroupRepository _hashGroupRepository;
        private IMessageQueueConnectionFactory _messageQueueConnectionFactory;

        private IStoreInfoResolveService _storeInfoResolveService;


        public SMessageHistoryStore(IHashGroupRepository hashGroupRepository, IMessageQueueConnectionFactory messageQueueConnectionFactory, IStoreInfoResolveService storeInfoResolveService)
        {
            _hashGroupRepository = hashGroupRepository;
            _messageQueueConnectionFactory = messageQueueConnectionFactory;
            _storeInfoResolveService = storeInfoResolveService;
        }



        public async Task Add(SMessageHistory history)
        {

            var storeInfo = await StoreInfoHelper.GetHashStoreInfo(_hashGroupRepository, _storeInfoResolveService, _messageHistoryHashGroupName, history.ID.ToString());

            if (!storeInfo.TableNames.TryGetValue(HashEntityNames.SMessageHistory, out string tableName))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundKeyInHashNodeKeyInfo,
                    DefaultFormatting = "哈希组{0}中的哈希节点关键信息中找不到键值{1}",
                    ReplaceParameters = new List<object>() { _messageHistoryHashGroupName , HashEntityNames.SMessageHistory }
                };

                throw new UtilityException((int)Errors.NotFoundKeyInHashNodeKeyInfo, fragment);
            }

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, storeInfo.DBConnectionNames.ReadAndWrite, async (conn, transaction) =>
            {
                //新增
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
                    if (history.ID == Guid.Empty)
                    {
                        command.CommandText = string.Format(@"
                                                INSERT INTO {0}
                                                     (
		                                               [id]
                                                      ,[key]
	                                                  ,[type]
	                                                  ,[data]
	                                                  ,[status]
                                                      ,[createtime]
                                                      ,[modifytime]
                                                     )
                                                VALUES
                                                    (default
                                                    , @key
                                                    , @type
                                                    , @data
                                                    , @status
                                                    , GETUTCDATE()
                                                    , GETUTCDATE());
                                                select @newid =[id] from {0} where [sequence] = SCOPE_IDENTITY()", tableName);
                        parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                        {
                            Direction = ParameterDirection.Output
                        };
                        command.Parameters.Add(parameter);
                    }
                    else
                    {
                        command.CommandText = string.Format(@"
                                                INSERT INTO {0}
                                                     (
                                                      [id]
                                                      ,[key]
	                                                  ,[type]
	                                                  ,[data]
	                                                  ,[status]
                                                      ,[createtime]
                                                      ,[modifytime]
                                                     )
                                                VALUES
                                                    ( 
                                                      @id
                                                    , @key
                                                    , @type
                                                    , @data
                                                    , @status
                                                    , GETUTCDATE()
                                                    , GETUTCDATE());", tableName);

                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = history.ID
                        };
                        command.Parameters.Add(parameter);
                    }

                    parameter = new SqlParameter("@key", SqlDbType.NVarChar, 100)
                    {
                        Value = history.Key
                    };
                    command.Parameters.Add(parameter);
                    parameter = new SqlParameter("@type", SqlDbType.NVarChar, 50)
                    {
                        Value = history.Type
                    };
                    command.Parameters.Add(parameter);
                    parameter = new SqlParameter("@data", SqlDbType.NVarChar, 500)
                    {
                        Value = history.Data
                    };
                    command.Parameters.Add(parameter);
                    parameter = new SqlParameter("@status", SqlDbType.Int)
                    {
                        Value = history.Status
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();


                    await command.ExecuteNonQueryAsync();


                    //如果用户未赋值ID则创建成功后返回ID
                    if (history.ID == Guid.Empty)
                    {
                        history.ID = (Guid)command.Parameters["@newid"].Value;
                    };
                }

            });

        }


        public async Task<SMessageHistory> QueryById(Guid id)
        {
            var storeInfo = await StoreInfoHelper.GetHashStoreInfo(_hashGroupRepository, _storeInfoResolveService, _messageHistoryHashGroupName, id.ToString());

            if (!storeInfo.TableNames.TryGetValue(HashEntityNames.SMessageHistory, out string tableName))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundKeyInHashNodeKeyInfo,
                    DefaultFormatting = "哈希组{0}中的哈希节点关键信息中找不到键值{1}",
                    ReplaceParameters = new List<object>() { _messageHistoryHashGroupName, HashEntityNames.SMessageHistory }
                };

                throw new UtilityException((int)Errors.NotFoundKeyInHashNodeKeyInfo, fragment);
            }
            SMessageHistory smssageHistory = null;

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, storeInfo.DBConnectionNames.Read, async (conn, transaction) =>
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
                    CommandText = string.Format(@"SELECT {0} FROM {1} WHERE id=@id", StoreHelper.GetSMessageHistorySelectFields(string.Empty), tableName),
                    Transaction = sqlTran,
                })
                {
                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
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
                            smssageHistory = new SMessageHistory();
                            StoreHelper.SetSMessageHistorySelectFields(smssageHistory, reader, string.Empty);
                        }
                        reader.Close();
                    }
                }

            });


            return smssageHistory;
        }



        public async Task UpdateStatus(Guid id, int status)
        {
            var storeInfo = await StoreInfoHelper.GetHashStoreInfo(_hashGroupRepository, _storeInfoResolveService, _messageHistoryHashGroupName, id.ToString());

            if (!storeInfo.TableNames.TryGetValue(HashEntityNames.SMessageHistory, out string tableName))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundKeyInHashNodeKeyInfo,
                    DefaultFormatting = "哈希组{0}中的哈希节点关键信息中找不到键值{1}",
                    ReplaceParameters = new List<object>() { _messageHistoryHashGroupName, HashEntityNames.SMessageHistory }
                };

                throw new UtilityException((int)Errors.NotFoundKeyInHashNodeKeyInfo, fragment);
            }

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, storeInfo.DBConnectionNames.ReadAndWrite, async (conn, transaction) =>
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
                    CommandText = string.Format(@"update {0} set status = @status WHERE id=@id", tableName),
                    Transaction = sqlTran,
                })
                {
                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    command.Parameters.Add(parameter);


                    parameter = new SqlParameter("@status", SqlDbType.Int)
                    {
                        Value = status
                    };
                    command.Parameters.Add(parameter);

                    command.Prepare();

                    await command.ExecuteNonQueryAsync();

                }
            });
        }
    }
}
