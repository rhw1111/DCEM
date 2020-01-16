/*
    文件名：BlindOrderController.cs
    功能描述：预约号接口类  
    创建时间：2020年01月15日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.ViewModel.Request;

namespace DCEM.Web.Controllers.UCenter
{
    /// <summary>
    /// 预约号
    /// </summary>
    [Route("api/BlindOrder")]
    [EnableCors("any")]
    [ApiController]
    public class BlindOrderController : ApiController
    {
        public IAppBlindOrder app = null;
        public BlindOrderController()
        {
            if (app == null)
            {
                app = new BlindOrderFactory().Create().Result;
            }
        }

        /// <summary>
        /// 预约号
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryList([FromQuery]BlindOrderListRequest request)
        {
            return await app.QueryList(request);
        }
    }
}
