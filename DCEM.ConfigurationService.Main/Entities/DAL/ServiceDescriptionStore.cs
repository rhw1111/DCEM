using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using MSLibrary;
using MSLibrary.Context;
using MSLibrary.Context.DAL;
using MSLibrary.DI;
using MSLibrary.Transaction;
using MSLibrary.DAL;
using Microsoft.EntityFrameworkCore;
using DCEM.ConfigurationService.Main.DAL;

namespace DCEM.ConfigurationService.Main.Entities.DAL
{
    [Injection(InterfaceType = typeof(IServiceDescriptionStore), Scope = InjectionScope.Singleton)]
    public class ServiceDescriptionStore : IServiceDescriptionStore
    {
        private IDBConnectionMainFactory _dbConnectionMainFactory;

        public ServiceDescriptionStore(IDBConnectionMainFactory dbConnectionMainFactory)
        {
            _dbConnectionMainFactory = dbConnectionMainFactory;
        }
        public async Task Add(ServiceDescription description)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _dbConnectionMainFactory.CreateAllForMain(), async (conn, transaction) =>
            {
                var currentUTC = DateTime.UtcNow;
                description.CreateTime = currentUTC;
                description.ModifyTime = currentUTC;

                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);
                    dbContext.ServiceDescriptions.Add(description);

                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        await dbContext.SaveChangesAsync();
                    });
                }

            });
        }

        public async Task Delete(Guid id)
        {
            var entity = new ServiceDescription() { ID = id };
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _dbConnectionMainFactory.CreateAllForMain(), async (conn, transaction) =>
            {
                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);
                    dbContext.ServiceDescriptions.Attach(entity);
                    dbContext.ServiceDescriptions.Remove(entity);
                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        await dbContext.SaveChangesAsync();
                    });
                }
            });
        }

        public async Task<ServiceDescription> QueryByID(Guid id)
        {
            ServiceDescription description = null;
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _dbConnectionMainFactory.CreateReadForMain(), async (conn, transaction) =>
            {
                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);
                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        description = await dbContext.ServiceDescriptions.Where(item => item.ID == id ).FirstOrDefaultAsync();
                    });
                }
            });

            return description;
        }

        public async Task<ServiceDescription> QueryByName(string name)
        {
            ServiceDescription description = null;
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _dbConnectionMainFactory.CreateReadForMain(), async (conn, transaction) =>
            {
                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);
                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        description = await dbContext.ServiceDescriptions.Where(item => item.Name == name).FirstOrDefaultAsync();
                    });
                }
            });

            return description;
        }

        public async Task<QueryResult<ServiceDescription>> QueryByPage(string name, int page, int pageSize)
        {
            QueryResult<ServiceDescription> result = new QueryResult<ServiceDescription>();

            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, true, false, _dbConnectionMainFactory.CreateReadForMain(), async (conn, transaction) =>
            {
                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);

                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        var templates = dbContext.ServiceDescriptions.Where(a => EF.Functions.Like(a.Name,$"{name.ToSqlLike()}%"));
                        result.TotalCount = await templates.CountAsync();
                        result.CurrentPage = page;
                        result.Results = await templates.OrderByDescending(a => a.CreateTime).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
                    });
                }
            });
            return result;
        }

        public async Task Update(ServiceDescription description)
        {
            await DBTransactionHelper.SqlTransactionWorkAsync(DBTypes.SqlServer, false, false, _dbConnectionMainFactory.CreateAllForMain(), async (conn, transaction) =>
            {
                var current = DateTime.UtcNow;
                description.ModifyTime = current;

                using (var dbContext = EntityDBContextFactory.Create(conn))
                {
                    dbContext.Database.UseTransaction(transaction);
                    dbContext.ServiceDescriptions.Attach(description);
                    var entry = dbContext.Entry(description);
                    if (description.Attributes.ContainsKey("Name"))
                    {
                        entry.Property((r) => r.Name).IsModified = true;
                    }

                    if (description.Attributes.ContainsKey("Address"))
                    {
                        entry.Property((r) => r.Address).IsModified = true;
                    }

                    if (description.Attributes.ContainsKey("AuthInfoType"))
                    {
                        entry.Property((r) => r.AuthInfoType).IsModified = true;
                    }

                    entry.Property((r) => r.ModifyTime).IsModified = true;

                    await DBOperateHelper.DbContextExceptionHandler(async () =>
                    {
                        await dbContext.SaveChangesAsync();
                    });
                }

            });
        }
    }
}
