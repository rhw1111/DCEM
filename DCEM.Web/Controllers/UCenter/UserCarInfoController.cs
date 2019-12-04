/*
    文件名：UserCarInfoController.cs
    功能描述：用户车辆接口类  
    创建时间：2019年12月03日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.Factory;
using MSLibrary;
using DCEM.UserCenterService.Main.ViewModel.Request;

namespace DCEM.Web.Controllers.UCenter
{
    [EnableCors("any")]
    [Route("api/uc-usercarinfo")]
    [ApiController]
    public class UserCarInfoController : ApiController
    {
        public IAppUserCarInfo app = null;
        public UserCarInfoController()
        {
            if (app == null)
            {
                app = new UserCarInfoFactory().Create().Result;
            }
        }

        /// <summary>
        ///  用户车辆列表查询
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("querylist")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryList([FromQuery]UserCarInfoListRequest request)
        {
            var list = await app.QueryList(request);
            return list;
        }
    }
}
