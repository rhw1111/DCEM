using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Context;
using MSLibrary.Xrm;
using MSLibrary.Logger;
using MSLibrary.Logger.LoggingBuilderProviderHandlers;
using DCEM.Main;
using DCEM.Main.Context;


namespace DCEM.ConfigurationService.Main
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    public static class StartupHelper
    {

        /// <summary>
        /// 初始化配置容器
        /// 首先尝试从后缀名-{环境名}的文件加载配置
        /// 如果该文件不存在，则加载去除后缀名后的文件
        /// <paramref name="environmentName">当前环境名称</paramref>
        /// <paramref name="fileBaseUrl">配置文件基地址</paramref>
        /// </summary>
        public static void InitConfigurationContainer(string environmentName, string fileBaseUrl)
        {
        }

        /// <summary>
        /// 初始化上下文
        /// </summary>
        public static void InitContext()
        {

        }


        /// <summary>
        /// 初始化静态化信息
        /// 所有通过静态属性来配置的信息，都在该方法中初始化
        /// </summary>
        public static void InitStaticInfo()
        {

        }



        /// <summary>
        /// 初始化DI容器
        /// 自动装载被标识的对象
        /// </summary>
        /// <param name="serviceCollection"></param>
        /// <param name="dISetting"></param>
        public static void InitDI(IServiceCollection services, ContainerBuilder containerBuilder, DISetting dISetting)
        {
            //services.AddHttpClient();
            //var serviceProvider = services.BuildServiceProvider();
            //containerBuilder.RegisterInstance(serviceProvider.GetService<IHttpClientFactory>()).As<IHttpClientFactory>();

            DIContainerForAutofac diContainer = new DIContainerForAutofac(containerBuilder);
            DIContainerContainer.DIContainer = diContainer;
           

            DIContainerInit.Init = new DIContainerInitDefault();
            DIContainerInit.Execute(dISetting.SearchAssemblyNames);

            containerBuilder.RegisterBuildCallback((container) =>
            {
                diContainer.CompleteInit(container.BeginLifetimeScope());

                //初始化静态设置
                MainStartupHelper.InitStaticInfo();
                InitStaticInfo();

                //配置日志工厂
                var loggerFactory = LoggerFactory.Create((builder) =>
                {
                    MainStartupHelper.InitLogger(builder);
                });
                DIContainerContainer.Inject<ILoggerFactory>(loggerFactory);
            });


            //装载需要手动处理的DI数据

            //Microsoft.AspNetCore.DataProtection.Repositories.IXmlRepository
            //DIContainerContainer.Inject<IXmlRepository, DataProtectionXmlRepository>(@"Configurations\Dataprotection\key.xml");
        }

    }
}
