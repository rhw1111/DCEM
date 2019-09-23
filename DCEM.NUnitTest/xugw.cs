using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using DCEM.Main;
using Microsoft.Extensions.DependencyInjection;
using MSLibrary.Configuration;
using Microsoft.Extensions.Logging;
using MSLibrary.DI;

namespace DCEM.NUnitTest
{ 
    public class xugw
    {
        static xugw()
        {
            try
            {

                var currentDir = Directory.GetCurrentDirectory();

                //初始化配置容器
                StartupHelper.InitConfigurationContainer("NUT", currentDir);

                //初始化上下文信息
                StartupHelper.InitContext();

                ServiceCollection serviceCollection = new ServiceCollection();
                serviceCollection.AddLogging();

                var configuration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);

                //初始化DI容器
                StartupHelper.InitDI(serviceCollection, configuration.DISetting);

                //初始化静态设置信息
                StartupHelper.InitStaticInfo();


                //ILoggerFactory loggerFactory = DIContainerContainer.Get<ILoggerFactory>();

                ////初始化日志
                //StartupHelper.InitLogger();





            }
            catch (Exception ex)
            {

                var b = ex;

            }

        }


        [Test]
        public void Test1()
        {


            Assert.Pass();
        }



    }
}
