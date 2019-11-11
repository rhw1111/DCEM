
//功能描述：整车订单工程类
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
    public class VehorderFactory : IFactory<Task<IAppVehorder>>
    {
        public async Task<IAppVehorder> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IVehorderRepository vehorderRepository = new VehorderRepository();
                IVehorderService VehorderService = new VehorderService(crmService, vehorderRepository);
                IAppVehorder app = new AppVehorder(VehorderService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
