/*
    文件名：OnlyLeadFactory.cs
    功能描述：唯一线索工厂类  
    创建时间：2019年11月05日
    作者：黄贤顺
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

namespace DCEM.SalesAssistant.Main.DAL
{
    public class OnlyLeadFactory : IFactory<Task<IAppOnlyLead>>
    {
        public async Task<IAppOnlyLead> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IOnlyLeadRepository onlyLeadRepository = new OnlyLeadRepository();
                IOnlyLeadService OnlyLeadService = new OnlyLeadService(crmService, onlyLeadRepository);
                IAppOnlyLead app = new AppOnlyLead(OnlyLeadService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
