using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using Newtonsoft.Json.Linq;
using MSLibrary.Xrm;
using MSLibrary;

namespace DCEM.Web.Controllers.UCenter
{
    using DCEM.UserCenterService.Main.Application.Services.Contrac;

    [EnableCors("any")]
    [Route("api/Store")]
    [ApiController]
    public class StoreServiceController : ApiController
    {
        public IStoreService _storeService = null;
        public StoreServiceController()
        {
            _storeService = new StoreFactory().Create().Result;
        }


        /// <summary>
        ///  商品查询接口
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetProductList")]
        public async Task<NewtonsoftJsonActionResult<ProducListResponse>> GetProductList([FromQuery]ProducListRequest request)
        {
            return await _storeService.QueryProductList(request);
        }

        /// <summary>
        ///  订单查询接口
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetOrderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<JObject>>> GetOrderList(int pageindex = 1, string search = "")
        {
            return await _storeService.QueryOrderList(pageindex, search);
        }


        /// <summary>
        ///  订单创建接口
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        //[HttpPost]
        //[Route("CreateOrder")]
        //public async Task<NewtonsoftJsonActionResult<CreateOrderResponse>> CreateOrder([FromBody]object body)
        //{
        //    JObject jo = JObject.Parse(body.ToString());
        //    return await _storeService.CreateOrder(jo);
        //}
    }
}
