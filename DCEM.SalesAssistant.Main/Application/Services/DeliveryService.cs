using DCEM.Main;
using DCEM.Main.Entities;
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
        private const string vehmaterialEntityName = "mcs_vehiclematerial";
        private const string dealerEntityName = "mcs_dealer";
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
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
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
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, orderpayEntityName, fetchXdoc);
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
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(deliveryDetailRequest.Id));
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
                    delivery.Attributes.Add("mcs_appointmenton", deliveryEditRequest.appointmenton.ToUniversalTime());
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
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                deliveryEditRequest.dealerId = userInfo?.mcs_dealerid;
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

        public async Task<ValidateResult<string>> submitpdi(DeliveryEditRequest deliveryEditRequest)
        {
            try
            {
                var validateResult = new ValidateResult<string>();
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(deliveryEditRequest.id));
                if (entity != null)
                {
                    var deliverystatus = entity.Attributes.Value<int>("mcs_deliverystatus");
                    //待检测
                    if (deliverystatus != 2)
                    {
                        validateResult.Result = false;
                        validateResult.Description = "交车单状态不符合！";
                        return validateResult;
                    }
                    var delivery = new CrmExecuteEntity(entityName, Guid.Parse(deliveryEditRequest.id));
                    var systemuser = new CrmEntityReference(systemuserEntityName, Guid.Parse(deliveryEditRequest.adviser));
                    delivery.Attributes.Add("mcs_serviceproxyid", systemuser);
                    delivery.Attributes.Add("mcs_deliverystatus", 3);
                    delivery.Attributes.Add("mcs_submitpdi", true);
                    delivery.Attributes.Add("mcs_submitpdion", DateTime.UtcNow);
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


        public async Task<CrmEntity> getmateriel(DeliveryDetailRequest deliveryDetailRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, vehmaterialEntityName, Guid.Parse(deliveryDetailRequest.materielId));
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<CrmEntity> getdeliverorderflow(DeliveryDetailRequest deliveryDetailRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = fetchXdoc = await _deliveryRepository.Getdeliverorderflow(deliveryDetailRequest);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, systemuserEntityName, fetchXdoc);
                return entities.Results[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<ValidateResult<string>> addorderpay(OrderPayEditRequest orderPayEditRequest)
        {
            try
            {
                var validateResult = new ValidateResult<string>();
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(orderPayEditRequest.delivery));
                if (entity != null)
                {
                    var deliverystatus = entity.Attributes.Value<int>("mcs_deliverystatus");
                    //已检测
                    if (deliverystatus >= 5)
                    {
                        validateResult.Result = false;
                        validateResult.Description = "交车单状态不符合！";
                        return validateResult;
                    }
                    var deliveryef = new CrmEntityReference(entity.EntityName, entity.Id);
                    var createentity = new CrmExecuteEntity(orderpayEntityName, Guid.NewGuid());
                    createentity.Attributes.Add("mcs_paycategory", orderPayEditRequest.paycategory);
                    createentity.Attributes.Add("mcs_payon", orderPayEditRequest.payon.ToUniversalTime());
                    createentity.Attributes.Add("mcs_vehdelivery", deliveryef);
                    var vehorderId = entity.Attributes.Value<string>("_mcs_vehorder_value");
                    if (!string.IsNullOrEmpty(vehorderId))
                    {
                        var vehorderrf = new CrmEntityReference(roEntityName,Guid.Parse(vehorderId));
                        createentity.Attributes.Add("mcs_vehorder", vehorderrf);
                    }
                    var dealerid = entity.Attributes.Value<string>("_mcs_dealer_value");
                    if (!string.IsNullOrEmpty(dealerid))
                    {
                        var dealerrf = new CrmEntityReference(dealerEntityName, Guid.Parse(dealerid));
                        createentity.Attributes.Add("mcs_dealer", dealerrf);
                    } 
                    createentity.Attributes.Add("mcs_amount", orderPayEditRequest.amount); 
                    createentity.Attributes.Add("mcs_batchcode", orderPayEditRequest.batchcode);
                    await _crmService.Create(createentity);
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

        public async Task<ValidateResult<string>> moneycompleted(DeliveryDetailRequest deliveryDetailRequest)
        {
            try
            {
                var validateResult = new ValidateResult<string>();
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(deliveryDetailRequest.Id));
                if (entity != null)
                {
                    var deliverystatus = entity.Attributes.Value<int>("mcs_deliverystatus");
                    //待检测
                    if (deliverystatus != 4)
                    {
                        validateResult.Result = false;
                        validateResult.Description = "交车单状态不符合！";
                        return validateResult;
                    }
                    var delivery = new CrmExecuteEntity(entityName, Guid.Parse(deliveryDetailRequest.Id));
                    delivery.Attributes.Add("mcs_settlestatus", 1); 
                    delivery.Attributes.Add("mcs_deliverystatus",5);
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
        public async Task<ValidateResult<string>> gettailmoney(string id)
        {
            try
            {
                var validateResult = new ValidateResult<string>();
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(id));
                if (entity != null)
                {
                    var deliverystatus = entity.Attributes.Value<int>("mcs_settlestatus");
                    //结清状态0未结算1已结算
                    if (deliverystatus != 0)
                    {
                        validateResult.Result = false;
                        validateResult.Description = "交车单结清状态不符合！";
                        return validateResult;
                    }
                    //整车订单id
                    var vehorderId = entity.Attributes.Value<string>("_mcs_vehorder_value");
                    //整车订单实体
                    var vehorderrf = await crmRequestHelper.Retrieve(_crmService, roEntityName, Guid.Parse(vehorderId));
        
                    var totalamount = vehorderrf.Attributes.Value<decimal>("mcs_totalamount");
                    var earnest = vehorderrf.Attributes.Value<decimal>("mcs_earnest");
                    var tailmoney = totalamount - earnest;

                    validateResult.Result = true;
                    validateResult.Description = tailmoney.ToString();
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
            var entitys = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
            return entitys.Results;
        }
        #endregion
    }
}
