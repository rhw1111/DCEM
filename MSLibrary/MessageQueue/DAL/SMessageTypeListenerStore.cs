﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using MSLibrary.DI;
using MSLibrary.Transaction;

namespace MSLibrary.MessageQueue.DAL
{
    /// <summary>
    /// 消息处理类型监听数据操作
    /// 消息处理类型监听集中存储在消息队列的主信息数据库中
    /// </summary>
    [Injection(InterfaceType = typeof(ISMessageTypeListenerStore), Scope = InjectionScope.Singleton)]
    public class SMessageTypeListenerStore : ISMessageTypeListenerStore
    {
        private IMessageQueueConnectionFactory _messageQueueConnectionFactory;

        public SMessageTypeListenerStore(IMessageQueueConnectionFactory messageQueueConnectionFactory)
        {
            _messageQueueConnectionFactory = messageQueueConnectionFactory;
        }

        public async Task Add(SMessageTypeListener listener)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _messageQueueConnectionFactory.CreateAllForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran
                })
                {
                    if (listener.ID == Guid.Empty)
                    {
                        commond.CommandText = @"insert into SMessageTypeListener([id],[messagetypeid],[name],[mode],[listenerfactorytype],[listenerfactorytypeusedi],[listenerweburl],[listenerwebsignature],[createtime],[modifytime])
                                    values(default,@messagetypeid,@name,@mode,@listenerfactorytype,@listenerfactorytypeusedi,@listenerweburl,@listenerwebsignature,getutcdate(),getutcdate());
                                    select @newid=[id] from SMessageTypeListener where [sequence]=SCOPE_IDENTITY()";
                    }
                    else
                    {
                        commond.CommandText = @"insert into SMessageTypeListener([id],[messagetypeid],[name],[mode],[listenerfactorytype],[listenerfactorytypeusedi],[listenerweburl],[listenerwebsignature],[createtime],[modifytime])
                                    values(@id,@messagetypeid,@name,@mode,@listenerfactorytype,@listenerfactorytypeusedi,@listenerweburl,@listenerwebsignature,getutcdate(),getutcdate())";
                    }

                    SqlParameter parameter;
                    if (listener.ID != Guid.Empty)
                    {
                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = listener.ID
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                        {
                            Direction = ParameterDirection.Output
                        };
                        commond.Parameters.Add(parameter);
                    }

                    parameter = new SqlParameter("@messagetypeid", SqlDbType.UniqueIdentifier)
                    {
                        Value = listener.MessageType.ID
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = listener.Name
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@mode", SqlDbType.Int)
                    {
                        Value = listener.Mode
                    };
                    commond.Parameters.Add(parameter);

                    if (listener.ListenerFactoryType != null)
                    {
                        parameter = new SqlParameter("@listenerfactorytype", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerFactoryType
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerfactorytype", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    if (listener.ListenerFactoryTypeUseDI != null)
                    {
                        parameter = new SqlParameter("@listenerfactorytypeusedi", SqlDbType.Bit)
                        {
                            Value = listener.ListenerFactoryTypeUseDI
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerfactorytypeusedi", SqlDbType.Bit)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    if (listener.ListenerWebUrl != null)
                    {
                        parameter = new SqlParameter("@listenerweburl", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerWebUrl
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerweburl", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }


                    if (listener.ListenerWebSignature != null)
                    {
                        parameter = new SqlParameter("@listenerwebsignature", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerWebSignature
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerwebsignature", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    commond.Prepare();

                    await commond.ExecuteNonQueryAsync();

                    if (listener.ID == Guid.Empty)
                    {
                        listener.ID = (Guid)commond.Parameters["@newid"].Value;
                    }
                }
            });
        }

        public async Task Delete(Guid id)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _messageQueueConnectionFactory.CreateAllForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                    CommandText = @"delete from SMessageTypeListener where [id]=@id"
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    await commond.ExecuteNonQueryAsync();
                }
            });
        }

        public async Task DeleteByTypeRelation(Guid typeId, Guid listenerId)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _messageQueueConnectionFactory.CreateAllForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction = sqlTran,
                    CommandText = @"delete from SMessageTypeListener where [id]=@id and [messagetypeid]=@messagetypeid"
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = listenerId
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@typeid", SqlDbType.UniqueIdentifier)
                    {
                        Value = typeId
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();


                    await commond.ExecuteNonQueryAsync();


                }
            });
        }


        public async Task<SMessageTypeListener> QueryById(Guid id)
        {
            SMessageTypeListener listener = null;

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _messageQueueConnectionFactory.CreateReadForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                    Transaction=sqlTran,
                    CommandText = string.Format(@"select {0},{1} from SMessageTypeListener as listener join SMessageExecuteType as mtype on listener.messagetypeid=mtype.id where listener.[id]=@id", StoreHelper.GetSMessageTypeListenerSelectFields("listener"), StoreHelper.GetSMessageExecuteTypeSelectFields("mtype"))
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;
 
                    reader = await commond.ExecuteReaderAsync();

                    using (reader = await commond.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            listener = new SMessageTypeListener();
                            StoreHelper.SetSMessageTypeListenerSelectFields(listener, reader, "listener");
                            listener.MessageType = new SMessageExecuteType();
                            StoreHelper.SetSMessageExecuteTypeSelectFields(listener.MessageType, reader, "mtype");
                        }

                        reader.Close();
                    }
                }
            });

            return listener;
        }

        public async Task QueryByType(Guid typeId, Func<SMessageTypeListener, Task> callback)
        {
            List<SMessageTypeListener> listenerList = new List<SMessageTypeListener>();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _messageQueueConnectionFactory.CreateReadForMessageQueueMain(), async (conn,transaction) =>
            {
                Int64? sequence = null;
                int pageSize = 500;

                while (true)
                {
                    listenerList.Clear();

                    SqlTransaction sqlTran = null;
                    if (transaction != null)
                    {
                        sqlTran = (SqlTransaction)transaction;
                    }

                    using (SqlCommand commond = new SqlCommand()
                    {
                        Connection = (SqlConnection)conn,
                        CommandType = CommandType.Text,
                         Transaction=sqlTran
                    })
                    {
                        if (!sequence.HasValue)
                        {
                            commond.CommandText = string.Format(@"select top (@pagesize) {0},{1} from SMessageTypeListener as listener join SMessageExecuteType as mtype on listener.messagetypeid=mtype.id where mtype.id=@typeid order by listener.[sequence]", StoreHelper.GetSMessageTypeListenerSelectFields("listener"), StoreHelper.GetSMessageExecuteTypeSelectFields("mtype"));
                        }
                        else
                        {
                            commond.CommandText = string.Format(@"select top (@pagesize) {0},{1} from SMessageTypeListener as listener join SMessageExecuteType as mtype on listener.messagetypeid=mtype.id where mtype.id=@typeid and listener.[sequence]>@sequence order by listener.[sequence]", StoreHelper.GetSMessageTypeListenerSelectFields("listener"), StoreHelper.GetSMessageExecuteTypeSelectFields("mtype"));
                        }

                        var parameter = new SqlParameter("@typeid", SqlDbType.UniqueIdentifier)
                        {
                            Value = typeId
                        };
                        commond.Parameters.Add(parameter);

                        parameter = new SqlParameter("@pagesize", SqlDbType.Int)
                        {
                            Value = pageSize
                        };
                        commond.Parameters.Add(parameter);

                        if (sequence.HasValue)
                        {
                            parameter = new SqlParameter("@sequence", SqlDbType.BigInt)
                            {
                                Value = sequence
                            };
                            commond.Parameters.Add(parameter);
                        }

                        commond.Prepare();

                        SqlDataReader reader = null;

                        using (reader = await commond.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                var listener = new SMessageTypeListener();
                                StoreHelper.SetSMessageTypeListenerSelectFields(listener, reader, "listener");
                                sequence = (Int64)reader["listenersequence"];
                                listener.MessageType = new SMessageExecuteType();
                                StoreHelper.SetSMessageExecuteTypeSelectFields(listener.MessageType,reader, "mtype");
                                listenerList.Add(listener);
                            }

                            reader.Close();
                        }


                    }

                    foreach (var listenerItem in listenerList)
                    {
                        await callback(listenerItem);
                    }

                    if (listenerList.Count != pageSize)
                    {
                        break;
                    }

                }

            });
        }

        public async Task<QueryResult<SMessageTypeListener>> QueryByType(Guid typeId, int page, int pageSize)
        {
            QueryResult<SMessageTypeListener> result = new QueryResult<SMessageTypeListener>();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _messageQueueConnectionFactory.CreateReadForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                     Transaction=sqlTran,
                    CommandText = string.Format(@"set @currentpage=@page
		                           select @count= count(*) from SMessageTypeListener where messagetypeid=@typeid
		                           if @pagesize*@page>=@count
			                          begin
				                           set @currentpage= @count/@pagesize
				                           if @count%@pagesize<>0
					                           begin
						                            set @currentpage=@currentpage+1
					                           end
				                           if @currentpage=0
					                           set @currentpage=1
			                          end
		                            else if @page<1 
			                           begin 
				                           set @currentpage=1
			                           end
	
                                    select {0},{1} from SMessageTypeListener as listener join SMessageExecuteType as mtype where listener.messagetypeid=@typeid
                                    order by listener.[sequence]
		                            offset (@pagesize * (@currentpage - 1)) rows 
		                            fetch next @pagesize rows only;", StoreHelper.GetSMessageTypeListenerSelectFields("listener"),StoreHelper.GetSMessageExecuteTypeSelectFields("mtype"))
                })
                {

                    var parameter = new SqlParameter("@page", SqlDbType.Int)
                    {
                        Value = page
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@pagesize", SqlDbType.Int)
                    {
                        Value = pageSize
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@typeid", SqlDbType.UniqueIdentifier)
                    {
                        Value = typeId
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@count", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@currentpage", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;

                    using (reader = await commond.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var listener = new SMessageTypeListener();
                            StoreHelper.SetSMessageTypeListenerSelectFields(listener, reader, "listener");
                            listener.MessageType = new SMessageExecuteType();
                            StoreHelper.SetSMessageExecuteTypeSelectFields(listener.MessageType, reader, "mtype");
                            result.Results.Add(listener);
                        }

                        reader.Close();

                        result.TotalCount = (int)commond.Parameters["@count"].Value;
                        result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                    }
                }
            });

            return result;
        }

        public async Task<SMessageTypeListener> QueryByTypeRelation(Guid typeId, Guid id)
        {
            SMessageTypeListener listener = null;

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _messageQueueConnectionFactory.CreateReadForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                     Transaction=sqlTran,
                    CommandText = string.Format(@"select {0},{1} from SMessageTypeListener as listener join SMessageExecuteType as mtype on listener.messagetypeid=mtype.id where listener.[id]=@id and mtype.[id]=@typeid", StoreHelper.GetSMessageTypeListenerSelectFields("listener"), StoreHelper.GetSMessageExecuteTypeSelectFields("mtype"))
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    commond.Parameters.Add(parameter);


                    parameter = new SqlParameter("@typeid", SqlDbType.UniqueIdentifier)
                    {
                        Value = typeId
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;

                    using (reader = await commond.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            listener = new SMessageTypeListener();
                            StoreHelper.SetSMessageTypeListenerSelectFields(listener, reader, "listener");
                            listener.MessageType = new SMessageExecuteType();
                            StoreHelper.SetSMessageExecuteTypeSelectFields(listener.MessageType, reader, "mtype");
                        }

                        reader.Close();
                    }
                }
            });

            return listener;
        }

        public async Task UpdateByTypeRelation(SMessageTypeListener listener)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _messageQueueConnectionFactory.CreateAllForMessageQueueMain(), async (conn,transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.Text,
                     Transaction=sqlTran,
                    CommandText = @"update SMessageTypeListener set [name]=@name,[mode]=@mode,[listenerfactorytype]=@listenerfactorytype,[listenerfactorytypeusedi]=@listenerfactorytypeusedi,[listenerweburl]=@listenerweburl,[listenerwebsignature]=@listenerwebsignature where [id]=@id and messagetypeid=@messagetypeid"
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = listener.ID
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@messagetypeid", SqlDbType.UniqueIdentifier)
                    {
                        Value = listener.MessageType.ID
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = listener.Name
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@mode", SqlDbType.Int)
                    {
                        Value = listener.Mode
                    };
                    commond.Parameters.Add(parameter);

                    if (listener.ListenerFactoryType != null)
                    {
                        parameter = new SqlParameter("@listenerfactorytype", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerFactoryType
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerfactorytype", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    if (listener.ListenerFactoryTypeUseDI != null)
                    {
                        parameter = new SqlParameter("@listenerfactorytypeusedi", SqlDbType.Bit)
                        {
                            Value = listener.ListenerFactoryTypeUseDI
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerfactorytypeusedi", SqlDbType.Bit)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    if (listener.ListenerWebUrl != null)
                    {
                        parameter = new SqlParameter("@listenerweburl", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerWebUrl
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerweburl", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }


                    if (listener.ListenerWebSignature != null)
                    {
                        parameter = new SqlParameter("@listenerwebsignature", SqlDbType.NVarChar, 150)
                        {
                            Value = listener.ListenerWebSignature
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@listenerwebsignature", SqlDbType.NVarChar, 150)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);
                    }

                    commond.Prepare();

                    await commond.ExecuteNonQueryAsync();


                    
                }
            });
        }
    }
}
