using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Logger;

namespace DCEM.LoggerService.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {

        [HttpPost("do")]
        public async Task<string> Do()
        {
            CommonLogLocalContent content = new CommonLogLocalContent()
            {
                 ActionName="A",
                  Message="CCC",
                   RequestBody="111",
                    ResponseBody="222",
                     RequestUri="3333"
            };
            //LoggerHelper.LogError("", content);
            throw new Exception("aaa");
            return await Task.FromResult("A");
        }
    }
}