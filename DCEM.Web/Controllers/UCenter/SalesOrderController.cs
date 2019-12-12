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
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// C端商城订单
    /// </summary>
    [Route("api/salesorder")]
    [EnableCors("any")]
    [ApiController]
    public class SalesOrderController : ApiController
    {

        private IAppSalesOrder _appSalesOrder;
        public SalesOrderController()
        {
            _appSalesOrder = new SalesOrderFactory().Create().Result;
        }
        /// <summary>
        /// 获取门店列表
        /// </summary> 
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<SalesOrderListResponse>> getlist(SalesOrderListRequest salesOrderListRequest)
        {
            return await _appSalesOrder.getlist(salesOrderListRequest);
        }
    }
}


