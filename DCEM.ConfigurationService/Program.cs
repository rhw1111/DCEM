using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Autofac.Extensions.DependencyInjection;
using MSLibrary.Configuration;
using MSLibrary.Logger;
using MSLibrary.DI;
using DCEM.Main;
using DCEM.ConfigurationService.Main;

namespace DCEM.ConfigurationService
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    using StartupHelper = DCEM.ConfigurationService.Main.StartupHelper;

    public class Program
    {
        private static string _baseUrl;
        public static void Main(string[] args)
        {
            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            _baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = _baseUrl ?? Environment.CurrentDirectory;

            //获取运行环境名称
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
            if (environmentName == null)
            {
                environmentName = string.Empty;
            }
            //初始化配置容器
            MainStartupHelper.InitConfigurationContainer(environmentName, _baseUrl);

            //初始化上下文容器
            MainStartupHelper.InitContext();
            StartupHelper.InitContext();

            CreateWebHostBuilder(args).Run();
        }

        public static IHost CreateWebHostBuilder(string[] args) =>

            Host.CreateDefaultBuilder(args)
        .UseServiceProviderFactory(new AutofacServiceProviderFactory())
        .ConfigureWebHostDefaults(webHostBuilder =>
        {
            webHostBuilder
                .ConfigureServices((context, services) =>
                {

                    //初始化配置容器                  
                    StartupHelper.InitConfigurationContainer(context.HostingEnvironment.EnvironmentName, _baseUrl);



                })
                .ConfigureLogging((builder) =>
                {

                })
                .ConfigureKestrel((options) =>
                {

                })
                .UseConfiguration(ConfigurationContainer.GetConfiguration(ConfigurationNames.Host))
                .UseStartup<Startup>();
        })
        .Build();
    }
}
