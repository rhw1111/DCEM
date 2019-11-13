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
using DCEM.Main;
using MSLibrary.DI;

namespace DCEM.LoggerService
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers((opts)=>
                {
                    opts.Filters.AddService<UserAuthorizeActionGolbalFilter>();
                    opts.Filters.Add(DIContainerContainer.Get<ExceptionFilter>(LoggerCategoryNames.HttpRequest));

                    //opts.MaxIAsyncEnumerableBufferLimit
                });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
              
            });
            
 
       
            

            app.UseDIWrapper(ContextExtensionTypes.DI,LoggerCategoryNames.DIWrapper);

            app.UseExceptionWrapper(LoggerCategoryNames.HttpRequest);

            app.UseSystemAuthentication(string.Empty, HttpClaimGeneratorServiceTypes.Inner);

          
        }
    }
}
