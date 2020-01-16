/*
    文件名：UserMsgController.cs
    功能描述：用户消息接口类  
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
    [Route("api/usermsg")]
    [EnableCors("any")]
    [ApiController]
    public class UserMsgController : ApiController
    {
        public IAppUserMsg app = null;
        public UserMsgController()
        {
            if (app == null)
            {
                app = new UserMsgFactory().Create().Result;
            }
        }

        [Route("AddAndEdit")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddAndEdit(UserMsgequest request)
        {
            return await app.AddAndEdit(request);
        }
    }
}
