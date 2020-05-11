using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace DCEM.LoggerService
{
    public class DynamicsAuthorizeFilter: AuthorizeFilter
    {
        public override async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            var realAuthorizeFilter = new AuthorizeFilter("P2");
            await realAuthorizeFilter.OnAuthorizationAsync(context);
        }
    }


    public class DynamicsAuthorizeAttribute : TypeFilterAttribute
    {
        public DynamicsAuthorizeAttribute() : base(typeof(DynamicsAuthorizeFilter))
        {
            Arguments = new object[] { };
        }
    }

    public class DynamicsAuthorizationPolicyProvider : IAuthorizationPolicyProvider
    {

        private readonly IHttpContextAccessor _httpContextAccessor;

        public DefaultAuthorizationPolicyProvider _defaultProvider { get; }

        public DynamicsAuthorizationPolicyProvider(IHttpContextAccessor httpContextAccessor, IOptions<AuthorizationOptions> options)
        {
            _httpContextAccessor = httpContextAccessor;
            _defaultProvider = new DefaultAuthorizationPolicyProvider(options);
        }
        public async Task<AuthorizationPolicy> GetDefaultPolicyAsync()
        {
            return await _defaultProvider.GetDefaultPolicyAsync();
        }

        public async Task<AuthorizationPolicy> GetFallbackPolicyAsync()
        {
            return await _defaultProvider.GetFallbackPolicyAsync();
        }

        public async Task<AuthorizationPolicy> GetPolicyAsync(string policyName)
        {

            var httpContext=_httpContextAccessor.HttpContext;
            var policy = new AuthorizationPolicyBuilder("Test2");
            return await Task.FromResult(policy.Build());
        }
    }

}
