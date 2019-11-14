using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IDeliveryRepository
    {
        Task<XDocument> GetListFetchXml(DeliveryListRequest deliveryListRequest, DeliveryListDtoModel deliveryListDtoModel);
        Task<XDocument> GetVINListFetchXml(DeliveryListRequest deliveryListRequest);

        Task<XDocument> GetRoOrderListFetchXml(DeliveryListRequest deliveryListRequest);

        Task<XDocument> GetOrderPayListFetchXml(CollectionListRequest collectionListRequest);

        Task<XDocument> GetServiceConsultantListFetchXml(DeliveryEditRequest deliveryEditRequest);
    }
}
