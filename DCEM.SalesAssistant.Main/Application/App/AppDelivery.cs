//shengf,2019.11.11
//整车销售交车单
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppDelivery : IAppDelivery
    {
       
        private IDeliveryService _service;
        public AppDelivery(IDeliveryService deliveryService)
        {
            _service = deliveryService;
        }
        
        public async Task<DeliveryListResponse> getlist(DeliveryListRequest deliveryListRequest)
        {
           return await _service.getlist(deliveryListRequest);
        }
        
    }
}
