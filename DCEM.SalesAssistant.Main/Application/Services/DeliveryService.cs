using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class DeliveryService : IDeliveryService
    {
        private ICrmService _crmService;
        private IDeliveryRepository _deliveryRepository;
        private const string entityName = "mcs_vehdelivery";
        private const string vinEntityName = "mcs_vehicle";
        private const string roEntityName = "mcs_vehorder";

        public DeliveryService(ICrmService crmService, IDeliveryRepository deliveryRepository)
        {
            _crmService = crmService;
            _deliveryRepository = deliveryRepository;
        }
        public async Task<DeliveryListResponse> getlist(DeliveryListRequest deliveryListRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var response = new DeliveryListResponse() { };
                XDocument fetchXdoc = null;
                if (!string.IsNullOrWhiteSpace(deliveryListRequest.SearchKey))
                {
                    var deliveryListDtoModel = new DeliveryListDtoModel();
                    deliveryListDtoModel.vinEntitys = GetCrmEntities(vinEntityName, deliveryListRequest, crmRequestHelper).Result;
                    deliveryListDtoModel.roEntitys = GetCrmEntities(roEntityName, deliveryListRequest, crmRequestHelper).Result;
                    fetchXdoc = await _deliveryRepository.GetListFetchXml(deliveryListRequest, deliveryListDtoModel);
                }
                else {
                      fetchXdoc = await _deliveryRepository.GetListFetchXml(deliveryListRequest, null);
                } 
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc, Guid.Parse(deliveryListRequest.UserId));
                response.Deliverys = entities.Results;
                response.ALLTotalCount = entities.Count;
                response.PageSize = deliveryListRequest.PageSize;
                response.CurrentPage = deliveryListRequest.PageIndex;
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        #region 私有方法
        private async Task<List<CrmEntity>> GetCrmEntities(string entityName, DeliveryListRequest deliveryListRequest, CrmRequestHelper crmRequestHelper)
        {
            XDocument fetchXdoc = null;
            switch (entityName)
            {
                case "mcs_vehicle":
                    fetchXdoc = await _deliveryRepository.GetVINListFetchXml(deliveryListRequest);
                    break;
                case "mcs_vehorder":
                    fetchXdoc = await _deliveryRepository.GetRoOrderListFetchXml(deliveryListRequest);
                    break;
            }
            var entitys = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc, Guid.Parse(deliveryListRequest.UserId));
            return entitys.Results;
        }
        #endregion
    }
}
