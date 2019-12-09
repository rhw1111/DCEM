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
//    /// 订单管理控制器
//    /// </summary>
//    [Route("api/ordermanager")]
//    public class OrderManagerController : ApiController
//    {
//        /// <summary>
//        /// 订单管理工厂实例对象
//        /// </summary>
//        private static IFactory<IOrderManager> orderLogicFactory = new OrderManagerFactory();

//        /// <summary>
//        /// 创建订单
//        /// </summary>
//        /// <param name="param">请求参数</param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("CreateOrder")]
//        //[InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<CreateOrderManagerResponse> CreateOrder([FromBody]CreateOrderManagerRequest param)
//        {
//            var logic = orderLogicFactory.Create();
//            return await logic.CreateOrder(param);
//        }
//    }
//}