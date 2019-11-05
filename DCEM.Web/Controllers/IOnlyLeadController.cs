/*
    文件名：IOnlyLeadController.cs
    功能描述：唯一线索接口类  
    创建时间：2019年11月05日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;

namespace DCEM.Web.Controllers
{

    [EnableCors("any")]
    [Route("api/only-lead")]
    [ApiController]
    public class IOnlyLeadController : ControllerBase
    {
        public IAppOnlyLead app = null;
        public IOnlyLeadController()
        {
            if (app == null)
            {
                app = new OnlyLeadFactory().Create().Result;
            }
        }
    }
}
