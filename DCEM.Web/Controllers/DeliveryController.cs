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
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<DeliveryListResponse>> getlist(DeliveryListRequest deliveryListRequest)
        {
            return await _appDelivery.getlist(deliveryListRequest);
        }

        [Route("get")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> get(DeliveryDetailRequest deliveryDetailRequest)
        {
            return await _appDelivery.get(deliveryDetailRequest);
        }

        [Route("getcollections")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CollectionListResponse>> getcollections(CollectionListRequest collectionListRequest)
        {
            return await _appDelivery.getcollections(collectionListRequest);
        }

        [Route("getorderpay")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getorderpay(CollectionDetailRequest collectionDetailRequest)
        {
            return await _appDelivery.getorderpay(collectionDetailRequest);
        }


        [Route("appointment")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> appointment(DeliveryEditRequest deliveryEditRequest)
        { 
            return await _appDelivery.appointment(deliveryEditRequest);
        }

        [Route("getservicconsultant")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ServiceConsultantListResponse>> getservicconsultant(DeliveryEditRequest deliveryEditRequest)
        {
            return await _appDelivery.getservicconsultant(deliveryEditRequest);
        }
    }
}


