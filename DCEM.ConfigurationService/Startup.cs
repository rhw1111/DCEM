using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using MSLibrary;
using MSLibrary.Logger;
using MSLibrary.Context;
using MSLibrary.Context.Middleware;
using MSLibrary.Context.Filter;
using MSLibrary.Logger.Middleware;
using MSLibrary.AspNet.Middleware;
using DCEM.Main.Logger;
using DCEM.ConfigurationService.Main;
using DCEM.Main;
using MSLibrary.DI;
using MSLibrary.Configuration;
using System.Net.Http;

namespace DCEM.ConfigurationService
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    using StartupHelper = DCEM.ConfigurationService.Main.StartupHelper;
    public class Startup
    {
        private IServiceCollection _services;

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers((opts) =>
            {


                opts.Filters.AddService<UserAuthorizeActionGolbalFilter>();

                //UserAuthorizeFilter.ErrorCatalogName = LoggerCategoryNames.HttpRequest;
                //opts.Filters.Add(DIContainerContainer.Get<UserAuthorizeFilter>(true, string.Empty, LoggerCategoryNames.HttpRequest, LoggerCategoryNames.HttpRequest, LoggerCategoryNames.HttpRequest));
                //opts.MaxIAsyncEnumerableBufferLimit
            });

            _services = services;
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var containerScope=app.ApplicationServices.GetAutofacRoot();
            StartupHelper.DIContainerForAutofac.CompleteInit(containerScope);

 

            //初始化静态设置
            MainStartupHelper.InitStaticInfo();
            StartupHelper.InitStaticInfo();




            //配置日志工厂
            var loggerFactory = LoggerFactory.Create((builder) =>
            {
                MainStartupHelper.InitLogger(builder);
            });
            DIContainerContainer.Inject<ILoggerFactory>(loggerFactory);



            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

            });


            app.UseCommonLogInfoHandler(string.Empty, LoggerCategoryExtensionNames.DCEM_ConfigurationService);

            //app.UseDIWrapper(ContextExtensionTypes.DI, LoggerCategoryNames.DIWrapper);

            app.UseExceptionWrapper(LoggerCategoryNames.HttpRequest);
        }


        public void ConfigureContainer(ContainerBuilder containerBuilder)
        {
            //containerBuilder.Populate(_services);

            //获取核心配置
            var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);


            //初始化DI容器
            StartupHelper.InitDI(_services,containerBuilder, coreConfiguration.DISetting);


        }

    }



}
