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
    public class VehlisenseFactory : IFactory<Task<IAppVehlisense>>
    {
        public async Task<IAppVehlisense> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IVehlisenseRepository repository = new VehlisenseRepository();
                IVehlisenseService service = new VehlisenseService(crmService, repository);
                IAppVehlisense app = new AppVehlisense(service); 
                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
