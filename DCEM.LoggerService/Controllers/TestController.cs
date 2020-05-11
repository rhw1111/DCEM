using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MSLibrary.Logger;
using DCEM.LoggerService;

namespace DCEM.LoggerService.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {


       //[Authorize(Policy ="AA")]
       [AllowAnonymous]
        [HttpPost("do")]
        public async Task<string> Do()
        {

            HttpContext.Response.Cookies.Append("A", Guid.NewGuid().ToString()) ;
            //var user=this.HttpContext.User;
            return await Task.FromResult("A");
        }
    }
}