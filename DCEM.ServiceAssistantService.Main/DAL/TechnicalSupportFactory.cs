using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;
using MSLibrary.LanguageTranslate;
using MSLibrary.Serializer;
using System.Net.Http;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class TechnicalSupportFactory : IFactory<Task<IAppTechnicalSupport>>
    {
        public async Task<IAppTechnicalSupport> Create()
        {
            try
            {
                var crmService= StartupHelper.CreateCrmService();
                ITechnicalSupportRepository followRepository = new TechnicalSupportRepository();
                ITechnicalSupportService technicalSupportService = new TechnicalSupportService(crmService);
                IAppTechnicalSupport app = new AppTechnicalSupport(technicalSupportService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
