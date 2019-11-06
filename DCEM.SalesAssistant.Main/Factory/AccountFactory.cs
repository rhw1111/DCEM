/*
    文件名：AccountFactory.cs
    功能描述：销售机会管理  
    创建时间：2019年11月05日
    作者：贺勋
*/
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Services;
using MSLibrary;
using System;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Factory
{
    public class AccountFactory : IFactory<Task<IAppAccount>>
    {
        public async Task<IAppAccount> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IAccountRepository accountRepository = new AccountRepository();
                IAccountService accountService = new AccountService(crmService, accountRepository);
                IAppAccount app = new AppAccount(accountService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
