/*
    文件名： CampaignonlineregController.cs
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
using DCEM.UserCenterService.Main.ViewModel.Response;
using System;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/campaignonlinereg")]
    [ApiController]
    public class CampaignonlineregController : ApiController
    {
        public IAppCampaignonlinereg app = null;
        public CampaignonlineregController()
        {
            if (app == null)
            {
                app = new CampaignonlineregFactory().Create().Result;
            }
        }

        /// <summary>
        ///  列表查询
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("getlist")]
        public async Task<NewtonsoftJsonActionResult<SalesOrderListResponse>> QueryList(CampaignonlineregListRequest request)
        {
            var list = await app.getlist(request);
            return list;
        }


        [HttpPost]
        [Route("getdetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> QueryDetail(CampaignonlineregDetailRequest req)
        {
            var list = await app.getdetail(req.id);
            return list;
        }
    }
}
