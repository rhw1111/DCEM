using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DCEM.Main;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;

namespace DCEM.HT
{
    using MainStartupHelper = DCEM.Main.StartupHelper;

    public class Program
    {
        private static string _baseUrl;
        public static void Main(string[] args)
        {
            //����Ӧ�ó�������Ŀ¼
            _baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = _baseUrl ?? Environment.CurrentDirectory;

            //��ȡ���л�������
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
            if (environmentName == null)
            {
                environmentName = string.Empty;
            }
            //��ʼ����������
            MainStartupHelper.InitConfigurationContainer(environmentName, _baseUrl);
            //��ʼ������������
            MainStartupHelper.InitContext();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                //.ConfigureWebHostDefaults(webBuilder =>
                //{
                //    webBuilder.UseStartup<Startup>();
                //})
            .ConfigureServices((context, services)=>
            {
                //��ȡ��������
                var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);

                //��ʼ��DI����
                MainStartupHelper.InitDI(services, coreConfiguration.DISetting);

                //��ʼ����̬����
                MainStartupHelper.InitStaticInfo();
            })
            .ConfigureLogging((builder) =>
            {
                //��ʼ����־����
                MainStartupHelper.InitLogger(builder);
            })
              .ConfigureAppConfiguration((context, builder) =>
              {
                  //context.HostingEnvironment.EnvironmentName
              })
              .UseConfiguration(ConfigurationContainer.GetConfiguration(ConfigurationNames.Host))

            .UseStartup<Startup>();
    }
}
