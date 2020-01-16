using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.ConfigurationService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IServiceInfoController : ControllerBase
    {
        [HttpGet("Do")]
        public async Task<string> Do()
        {
            return await Task.FromResult("AAA");
        }
    }
}