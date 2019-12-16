using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.Factory;
using MSLibrary;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.Main.TCenter;
using DCEM.Main.Entities;
using DCEM.Main.RemoteService;
using System.Collections.Generic;

namespace DCEM.Web.Controllers
{
    [Route("api/product")]
    [EnableCors("any")]
    public class ProductController : ApiController
    {
        /// <summary>
        /// IAppProduct 工厂，默认使用 ProductLogicFactory
        /// </summary>
        public static ITCenterFactory _tCenterFactory;

        /// <summary>
        /// 提供静态属性用于替换IAppProduct工厂
        /// </summary>
        public ProductController(ITCenterFactory tCenterFactory)
        {
            _tCenterFactory = tCenterFactory;
        }
        /// <summary>
        /// 商品全量查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("All")]
        //[OtherSystemAuthenticationActionFilter]
        public async Task<QueryProductAllResponse> QueryProductAll(QueryProductAllRequest request)
        {
            var productLogic = await _tCenterFactory.Create();
            return  await productLogic.QueryProductAll(request);
        }
        ///// <summary>
        ///// FetchXML商品全量查询
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("All2")]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<QueryProductAllResponse> QueryProductAll2(QueryProductAllRequest request)
        //{
        //    var productLogic = _tCenterFactory.Create();
        //    return await productLogic.QueryProductAllUpDate2(request);
        //}

        ///// <summary>
        ///// FetchXML按类目商品查询
        ///// </summary>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("QueryProductByCategory")]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<QueryProductAllResponse> QueryProductByCategory(string code)
        //{
        //    var productLogic = _tCenterFactory.Create();
        //    return await productLogic.QueryProductByCategory(code);
        //}
        ///// <summary>
        ///// 商品全量查询--效率优化方法
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("AllUpdate")]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<List<QueryProductAllUpdateResponse>> QueryProductAllUpdate(QueryProductAllRequest request)
        //{
        //    var productLogic = _tCenterFactory.Create();
        //    return await productLogic.QueryProductAllUpDate(request);
        //}

        ///// <summary>
        ///// 通过商品编号查询商品
        ///// </summary>
        ///// <param name="request">商品编号</param>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("Detail")]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<QueryProductByCodeResponse> QueryProductByCode(string productCode)
        //{
        //    var productLogic = _tCenterFactory.Create();
        //    return await productLogic.QueryProductByCode(productCode);
        //}
    }
}
