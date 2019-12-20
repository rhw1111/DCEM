//shengf,2019.11.11
//整车销售交车单
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
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
        public async Task<CrmEntity> get(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _service.get(deliveryDetailRequest);
        }

        public async Task<CollectionListResponse> getcollections(CollectionListRequest collectionListRequest)
        {
            return await _service.getcollections(collectionListRequest);
        }

        public async Task<CrmEntity> getorderpay(CollectionDetailRequest collectionDetailRequest)
        {
            return await _service.getorderpay(collectionDetailRequest);
        }

        public async Task<ValidateResult<string>> appointment(DeliveryEditRequest deliveryEditRequest)
        {
            return await _service.appointment(deliveryEditRequest);
        }


        public async Task<ServiceConsultantListResponse> getservicconsultant(DeliveryEditRequest deliveryEditRequest)
        {
            return await _service.getservicconsultant(deliveryEditRequest);
        }

        public async Task<ValidateResult<string>> submitpdi(DeliveryEditRequest deliveryEditRequest)
        {
            return await _service.submitpdi(deliveryEditRequest);
        }

       
        public async Task<CrmEntity> getmateriel(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _service.getmateriel(deliveryDetailRequest);
        }

        public async Task<ValidateResult<string>> addorderpay(OrderPayEditRequest orderPayEditRequest)
        {
            return await _service.addorderpay(orderPayEditRequest);
        }

        public async Task<ValidateResult<string>> moneycompleted(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _service.moneycompleted(deliveryDetailRequest);
        }

        public async Task<CrmEntity> getdeliverorderflow(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _service.getdeliverorderflow(deliveryDetailRequest);
        }

        public async Task<ValidateResult<string>> gettailmoney(string id)
        {
            return await _service.gettailmoney(id);
        }
    }
}
