using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.LoggerService.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {

        [HttpPost("do")]
        public async Task<string> Do()
        {
            throw new Exception("aaa");
            return await Task.FromResult("A");
        }
    }
}