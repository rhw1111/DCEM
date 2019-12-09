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
//    [Route("api/dealer")]
//    public class DealerController : ApiController
//    {
//        private DealerLogicFactory _categoryFactory = new DealerLogicFactory();

//        /// <summary>
//        /// 获取厅店数据
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("all")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<List<DealerEntity>> GetAllDealer(string ProvinceCode, string CityCode = null, string DistrictCode = null, string X = null, string Y = null, string DealerCode = null)
//        {

//            var app = _categoryFactory.Create();
//            return await app.GetDealersCondition(new QueryDealerRequest
//            {
//                ProvinceCode = ProvinceCode,
//                CityCode = CityCode,
//                DistrictCode = DistrictCode,
//                X = X,
//                Y = Y,
//                DealerCode = DealerCode
//            });
//        }
//        /// <summary>
//        /// 获取厅店数据
//        /// </summary>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("conditionquery")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<List<DealerEntity>> GetDealersCondition(QueryDealerRequest model)
//        {

//            var app = _categoryFactory.Create();
//            return await app.GetDealersCondition(model);
//        }

//        /// <summary>
//        /// 获取厅店数据
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("alldealer")]
//        //[OtherSystemAuthenticationActionFilter]
//        public Task<List<DealerEntity>> GetDealer()
//        {
//            var app = _categoryFactory.Create();
//            return app.GetDealersCondition();
//        }
//    }
//}
