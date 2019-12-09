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
//    [Route("api/category")]
//    public class CategoryController : ApiController
//    {
//        private CategoryLogicFactory _categoryFactory = new CategoryLogicFactory();
//        private CategoryLogicCRMFactory _categoryCRMFactory = new CategoryLogicCRMFactory();

//        /// <summary>
//        /// 管理类目
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("AllManagerCategory")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<List<CategoryEntity>> GetAllManagerCategory()
//        {
           
//            var app = _categoryFactory.Create();
//            return await app.GetAllManagerCategory();
//        }

//        /// <summary>
//        /// 管理类目
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("AllManagerCategory2")]
//        [InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public List<CategoryEntity> GetAllManagerCategory2()
//        {
//            var app = _categoryCRMFactory.Create();
//            return app.GetAllManagerCategory2();
//        }
//        /// <summary>
//        /// 前端类目
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("AllFrontCategory")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<List<CategoryEntity>> GetAllFrontCategory()
//        {

//            var app = _categoryFactory.Create();
//            return await app.GetAllFrontCategory();
//        }

//        /// <summary>
//        /// 前端类目
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [Route("AllFrontCategory2")]
//        [InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public List<CategoryEntity> GetAllFrontCategory2()
//        {
//            var app = _categoryCRMFactory.Create();
//            return app.GetAllFrontCategory2();
//        }
//        /// <summary>
//        /// 接口测试
//        /// </summary>
//        /// <param name="data">输入参数</param>
//        /// <returns>返回参数</returns>
//        [HttpGet]
//        [Route("Test")]
//        [OtherSystemAuthenticationActionFilter]
//        public string TestOtherSystem2(dynamic data)
//        {
//            return "OK";
//        }
//    }
//}
