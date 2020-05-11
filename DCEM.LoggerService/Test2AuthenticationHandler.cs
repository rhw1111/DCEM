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
    public class Test2AuthenticationHandler : AuthenticationHandler<Test2DeviceSessionOptions>
    {

        public Test2AuthenticationHandler(IOptionsMonitor<Test2DeviceSessionOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock) : base(options, logger, encoder, clock)
        {

        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
           
           var d= Context.User.FindFirstValue("A");
            ClaimsIdentity identity = new ClaimsIdentity("User1");
            identity.AddClaim(new Claim("A", "N"));

            ClaimsPrincipal principal = new ClaimsPrincipal(identity);

            AuthenticateResult result;

            result = AuthenticateResult.Success(new AuthenticationTicket(principal, Scheme.Name));
            

            AuthenticationProperties properties = new AuthenticationProperties(
                );

            properties.Items.Add("T2", "T2");
            //result = AuthenticateResult.Fail("BBBB", properties);

            return await Task.FromResult(result);



        }

        protected override async Task HandleChallengeAsync(AuthenticationProperties properties)
        {
           
            Context.Response.ContentType = "application/json";

            await Context.Response.WriteJson(401, "2未认证");
        }

        protected override async Task HandleForbiddenAsync(AuthenticationProperties properties)
        {


            await Context.Response.WriteJson(403, "2拒绝");
        }


    }


    public class Test2DeviceSessionOptions : AuthenticationSchemeOptions
    {

    }
}