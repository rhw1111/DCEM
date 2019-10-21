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

            var serviceFactory = await CrmServiceFactoryRepositoryHelper.QueryByName("");
            //var serviceFactory = new CrmServiceFactory();
            if (serviceFactory == null)
            {
                throw new UtilityException((int)Errors.NotFountCrmServiceFactorybyName, null);
            }
            ICrmService _crmService = await serviceFactory.Create();
            //ICrmService _crmService = new CrmService(null, null, null, null) {
            //    CrmApiVersion = "1.0.0.0",
            //    CrmApiMaxRetry = 10,
            //    CrmUrl = CrmConfirguration.MSCRM_URL,
            //    TokenServiceType = "",
            //};

            ITechnicalSupportRepository followRepository = new TechnicalSupportRepository();
            ITechnicalSupportService technicalSupportService = new TechnicalSupportService(_crmService);
            IAppTechnicalSupport app = new AppTechnicalSupport(technicalSupportService);
            
            return  app;
        }
    }
}
