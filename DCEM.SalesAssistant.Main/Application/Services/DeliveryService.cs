using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
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
        private const string orderpayEntityName = "mcs_orderpaydetail";
        private const string systemuserEntityName = "systemuser";

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
                else
                {
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

        public async Task<CollectionListResponse> getcollections(CollectionListRequest collectionListRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var response = new CollectionListResponse() { };
                XDocument fetchXdoc = await _deliveryRepository.GetOrderPayListFetchXml(collectionListRequest);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, orderpayEntityName, fetchXdoc, Guid.Parse(collectionListRequest.UserId));
                response.Collections = entities.Results;
                response.ALLTotalCount = entities.Count;
                response.PageSize = collectionListRequest.PageSize;
                response.CurrentPage = collectionListRequest.PageIndex;
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<CrmEntity> get(DeliveryDetailRequest deliveryDetailRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(deliveryDetailRequest.Id), Guid.Parse(deliveryDetailRequest.UserId));
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<CrmEntity> getorderpay(CollectionDetailRequest collectionDetailRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, orderpayEntityName, Guid.Parse(collectionDetailRequest.Id), Guid.Parse(collectionDetailRequest.UserId));
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<ValidateResult<string>> appointment(DeliveryEditRequest deliveryEditRequest)
        {
            try
            {
                var validateResult = new ValidateResult<string>();
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(deliveryEditRequest.id));
                if (entity != null)
                {
                    var deliverystatus = entity.Attributes.Value<int>("mcs_deliverystatus");
                    //已检测
                    if (deliverystatus != 3)
                    {
                        validateResult.Result = false;
                        validateResult.Description = "交车单状态不符合！";
                        return validateResult;
                    }
                    var delivery = new CrmExecuteEntity(entityName, Guid.Parse(deliveryEditRequest.id));
                    delivery.Attributes.Add("mcs_customerrequest", deliveryEditRequest.customerrequest);
                    delivery.Attributes.Add("mcs_appointmenton", DateTime.Parse(deliveryEditRequest.appointmenton));
                    delivery.Attributes.Add("mcs_deliverystatus", 4);
                    await _crmService.Update(delivery);
                    validateResult.Result = true;
                    validateResult.Description = "操作成功";
                    return validateResult;
                }
                else
                {
                    validateResult.Result = false;
                    validateResult.Description = "交车单不存在！";
                    return validateResult;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public async Task<ServiceConsultantListResponse> getservicconsultant(DeliveryEditRequest deliveryEditRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var response = new ServiceConsultantListResponse() { };
                XDocument fetchXdoc = fetchXdoc = await _deliveryRepository.GetServiceConsultantListFetchXml(deliveryEditRequest);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, systemuserEntityName, fetchXdoc);
                response.ServiceConsultants = entities.Results; 
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
