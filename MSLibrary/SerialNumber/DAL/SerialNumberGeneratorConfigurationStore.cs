using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using MSLibrary.DI;
using MSLibrary.DAL;
using MSLibrary.Collections.Hash;
using MSLibrary.LanguageTranslate;
using MSLibrary.Transaction;


namespace MSLibrary.SerialNumber.DAL
{
    /// <summary>
    /// 序列号生成配置数据操作
    /// </summary>
    [Injection(InterfaceType = typeof(ISerialNumberGeneratorConfigurationStore), Scope = InjectionScope.Singleton)]
    public class SerialNumberGeneratorConfigurationStore : ISerialNumberGeneratorConfigurationStore
    {
        private ISerialNumberConnectionFactory _serialNumberConnectionFactory;
        public SerialNumberGeneratorConfigurationStore(ISerialNumberConnectionFactory serialNumberConnectionFactory)
        {
            _serialNumberConnectionFactory = serialNumberConnectionFactory;
        }

        public async Task Add(SerialNumberGeneratorConfiguration configuration)
        {
            //获取读写连接字符串
            var strConn = _serialNumberConnectionFactory.CreateAllForSerialNumber();
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
                    CommandText = "dbo.core_SerialNumberGeneratorConfigurationAdd",
                    Transaction = sqlTran
                })
                {



                    SqlParameter parameter;
                    if (configuration.ID != Guid.Empty)
                    {
                        parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                        {
                            Value = configuration.ID
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

                    parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = configuration.Name
                    };
                    commond.Parameters.Add(parameter);


                    parameter = new SqlParameter("@prefixtemplate", SqlDbType.NVarChar, 1000)
                    {
                        Value = configuration.PrefixTemplate
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@seriallength", SqlDbType.Int)
                    {
                        Value = configuration.SerialLength
                    };
                    commond.Parameters.Add(parameter);


                    parameter = new SqlParameter("@newid", SqlDbType.UniqueIdentifier)
                    {
                        Direction = ParameterDirection.Output
                    };
                    commond.Parameters.Add(parameter);


                    commond.Prepare();


                        await commond.ExecuteNonQueryAsync();
                  


                    if (configuration.ID == Guid.Empty)
                    {
                        configuration.ID = (Guid)commond.Parameters["@newid"].Value;
                    }
                }
            });
        }

        public async Task Delete(Guid id)
        {
            //获取读写连接字符串
            var strConn = _serialNumberConnectionFactory.CreateAllForSerialNumber();
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
                    CommandText = @"dbo.core_SerialNumberGeneratorConfigurationDelete"
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

        public async Task<SerialNumberGeneratorConfiguration> QueryById(Guid id)
        {
            SerialNumberGeneratorConfiguration configuration = null;

            //获取只读连接字符串
            var strConn = _serialNumberConnectionFactory.CreateReadForSerialNumber();


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
                    CommandText = string.Format(@"select {0} from SerialNumberGeneratorConfiguration
                                                  where [id]=@id", StoreHelper.GetSerialNumberGeneratorConfigurationSelectFields(string.Empty))
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
                            configuration = new SerialNumberGeneratorConfiguration();
                            StoreHelper.SetSerialNumberGeneratorConfigurationSelectFields(configuration, reader, string.Empty);
                        }

                        reader.Close();
                    }
                }
            });

            return configuration;
        }

        public async Task<SerialNumberGeneratorConfiguration> QueryByName(string name)
        {
            SerialNumberGeneratorConfiguration configuration = null;

            //获取只读连接字符串
            var strConn = _serialNumberConnectionFactory.CreateReadForSerialNumber();


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
                    CommandText = string.Format(@"select {0} from SerialNumberGeneratorConfiguration
                                                  where [name]=@name", StoreHelper.GetSerialNumberGeneratorConfigurationSelectFields(string.Empty))
                })
                {

                    var parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = name
                    };
                    commond.Parameters.Add(parameter);

                    commond.Prepare();

                    SqlDataReader reader = null;


                        reader = await commond.ExecuteReaderAsync();
                    


                    using (reader= await commond.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            configuration = new SerialNumberGeneratorConfiguration();
                            StoreHelper.SetSerialNumberGeneratorConfigurationSelectFields(configuration, reader, string.Empty);
                        }

                        reader.Close();
                    }
                }
            });

            return configuration;
        }

        public async Task Update(SerialNumberGeneratorConfiguration configuration)
        {
            //获取读写连接字符串
            var strConn = _serialNumberConnectionFactory.CreateAllForSerialNumber();

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
                    CommandText = @"dbo.core_SerialNumberGeneratorConfigurationUpdate"
                })
                {

                    var parameter = new SqlParameter("@id", SqlDbType.UniqueIdentifier)
                    {
                        Value = configuration.ID
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@name", SqlDbType.NVarChar, 100)
                    {
                        Value = configuration.Name
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@prefixtemplate", SqlDbType.NVarChar, 1000)
                    {
                        Value = configuration.PrefixTemplate
                    };
                    commond.Parameters.Add(parameter);

                    parameter = new SqlParameter("@seriallength", SqlDbType.Int)
                    {
                        Value = configuration.SerialLength
                    };
                    commond.Parameters.Add(parameter);


                    commond.Prepare();


                        await commond.ExecuteNonQueryAsync();
                   

                }
            });
        }
    }
}
