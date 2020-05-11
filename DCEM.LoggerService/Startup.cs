using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MSLibrary;
using MSLibrary.Logger;
using MSLibrary.Context;
using MSLibrary.Context.Middleware;
using MSLibrary.Context.Filter;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Logger.Middleware;
using MSLibrary.AspNet.Filter;
using MSLibrary.AspNet.Middleware;
using DCEM.Main.Logger;
using DCEM.LoggerService.Main;
using DCEM.LoggerService;
using DCEM.Main;
using MSLibrary.DI;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;
using Microsoft.AspNetCore.Authorization;

namespace DCEM.LoggerService
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IAuthorizationPolicyProvider, DynamicsAuthorizationPolicyProvider>();
            services.AddControllers((opts)=>
                {
                    //opts.Filters.AddService<UserAuthorizeActionGolbalFilter>();
                    //opts.Filters.Add(DIContainerContainer.Get<ExceptionFilter>(LoggerCategoryExtensionNames.DCEM_LoggerService));

                    //opts.MaxIAsyncEnumerableBufferLimit
                });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddAuthentication()
                .AddScheme<Test1DeviceSessionOptions, Test1AuthenticationHandler>("Test1", (options) =>
                 {
                     //options.ForwardChallenge = "Test2";
                 })
                .AddScheme<Test2DeviceSessionOptions, Test2AuthenticationHandler>("Test2", (options) =>
                {
                    //options.ForwardChallenge = "Test1";
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("P1", policy =>
                {
              
                    policy.RequireAuthenticatedUser();
                    policy.RequireClaim("xxx");
                    policy.AddAuthenticationSchemes("Test1");
                    
                });
                options.AddPolicy("P2", policy =>
                {
                    policy.RequireAuthenticatedUser();
                    //policy.RequireClaim(LoeClaimTypes.DeviceSessionId);
                    policy.AddAuthenticationSchemes("Test2");
                });

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            app.UseRouting();


            app.UseAuthentication();
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
              
            });
                        

            /*app.UseDIWrapper(ContextExtensionTypes.DI,LoggerCategoryNames.DIWrapper);

            app.UseExceptionWrapper(LoggerCategoryNames.HttpRequest,true);

            app.UseSystemAuthentication(string.Empty, HttpClaimGeneratorServiceTypes.Inner,"");
            */
          
        }
    }
}
