using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;

namespace DCEM.Web.Controllers
{
    [Route("api/test")]
    [EnableCors("any")]
    [ApiController]
    public class TestController : Controller
    {

        [Route("test1")]
        [HttpGet]
        public ActionResult<string> Test1()
        {
            var crmService= DIContainerContainer.Get<CrmService>();
            return "ok";
        }
    }
}


