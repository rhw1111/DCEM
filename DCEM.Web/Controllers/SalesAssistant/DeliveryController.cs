using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using System;
using Microsoft.AspNetCore.Http;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.Main.Entities;
using DCEM.Main;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 交车单
    /// </summary>
    [Route("api/delivery")]
    [EnableCors("any")]
    [ApiController]
    public class DeliveryController : ApiController
    {

        private IAppDelivery _appDelivery;
        public DeliveryController()
        {
            _appDelivery = new DeliveryFactory().Create().Result;
        }
        /// <summary>
        /// 获取交车单列表
        /// </summary> 
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<DeliveryListResponse>> getlist(DeliveryListRequest deliveryListRequest)
        {
            return await _appDelivery.getlist(deliveryListRequest);
        }
        /// <summary>
        /// 获取交车单详情
        /// </summary> 
        [Route("get")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> get(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _appDelivery.get(deliveryDetailRequest);
        }
        /// <summary>
        /// 获取收款记录列表
        /// </summary> 
        [Route("getcollections")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CollectionListResponse>> getcollections(CollectionListRequest collectionListRequest)
        {
            return await _appDelivery.getcollections(collectionListRequest);
        }
        /// <summary>
        /// 获取收款记录详情
        /// </summary> 
        [Route("getorderpay")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getorderpay(CollectionDetailRequest collectionDetailRequest)
        {
            return await _appDelivery.getorderpay(collectionDetailRequest);
        }

        /// <summary>
        /// 编辑预约信息
        /// </summary> 
        [Route("appointment")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> appointment(DeliveryEditRequest deliveryEditRequest)
        { 
            return await _appDelivery.appointment(deliveryEditRequest);
        }
        /// <summary>
        /// 获取服务顾问
        /// </summary> 
        [Route("getservicconsultant")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ServiceConsultantListResponse>> getservicconsultant(DeliveryEditRequest deliveryEditRequest)
        {
            return await _appDelivery.getservicconsultant(deliveryEditRequest);
        }
        /// <summary>
        /// 提交pdi检测
        /// </summary> 
        [Route("submitpdi")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> submitpdi(DeliveryEditRequest deliveryEditRequest)
        {
            return await _appDelivery.submitpdi(deliveryEditRequest);
        }
        /// <summary>
        /// 获取物料码详情
        /// </summary> 
        [Route("getmateriel")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getmateriel(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _appDelivery.getmateriel(deliveryDetailRequest);
        }
        /// <summary>
        /// 增加收款记录
        /// </summary> 
        [Route("addorderpay")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> addorderpay(OrderPayEditRequest orderPayEditRequest)
        {
            return await _appDelivery.addorderpay(orderPayEditRequest);
        }
        /// <summary>
        /// 完成收款
        /// </summary> 
        [Route("moneycompleted")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> moneycompleted(DeliveryDetailRequest  deliveryDetailRequest)
        {
            return await _appDelivery.moneycompleted(deliveryDetailRequest);
        }

        /// <summary>
        /// 获取交车单流程
        /// </summary> 
        [Route("getdeliverorderflow")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getdeliverorderflow(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _appDelivery.getdeliverorderflow(deliveryDetailRequest);
        }

        /// <summary>
        /// 获取尾款
        /// </summary> 
        [Route("gettailmoney")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<decimal>>> gettailmoney(string id)
        {
            return await _appDelivery.gettailmoney(id);
        }
    }
}


