using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DCEM.Main.TCenter;
using System.Collections.Generic;
using DCEM.Main.Entities;

namespace DCEM.Web.Controllers
{
    [Route("api/category")]
    public class CategoryController : ApiController
    {
        /// <summary>
        /// IAppProduct 工厂，默认使用 TCenterFactory
        /// </summary>
        public static ITCenterFactory _tCenterFactory;
        /// <summary>
        /// 提供静态属性用于替换ITCenterFactory工厂
        /// </summary>
        public CategoryController(ITCenterFactory tCenterFactory)
        {
            _tCenterFactory = tCenterFactory;
        }

        /// <summary>
        /// 管理类目
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("AllManagerCategory")]
        [OtherSystemAuthenticationActionFilter]
        public async Task<List<CategoryEntity>> GetAllManagerCategory()
        {
            var app =await _tCenterFactory.Create();
            return await app.GetAllManagerCategory();
        }

        /// <summary>
        /// 管理类目
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("AllManagerCategory2")]
        //[OtherSystemAuthenticationActionFilter]
        public async Task<List<CategoryEntity>> GetAllManagerCategory2()
        {
            var app = await _tCenterFactory.Create();
            return await app.GetAllManagerCategory2();
        }
        /// <summary>
        /// 前端类目
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("AllFrontCategory")]
        [OtherSystemAuthenticationActionFilter]
        public async Task<List<CategoryEntity>> GetAllFrontCategory()
        {

            var app = await _tCenterFactory.Create();
            return await app.GetAllFrontCategory();
        }

        /// <summary>
        /// 前端类目
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("AllFrontCategory2")]
        //[OtherSystemAuthenticationActionFilter]
        public async Task<List<CategoryEntity>> GetAllFrontCategory2()
        {
            var app = await _tCenterFactory.Create();
            return await app.GetAllFrontCategory2();
        }
    }
}
