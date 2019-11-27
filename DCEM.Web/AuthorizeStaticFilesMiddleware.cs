using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.Design;
using System.Threading.Tasks;

namespace DCEM.Web
{
    public class AuthorizeStaticFilesMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthorizeStaticFilesMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IAuthorizationService authorService)
        {
            await _next(context);
            //if (!context.User.Identity.IsAuthenticated)
            //{
            //    await context.ChallengeAsync();
            //    return;
            //}

            //var result = await authorService.AuthorizeAsync(context.User, Startup.POLICY_NAME);
            //if (!result.Succeeded)
            //{
            //    await context.ForbidAsync();
            //}
            //else
            //{
            //    await _next(context);
            //}
        }
    }
}