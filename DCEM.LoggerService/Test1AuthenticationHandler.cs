using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Primitives;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MSLibrary.AspNet;

namespace DCEM.LoggerService
{
    public class Test1AuthenticationHandler: AuthenticationHandler<Test1DeviceSessionOptions>
    {

        public Test1AuthenticationHandler(IOptionsMonitor<Test1DeviceSessionOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock) : base(options, logger, encoder, clock)
        {

        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            ClaimsIdentity identity = new ClaimsIdentity("User");
            identity.AddClaim(new Claim("A","A"));

            


            ClaimsPrincipal principal = new ClaimsPrincipal(identity);

            Context.User = principal;

            AuthenticateResult result;
         
            result = AuthenticateResult.Success(new AuthenticationTicket(principal, Scheme.Name));


            AuthenticationProperties properties = new AuthenticationProperties(
                new Dictionary<string, string>() { { "T2", "T2" } }
                );
            //result = AuthenticateResult.Fail("AAAA", properties);
            Context.Items["AuthSuccess"] = false;

            return await Task.FromResult(result);

        }

        protected override async Task HandleChallengeAsync(AuthenticationProperties properties)
        {
        
            Context.Response.ContentType = "application/json";
         
   
            await Context.Response.WriteJson(401, "未认证");
        }

        protected override async Task HandleForbiddenAsync(AuthenticationProperties properties)
        {


            await Context.Response.WriteJson(403, "拒绝");
        }


    }


    public class Test1DeviceSessionOptions: AuthenticationSchemeOptions
    {

    }
}
