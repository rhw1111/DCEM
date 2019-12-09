//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Cors;
//using DCEM.UserCenterService.Main.Application.App.Contrac;
//using System.Threading.Tasks;
//using MSLibrary.Xrm;
//using DCEM.UserCenterService.Main.Factory;
//using MSLibrary;
//using DCEM.UserCenterService.Main.ViewModel.Request;
//using DCEM.Main.RemoteService;
//using DCEM.Main.TCenter;

//namespace DCEM.Web.Controllers
//{
//    [Route("api/cashcoupon")]
//    public class CashCouponController : ApiController
//    {
//        /// <summary>
//        /// ITCenterService 工厂
//        /// </summary>
//        private static IFactory<ITCenterFactory> _tcenterFactory;

//        /// <summary>
//        /// 提供静态属性用于替换IAppCashCoupon工厂
//        /// </summary>
//        public static IFactory<ITCenterFactory> TCenterFactory
//        {
//            set
//            {
//                _tcenterFactory = value;
//            }
//        }

//        /// <summary>
//        /// 我的现金抵扣券查询
//        /// </summary>
//        [HttpPost]
//        [Route("CashCoupon")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<QueryCashCouponResponse> QueryCashCoupon([FromBody]QueryCashCouponRequest orderRequest)
//        {
//            var app = _CashCouponLogicFactory.Create();
//            var result = app.QueryCashCoupon(orderRequest);
//            return await result;
//        }

//        /// <summary>
//        /// 订单权益抵扣操作
//        /// </summary>
//        /// <param name="usedRequest"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("UsedCashCoupon")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<UsedCashCouponResponse> UsedCashCoupon([FromBody]UsedCashCouponRequest usedRequest)
//        {
//            var app = _CashCouponLogicFactory.Create();
//            var result = app.UsedCashCoupon(usedRequest);
//            return await result;
//        }
//        /// <summary>
//        /// 
//        /// </summary>
//        /// <param name="primaryActiveCode"></param>
//        /// <param name="userId"></param>
//        /// <param name="orderNo"></param>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("MemberRight")]
//        //[OtherSystemAuthenticationActionFilter]
//        public MemberRightsResponse QueryMemberRights(string primaryActiveCode,string userId,string orderNo = "")
//        {
//            var app = _CashCouponLogicFactory.Create();
//            //var baseUrl = "http://mtkprd.seres.cn/mktcloud/order/v1/queryOrderRight?primaryActiveCode=" + primaryActiveCode + "&userId=" + userId + "&orderNo=" + orderNo;
//            var baseUrl = System.Configuration.ConfigurationManager.AppSettings["MemberRightApiUrl"];
//            var pramaters = "?primaryActiveCode=" + primaryActiveCode + "&userId=" + userId + "&orderNo=" + orderNo;
//            var url = $"{baseUrl}{pramaters}";
//            var headDic = new Dictionary<string, string>();
//            var accesstoken = app.GetAuth();
//            headDic.Add("Authorization", "bearer " + accesstoken);
//            var result = Common.HttpClinetHelper.Get<MemberRightsResponse>(url, headDic);
//            return result;

//        }
//    }
//}
