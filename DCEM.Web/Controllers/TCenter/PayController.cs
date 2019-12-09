//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Cors;
//using DCEM.UserCenterService.Main.Application.App.Contrac;
//using System.Threading.Tasks;
//using MSLibrary.Xrm;
//using DCEM.UserCenterService.Main.Factory;
//using MSLibrary;
//using DCEM.UserCenterService.Main.ViewModel.Request;

//namespace DCEM.Web.Controllers
//{
//    /// <summary>
//    /// 支付接口
//    /// </summary>
//    [Route("api/pay")]
//    public class PayController : ApiController
//    {
//        ///// <summary>
//        ///// IAppPay 工厂，默认使用 PayLogicFactory
//        ///// </summary>
//        //private static IFactory<IPaymentLogic> _payLogicFactory = new PaymentLogicFactory();
//        private static readonly CRM.Core.IFactory<IOrderManager> orderLogicFactory = new OrderManagerFactory();
//        /// <summary>
//        /// 订单定金支付记录同步接口
//        /// </summary>
//        [HttpPost]
//        [Route("SyncPayedRecords")]
//        //[InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<TailMoneyPayResponse> SyncPayedRecords([FromBody]List<TailMoneyPayRequest> request)
//        {
//            //var app = _payLogicFactory.Create();
//            //var result = app.SyncPayedRecords(request);
//            //return await result;
//            var logic = orderLogicFactory.Create();
//            return await logic.SyncPayedHistory(request);
//        }
//    }
//}