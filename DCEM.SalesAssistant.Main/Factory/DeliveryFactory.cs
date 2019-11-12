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
    public class DeliveryFactory: IFactory<Task<IAppDelivery>>
    {
        public async Task<IAppDelivery> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IDeliveryRepository deliveryRepository = new DeliveryRepository();
                IDeliveryService deliveryService = new DeliveryService(crmService, deliveryRepository);
                IAppDelivery app = new AppDelivery(deliveryService); 
                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
