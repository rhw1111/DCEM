using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MSLibrary.Context.HttpClaimGeneratorServices;
using MSLibrary.Serializer;
using MSLibrary.DI;

namespace DCEM.Main.Context.HttpClaimGeneratorServices
{
    /// <summary>
    /// 内部服务使用额Http声明生成服务
    /// http的header中获取InnerAuth头信息
    /// 信息格式为InnerContextInfo序列化的字符串
    /// </summary>
    [Injection(InterfaceType = typeof(HttpClaimGeneratorServiceForInner), Scope = InjectionScope.Singleton)]
    public class HttpClaimGeneratorServiceForInner : IHttpClaimGeneratorService
    {
        public async Task<ClaimsIdentity> Do(HttpContext httpContext)
        {
            ClaimsIdentity identity = null;
            if (httpContext.Request.Headers.ContainsKey(HttpHeaderNames.InnerAuth))
            {
                var authHeader = httpContext.Request.Headers[HttpHeaderNames.InnerAuth];

                var auth=JsonSerializerHelper.Deserialize<InnerContextInfo>(authHeader[0]);

                identity = new ClaimsIdentity(ClaimsTypes.User);
                identity.AddClaim(new Claim(ClaimsTypes.UserID, auth.UserID.ToString()));
                identity.AddClaim(new Claim(ClaimsTypes.Lcid, auth.Lcid.ToString()));
                identity.AddClaim(new Claim(ClaimsTypes.TimezoneOffset, auth.TimezoneOffset.ToString()));
            };

            return await Task.FromResult(identity);
        }
    }
}
