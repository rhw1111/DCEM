﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;
using MSLibrary.Logger;
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

            //初始化上下文容器
            MainStartupHelper.InitContext();
            StartupHelper.InitContext();

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureServices((context, services) =>
            {
                //初始化配置容器
                MainStartupHelper.InitConfigurationContainer(context.HostingEnvironment.EnvironmentName, _baseUrl);
                StartupHelper.InitConfigurationContainer(context.HostingEnvironment.EnvironmentName, _baseUrl);

                //获取核心配置
                var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);

                //初始化DI容器
                MainStartupHelper.InitDI(services, coreConfiguration.DISetting);


                //初始化静态设置
                MainStartupHelper.InitStaticInfo();
                StartupHelper.InitStaticInfo();



            })
            .ConfigureLogging((builder) =>
            {
                //初始化日志配置
                MainStartupHelper.InitLogger(builder);
            })
            .UseConfiguration(ConfigurationContainer.GetConfiguration(ConfigurationNames.Host))
            .UseStartup<Startup>();
    }
}
