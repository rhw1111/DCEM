using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
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
            return "ok";
        }
    }
}


