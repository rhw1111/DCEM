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
    }
}


