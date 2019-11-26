using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.Web.Controllers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.IO;
using System.Text;
using Microsoft.AspNetCore;
using MSLibrary.Configuration;
using MSLibrary.Logger;
using MSLibrary.AspNet.Middleware;
using DCEM.Main;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.StaticFiles;

namespace DCEM.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("any",
                builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

            services.AddMvc(option => option.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();
            app.UseCors("any");
            app.UseMvc();
          
            app.UseFileServer(new FileServerOptions()
            {
                EnableDirectoryBrowsing = true                                    
            });

            var provider = new FileExtensionContentTypeProvider();
            app.UseStaticFiles(new StaticFileOptions()
            {
                ContentTypeProvider = provider,
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", "public,max-age=600");
                }
            });

            app.UseFileServer(new FileServerOptions()
            {
                FileProvider = new PhysicalFileProvider
                (
                    Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "FilesDir")),   //实际目录地址
                RequestPath = new Microsoft.AspNetCore.Http.PathString("/FilesDir"),  //用户访问地址
                EnableDirectoryBrowsing = true                                     //开启目录浏览
            });

            app.UseWhen(
               c => c.Request.Path.Value.Contains("FilesDir"),
               _ => _.UseMiddleware<AuthorizeStaticFilesMiddleware>());

            app.UseExceptionWrapper(LoggerCategoryNames.HttpRequest);
        }
    }
}
