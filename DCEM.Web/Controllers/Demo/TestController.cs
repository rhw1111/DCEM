using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using System;
using Microsoft.AspNetCore.Http;

namespace DCEM.Web.Controllers
{
    [Route("api/test")]
    [EnableCors("any")]
    [ApiController]
    public class TestController : ApiController
    {

        [Route("action")]
        [HttpGet]
        public ActionResult<string> Test1()
        {
            return this.UserId.ToString();
        }
    }
}


