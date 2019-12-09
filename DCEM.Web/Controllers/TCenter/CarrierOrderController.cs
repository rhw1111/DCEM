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
//    [Route("api/esb/plm/inventory/carrierorder")]
//    public class CarrierOrderController : ApiController
//    {
//        /// <summary>
//        /// 发送承运单给TMS
//        /// </summary>
//        /// <param name="data"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [OtherSystemAuthenticationActionFilter]
//        [ActionName("Add")]
//        [Route("Add")]
//        public async Task<string> Add(dynamic data)
//        {
//            data.a = "b";
//            return await Task.FromResult("OK");
//        }

//        /// <summary>
//        /// 承运单状态更新
//        /// </summary>
//        /// <param name="data"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [OtherSystemAuthenticationActionFilter]
//        [ActionName("StateUpdate")]
//        [Route("StateUpdate")]
//        public async Task<string> StateUpdate(dynamic data)
//        {
//            return await Task.FromResult("OK");
//        }

//        /// <summary>
//        /// 完成承运单
//        /// </summary>
//        /// <param name="data"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [OtherSystemAuthenticationActionFilter]
//        [ActionName("Finish")]
//        [Route("Finish")]
//        public async Task<string> Finish(dynamic data)
//        {
//            return await Task.FromResult("OK");
//        }
//    }
//}