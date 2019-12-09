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
//    public class DefaultController : ApiController
//    {
//        OrderLogicFactory orderLogicFactory = new OrderLogicFactory();

//        public async Task<bool> CreateOrder(CreateOrderRequest request)
//        {
//            var result = await orderLogicFactory.Create().CreateOrder(request);
//            return result.IsSuccess;
//        }
//    }
//}
