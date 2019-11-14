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
    public class  VehnetworkFactory : IFactory<Task<IAppVehnetwork>>
    {
        public async Task<IAppVehnetwork> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IVehnetworkRepository repository = new VehnetworkRepository();
                IVehnetworkService service = new VehnetworkService(crmService, repository);
                IAppVehnetwork app = new AppVehnetwork(service); 
                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
