using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using MSLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Factory
{
    public class ActivityFactory : IFactory<Task<IAppActivity>>
    {
        public async Task<IAppActivity> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IActivityRepository repository = new ActivityRepository();
                IActivityService service = new ActivityService(crmService, repository);
                IAppActivity app = new AppActivity(service); 
                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
