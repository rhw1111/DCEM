using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using MSLibrary.DI;
using MSLibrary.Transaction;

namespace MSLibrary.Entity.DAL
{
    [Injection(InterfaceType = typeof(IEntityAttributeMapConfigurationDetailStore), Scope = InjectionScope.Singleton)]
    public class EntityAttributeMapConfigurationDetailStore : IEntityAttributeMapConfigurationDetailStore
    {
        private IEntityAttributeMapConfigurationConnectionFactory _dbConnectionFactory;

        public EntityAttributeMapConfigurationDetailStore(IEntityAttributeMapConfigurationConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }

        public async Task QueryAllByConfigurationId(Guid configurationId, Func<EntityAttributeMapConfigurationDetail, Task> callback)
        {
            int page = 0;
            int pageSize = 500;
            QueryResult<EntityAttributeMapConfigurationDetail> result = new QueryResult<EntityAttributeMapConfigurationDetail>();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _dbConnectionFactory.CreateReadForEntityAttributeMapConfiguration(), async (conn,transaction) =>
            {

                while (true)
                {
                    page++;
                    result.Results.Clear();

                    SqlTransaction sqlTran = null;
                    if (transaction != null)
                    {
                        sqlTran = (SqlTransaction)transaction;
                    }


                    using (SqlCommand commond = new SqlCommand()
                    {
                        Connection = (SqlConnection)conn,
                        CommandType = CommandType.StoredProcedure,
                         Transaction=sqlTran,
                        CommandText = "core_EntityAttributeMapConfigurationDetailQueryByConfigurationId"
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

                        parameter = new SqlParameter("@configurationid", SqlDbType.UniqueIdentifier)
                        {
                            Value = configurationId
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
                            string prefix = string.Empty;
                            if (await reader.ReadAsync())
                            {
                                prefix = reader["prefix"].ToString();
                            }

                            if (await reader.NextResultAsync())
                            {
                                while (await reader.ReadAsync())
                                {
                                    var detail = new EntityAttributeMapConfigurationDetail();
                                    StoreHelper.SetEntityAttributeMapConfigurationDetailSelectFields(detail, reader, prefix);

                                    result.Results.Add(detail);
                                }
                            }

                            reader.Close();

                            result.TotalCount = (int)commond.Parameters["@count"].Value;
                            result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                        }
                    }

                    foreach (var item in result.Results)
                    {
                        await callback(item);
                    }

                    if (pageSize * result.CurrentPage >= result.TotalCount)
                    {
                        break;
                    }
                }
            });

        }

        public void QueryAllByConfigurationIdSync(Guid configurationId, Action<EntityAttributeMapConfigurationDetail> callback)
        {
            int page = 0;
            int pageSize = 500;
            QueryResult<EntityAttributeMapConfigurationDetail> result = new QueryResult<EntityAttributeMapConfigurationDetail>();

            DBTransactionHelper.SqlTransactionWork(DBTypes.SqlServer, true, false, _dbConnectionFactory.CreateReadForEntityAttributeMapConfiguration(), (conn,transaction) =>
            {

                while (true)
                {
                    page++;
                    result.Results.Clear();

                    SqlTransaction sqlTran = null;
                    if (transaction != null)
                    {
                        sqlTran = (SqlTransaction)transaction;
                    }

                    using (SqlCommand commond = new SqlCommand()
                    {
                        Connection = (SqlConnection)conn,
                        CommandType = CommandType.StoredProcedure,
                        CommandText = "core_EntityAttributeMapConfigurationDetailQueryByConfigurationId",
                         Transaction=sqlTran
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

                        parameter = new SqlParameter("@configurationid", SqlDbType.UniqueIdentifier)
                        {
                            Value = configurationId
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

                        using (reader = commond.ExecuteReader())
                        {
                            string prefix = string.Empty;
                            if (reader.Read())
                            {
                                prefix = reader["prefix"].ToString();
                            }

                            if (reader.NextResult())
                            {
                                while ( reader.Read())
                                {
                                    var detail = new EntityAttributeMapConfigurationDetail();
                                    StoreHelper.SetEntityAttributeMapConfigurationDetailSelectFields(detail, reader, prefix);

                                    result.Results.Add(detail);
                                }
                            }

                            reader.Close();

                            result.TotalCount = (int)commond.Parameters["@count"].Value;
                            result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                        }
                    }

                    foreach (var item in result.Results)
                    {
                        callback(item);
                    }

                    if (pageSize * result.CurrentPage >= result.TotalCount)
                    {
                        break;
                    }
                }
            });

        }

        public async Task<QueryResult<EntityAttributeMapConfigurationDetail>> QueryByPage(Guid configurationId, int page, int pageSize)
        {
            QueryResult<EntityAttributeMapConfigurationDetail> result = new QueryResult<EntityAttributeMapConfigurationDetail>();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _dbConnectionFactory.CreateReadForEntityAttributeMapConfiguration(), async (conn, transaction) =>
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
                        CommandText = "core_EntityAttributeMapConfigurationDetailQueryByConfigurationId"
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

                        parameter = new SqlParameter("@configurationid", SqlDbType.UniqueIdentifier)
                        {
                            Value = configurationId
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
                            string prefix = string.Empty;
                            if (await reader.ReadAsync())
                            {
                                prefix = reader["prefix"].ToString();
                            }

                            if (await reader.NextResultAsync())
                            {
                                while (await reader.ReadAsync())
                                {
                                    var detail = new EntityAttributeMapConfigurationDetail();
                                    StoreHelper.SetEntityAttributeMapConfigurationDetailSelectFields(detail, reader, prefix);

                                    result.Results.Add(detail);
                                }
                            }

                            reader.Close();

                            result.TotalCount = (int)commond.Parameters["@count"].Value;
                            result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                        }
                    }              
            });

            return result;
        }

        public QueryResult<EntityAttributeMapConfigurationDetail> QueryByPageSync(Guid configurationId, int page, int pageSize)
        {
            QueryResult<EntityAttributeMapConfigurationDetail> result = new QueryResult<EntityAttributeMapConfigurationDetail>();

            DBTransactionHelper.SqlTransactionWork(DBTypes.SqlServer, true, false, _dbConnectionFactory.CreateReadForEntityAttributeMapConfiguration(), (conn, transaction) =>
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
                        CommandText = "core_EntityAttributeMapConfigurationDetailQueryByConfigurationId",
                        Transaction = sqlTran
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

                        parameter = new SqlParameter("@configurationid", SqlDbType.UniqueIdentifier)
                        {
                            Value = configurationId
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

                        using (reader= commond.ExecuteReader())
                        {
                            string prefix = string.Empty;
                            if (reader.Read())
                            {
                                prefix = reader["prefix"].ToString();
                            }

                            if (reader.NextResult())
                            {
                                while (reader.Read())
                                {
                                    var detail = new EntityAttributeMapConfigurationDetail();
                                    StoreHelper.SetEntityAttributeMapConfigurationDetailSelectFields(detail, reader, prefix);

                                    result.Results.Add(detail);
                                }
                            }

                            reader.Close();

                            result.TotalCount = (int)commond.Parameters["@count"].Value;
                            result.CurrentPage = (int)commond.Parameters["@currentpage"].Value;
                        }
                    }

         
            });

            return result;
        }
    }
}
