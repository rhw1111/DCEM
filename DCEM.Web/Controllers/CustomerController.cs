using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary.Xrm.MessageHandle;
using MSLibrary.Xrm.Token;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace DCEM.Web.Controllers
{
    [Route("Api/Customer")]
    [EnableCors("any")]
    [ApiController]
    public class CustomerController : Controller
    {
        [HttpGet]
        [Route("GetMyCustomerList")]
        public ActionResult<string> GetMyCustomerList()
        {
            return "11";
        }





    }
}