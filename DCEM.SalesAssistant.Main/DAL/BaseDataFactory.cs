using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Services;
using MSLibrary;
using System;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.DAL
{
    public class BaseDataFactory: IFactory<Task<IAppBaseData>>
    {
        public async Task<IAppBaseData> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IBaseDataRepository baseDataRepository = new BaseDataRepository();
                IBaseDataService baseDataService = new BaseDataService(crmService, baseDataRepository);
                IAppBaseData app = new AppBaseData(baseDataService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
