using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace DCEM.Web
{
    public class Program
    {
        private static bool _initConfigureServices=false;
        public static void Main(string[] args)
        {
            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            var baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = baseUrl ?? Environment.CurrentDirectory;

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            
            .ConfigureServices((services)=>
            {
                
            })
            
           .ConfigureAppConfiguration((context,builder)=>
           {
              
                //context.HostingEnvironment.EnvironmentName
           })
            .ConfigureLogging((builder)=>
            {
                //builder.AddEventSourceLogger().AddFilter()
            })
         
            //.UseConfiguration()
            .UseStartup<Startup>();
    }
}
