using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class TechnicalSupportFactory : IFactory<IAppTechnicalSupport>
    {
        public IAppTechnicalSupport Create()
        {
            ITechnicalSupportRepository followRepository = new TechnicalSupportRepository();
            ITechnicalSupportService technicalSupportService = new TechnicalSupportService();
            IAppTechnicalSupport app = new AppTechnicalSupport(technicalSupportService);
            return app;
        }
    }
}
