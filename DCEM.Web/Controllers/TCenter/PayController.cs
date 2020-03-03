using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.Factory;
using MSLibrary;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.Main.TCenter;
using DCEM.Main.Entities.TCenter.Response.Payment;
using DCEM.Main.Entities.TCenter.Request.Payment;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 支付接口
    /// </summary>
    [Route("api/pay")]
    public class PayController : ApiController
    {
        /// <summary>
        /// IAppProduct 工厂，默认使用 TCenterFactory
        /// </summary>
        public static ITCenterFactory _tCenterFactory;
        /// <summary>
        /// 提供静态属性用于替换ITCenterFactory工厂
        /// </summary>
        public PayController(ITCenterFactory tCenterFactory)
        {
            _tCenterFactory = tCenterFactory;
        }
        ///// <summary>
        ///// 订单定金支付记录同步接口
        ///// </summary>
        //[HttpPost]
        //[Route("SyncPayedRecords")]
        ////[InterfaceSuccessFilter]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<TailMoneyPayResponse> SyncPayedRecords([FromBody]List<TailMoneyPayRequest> request)
        //{
        //    //var app = _payLogicFactory.Create();
        //    //var result = app.SyncPayedRecords(request);
        //    //return await result;
        //    var logic = orderLogicFactory.Create();
        //    return await logic.SyncPayedHistory(request);
        //}
        /// <summary>
        /// 模拟微信/支付宝退款接口
        /// </summary>
        [HttpPost]
        [Route("simulatedrefund")]
        //[InterfaceSuccessFilter]
        //[OtherSystemAuthenticationActionFilter]
        public async Task<SimulatedRefundResponse> SyncPayedRecords([FromBody]SimulatedRefundRequest request)
        {
            //var app = _payLogicFactory.Create();
            //var result = app.SyncPayedRecords(request);
            //return await result;
            var payLogic = await _tCenterFactory.Create();
            return await payLogic.SimulatedRefund(request);
        }
    }
}