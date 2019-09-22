using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.SystemToken;

namespace DCEM.AuthorizationService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public AuthController( ) {

        }

        //public async Task<string> GetCommonToken(HttpRequest request)
        //{
        //    return await Task.FromResult("OK");
        //}
        public async Task<GetCommonTokenResult> GetCommonToken(string authorizationName, string returnUrl)
        {
            return await Task.FromResult(new GetCommonTokenResult());
        }

        public async Task<string> GetCommonToken(string authorizationName, string userName, string password)
        {
            return await Task.FromResult("");
        }
    }
}