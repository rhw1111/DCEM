/*
    文件名：LeadController.cs
    功能描述：线索接口类  
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
    [Route("api/lead")]
    [EnableCors("any")]
    [ApiController]
    public class LeadController : ApiController
    {
        public IAppLead app = null;
        public LeadController()
        {
            if (app == null)
            {
                app = new LeadFactory().Create().Result;
            }
        }


        [Route("create")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> create(LeadRequest request)
        {
            return await app.create(request);
        }
    }
}
