using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppDelivery
    {
        Task<DeliveryListResponse> getlist(DeliveryListRequest deliveryListRequest);
        Task<CrmEntity> get(DeliveryDetailRequest deliveryDetailRequest);

        Task<CollectionListResponse> getcollections(CollectionListRequest collectionListRequest);

        Task<CrmEntity> getorderpay(CollectionDetailRequest collectionDetailRequest);

        Task<ValidateResult<string>> appointment(DeliveryEditRequest deliveryEditRequest);
        Task<ServiceConsultantListResponse> getservicconsultant(DeliveryEditRequest deliveryEditRequest);

        Task<ValidateResult<string>> submitpdi(DeliveryEditRequest deliveryEditRequest);

        Task<CrmEntity> getmateriel(DeliveryDetailRequest deliveryDetailRequest);

        Task<ValidateResult<string>> addorderpay(OrderPayEditRequest orderPayEditRequest);

        Task<ValidateResult<string>> moneycompleted(DeliveryDetailRequest deliveryDetailRequest);
    }
}
