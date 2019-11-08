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
    public class OriginalclueFactory : IFactory<Task<IAppOriginalclue>>
    {
        public async Task<IAppOriginalclue> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IOriginalclueRepository originalclueRepository = new OriginalclueRepository();
                ICustomerLabelRepository customerLabelRepository = new CustomerLabelRepository();
                IOriginalclueService originalclueService = new OriginalclueService(crmService, originalclueRepository, customerLabelRepository);
                IAppOriginalclue app = new AppOriginalclue(originalclueService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
