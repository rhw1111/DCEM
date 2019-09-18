﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using MSLibrary.DI;
using MSLibrary.Transaction;
using MSLibrary.DAL;


namespace MSLibrary.Collections.Hash.DAL
{
    [Injection(InterfaceType = typeof(IHashGroupStore), Scope = InjectionScope.Singleton)]
    public class HashGroupStore : IHashGroupStore
    {
        private IHashConnectionFactory _hashConnectionFactory;

        public HashGroupStore(IHashConnectionFactory hashConnectionFactory)
        {
            _hashConnectionFactory = hashConnectionFactory;
        }


        public async Task Add(HashGroup group)
        {
            //获取读写连接字符串
            var strConn = _hashConnectionFactory.CreateAllForHash();
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, strConn, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = "dbo.core_HashGroupAdd",
                    Transaction = sqlTran
                })
                {



                    SqlParameter parameter;
                    if (group.ID != Guid.Empty)
                    {
                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = group.ID
                        };
                        commond.Parameters.Add(parameter);
                    }
                    else
                    {
                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = DBNull.Value
                        };
                        commond.Parameters.Add(parameter);

                    }

                    parameter = new SqlParameter("@name", SqlDbType.VarChar, 100)
                    {
                        Value = group.Name
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@type", SqlDbType.VarChar, 100)
                    {
                        Value = group.Type
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@count", SqlDbType.BigInt)
                    {
                        Value = group.Count
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@strategyid", SqlDbType.UniqueIdentifier)
                    {
                        Value = group.StrategyID
                    };
                    commond.Parameters.Add(parameter);


                    parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                    {
                        Direction = ParameterDirection.Output
                    };
                    commond.Parameters.Add(parameter);


                    commond.Prepare();



                        await commond.ExecuteNonQueryAsync();
                   


                    if (group.ID == Guid.Empty)
                    {
                        group.ID = (Guid)commond.Parameters["@newid"].Value;
                    }
                }
            });
        }

        public async Task Delete(Guid id)
        {
            //获取读写连接字符串
            var strConn = _hashConnectionFactory.CreateAllForHash();
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, strConn, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.StoredProcedure,
                    Transaction = sqlTran,
                    CommandText = @"dbo.core_HashGroupDelete"
                })
                {

                    SqlParameter parameter;

                    parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();


                        await commond.ExecuteNonQueryAsync();
                  


                }
            });
        }

        public async Task<HashGroup> QueryById(Guid id)
        {
            HashGroup group = null;

            //获取只读连接字符串
            var strConn = _hashConnectionFactory.CreateReadForHash();


            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, strConn, async (conn, transaction) =>
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
                    CommandText = string.Format(@"select {0},{1} from HashGroup as g join HashGroupStrategy as s 
                                                  on g.strategyid=s.id
                                                  where g.[id]=@id", StoreHelper.GetHashGroupSelectFields("g"), StoreHelper.GetHashGroupStrategySelectFields("s"))
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = id
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;

                    using (reader = await commond.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            group = new HashGroup();
                            StoreHelper.SetHashGroupSelectFields(group, reader, "g");
                            group.Strategy = new HashGroupStrategy();
                            StoreHelper.SetHashGroupStrategySelectFields(group.Strategy, reader, "s");
                        }

                        reader.Close();
                    }
                }
            });

            return group;
        }

        public async Task<QueryResult<HashGroup>> QueryByName(string name, int page, int pageSize)
        {
            QueryResult<HashGroup> result = new QueryResult<HashGroup>();

            //获取只读连接字符串
            var strConn = _hashConnectionFactory.CreateReadForHash();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, strConn, async (conn, transaction) =>
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
                    CommandText = string.Format(@"set @currentpage=@page
		                           select @count= count(*) from HashGroup as g join HashGroupStrategy as s on g.strategyid=s.id where g.[name] like @name
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
	
                                    select {0},{1} from HashGroup as g join HashGroupStrategy as s on g.strategyid=s.id where g.[name] like @name
                                    order by sequence
		                            offset (@pagesize * (@currentpage - 1)) rows 
		                            fetch next @pagesize rows only;", StoreHelper.GetHashGroupSelectFields("g"), StoreHelper.GetHashGroupSelectFields("s"))
                })
                {
                    var parameter = new SqlParameter("@name", SqlDbType.NVarChar, 150)
                    {
                        Value = $"{name.ToSqlLike()}%"
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@page", SqlDbType.Int)
                    {
                        Value = page
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@pagesize", SqlDbType.Int)
                    {
                        Value = pageSize
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

                    using (reader= await commond.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var record = new HashGroup();
                            StoreHelper.SetHashGroupSelectFields(record, reader, "g");
                            record.Strategy = new HashGroupStrategy();
                            StoreHelper.SetHashGroupStrategySelectFields(record.Strategy,reader,"s");
                            result.Results.Add(record);
                        }

                        reader.Close();

                        result.TotalCount = (int)commond.Parameters["@count"].Value;
                        result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                    }
                }
            });

            return result;
        }

        public async Task<HashGroup> QueryByName(string name)
        {

            HashGroup group = null;

            //获取只读连接字符串
            var strConn = _hashConnectionFactory.CreateReadForHash();


            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, strConn, async (conn, transaction) =>
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
                    CommandText = string.Format(@"select {0},{1} from HashGroup as g join HashGroupStrategy as s 
                                                  on g.strategyid=s.id
                                                  where g.[name]=@name", StoreHelper.GetHashGroupSelectFields("g"), StoreHelper.GetHashGroupStrategySelectFields("s"))
                })
                {

                    var parameter = new SqlParameter("@name", SqlDbType.NVarChar,100)
                    {
                        Value = name
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;

                    using (reader = await commond.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            group = new HashGroup();
                            StoreHelper.SetHashGroupSelectFields(group, reader, "g");
                            group.Strategy = new HashGroupStrategy();
                            StoreHelper.SetHashGroupStrategySelectFields(group.Strategy, reader, "s");
                        }

                        reader.Close();
                    }
                }
            });

            return group;
        }

        public async Task Update(HashGroup group)
        {
            //获取读写连接字符串
            var strConn = _hashConnectionFactory.CreateAllForHash();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, strConn, async (conn, transaction) =>
            {
                SqlTransaction sqlTran = null;
                if (transaction != null)
                {
                    sqlTran = (SqlTransaction)transaction;
                }

                using (SqlCommand commond = new SqlCommand()
                {
                    Connection = (SqlConnection)conn,
                    CommandType = CommandType.StoredProcedure,
                    Transaction = sqlTran,
                    CommandText = @"dbo.core_HashGroupUpdate"
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = group.ID
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = group.Name
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@count", SqlDbType.BigInt)
                    {
                        Value = group.Count
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@strategyid", SqlDbType.UniqueIdentifier)
                    {
                        Value = group.StrategyID
                    };
                    commond.Parameters.Add(parameter);


                    commond.Prepare();

                    await commond.ExecuteNonQueryAsync();
                }
            });
        }

        public HashGroup QueryByNameSync(string name)
        {
            HashGroup group = null;

            //获取只读连接字符串
            var strConn = _hashConnectionFactory.CreateReadForHash();


            DBTransactionHelper.SqlTransactionWork(DBTypes.SqlServer, true, false, strConn, (conn, transaction) =>
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
                    CommandText = string.Format(@"select {0},{1} from HashGroup as g join HashGroupStrategy as s 
                                                  on g.strategyid=s.id
                                                  where g.[name]=@name", StoreHelper.GetHashGroupSelectFields("g"), StoreHelper.GetHashGroupStrategySelectFields("s"))
                })
                {

                    var parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = name
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;

                    using (reader= commond.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            group = new HashGroup();
                            StoreHelper.SetHashGroupSelectFields(group, reader, "g");
                            group.Strategy = new HashGroupStrategy();
                            StoreHelper.SetHashGroupStrategySelectFields(group.Strategy, reader, "s");
                        }

                        reader.Close();
                    }
                }
            });

            return group;
        }

        public async Task QueryByType(string type, Func<HashGroup, Task> action)
        {
            /*List<HashGroup> result = new List<HashGroup>();
            int? index = null;
            int count = 500;

            //获取只读连接字符串
            var strConn = _hashConnectionFactory.CreateReadForHash();

            while(true)
            {
                result.Clear();


                DBTransactionHelper.SqlTransactionWork(DBTypes.SqlServer, true, false, strConn, (conn, transaction) =>
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
                        CommandText = string.Format(@"select {0},{1} from HashGroup as g join HashGroupStrategy as s 
                                                  on g.strategyid=s.id
                                                  where g.[name]=@name", StoreHelper.GetHashGroupSelectFields("g"), StoreHelper.GetHashGroupStrategySelectFields("s"))
                    })
                    {

                        var parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                        {
                            Value = name
                        };
                        commond.Parameters.Add(parameter);

                        commond.Prepare();

                        SqlDataReader reader = null;

                        using (reader = commond.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                group = new HashGroup();
                                StoreHelper.SetHashGroupSelectFields(group, reader, "g");
                                group.Strategy = new HashGroupStrategy();
                                StoreHelper.SetHashGroupStrategySelectFields(group.Strategy, reader, "s");
                            }

                            reader.Close();
                        }
                    }
                });





                if (result.Count<count)
                {
                    break;
                }
            }

            return group;*/
        }
    }
}
