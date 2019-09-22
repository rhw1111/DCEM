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
        string oauth = "https://subcrmadfs.sokon.com/adfs/oauth2/";//adfs oauth2 认证地址
        string client_id = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";//客户端明文id
        string client_secret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";//客户端密文
        string redirect_uri = "http://localhost:3183/home/token";//跳转地址
        string state = "bill";//状态，用于传输到adfs端进行认证后，会原样返回
        string resource = "https://subcrmuat.sokon.com/api/data/v8.2";//模拟登陆的资源地址
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