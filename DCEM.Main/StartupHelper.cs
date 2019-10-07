using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Context;
using MSLibrary.Context.HttpClaimGeneratorServices;
using MSLibrary.Xrm;
using MSLibrary.Logger;
using MSLibrary.Logger.LoggingBuilderProviderHandlers;
using DCEM.Main;
using DCEM.Main.Context;
using DCEM.Main.Context.HttpClaimGeneratorServices;
using DCEM.Main.Context.ClaimContextGeneratorServices;
using System.Net.Http;

namespace DCEM.Main
{
    public static class StartupHelper
    {
        /// <summary>
        /// 初始化配置容器
        /// 首先尝试从后缀名-{环境名}的文件加载配置
        /// 如果该文件不存在，则加载去除后缀名后的文件
        /// <paramref name="environmentName">当前环境名称</paramref>
        /// <paramref name="fileBaseUrl">配置文件基地址</paramref>
        /// </summary>
        public static void InitConfigurationContainer(string environmentName,string fileBaseUrl)
        {
            var appConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}app-{environmentName}.json";

            if (!File.Exists(appConfigurationUri))
            {
                appConfigurationUri= $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}app.json";
            }

            var hostConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}host-{environmentName}.json";

            if (!File.Exists(hostConfigurationUri))
            {
                hostConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}host.json";
            }

            var loggerConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}logger-{environmentName}.json";

            if (!File.Exists(loggerConfigurationUri))
            {
                loggerConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}logger.json";
            }



            ConfigurationContainer.Container = new ConfigurationContainerDefault();
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(appConfigurationUri, optional: true, reloadOnChange: true)
                .Build();

            //主机配置信息需要单独配置文件，目前framework版本不支持合并到主配置文件
            var hostConfiguration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(hostConfigurationUri, optional: true, reloadOnChange: true)
                .Build();

            var loggerConfiguration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(loggerConfigurationUri, optional: true, reloadOnChange: true)
                .Build();

            //向配置容器增加主机配置信息
            ConfigurationContainer.Add(ConfigurationNames.Host, hostConfiguration);
            
            //向配置容器增加主配置
            ConfigurationContainer.Add(ConfigurationNames.Application, configuration);

            //向配置容器增加日志配置
            ConfigurationContainer.Add(ConfigurationNames.Logger, configuration);



            //向配置容器增加批处理配置
            //ConfigurationContainer.Add(ConfigurationNames.Schedule, configuration);

        }

        /// <summary>
        /// 初始化上下文
        /// </summary>
        public static void InitContext()
        {
            ContextContainer.Current.Register<IDIContainer>(ContextExtensionTypes.DI, new ContextDIContainer());
            ContextContainer.Current.Register<int>(ContextTypes.CurrentUserLcid, new ContextCurrentUserLcid());
            ContextContainer.Current.Register<int>(ContextTypes.CurrentUserTimezoneOffset, new ContextCurrentUserTimezoneOffset());
            ContextContainer.Current.Register<ConcurrentDictionary<string, object>>(ContextTypes.Dictionary, new ContextDictionary());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.CurrentUserID, new ContextCurrentUserID());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.ParentCommonLogID, new ContextParentCommonLogID());
            ContextContainer.Current.Register<string>(ContextExtensionTypes.ParentCommonLogActionName, new ContextParentCommonLogActionName());
            ContextContainer.Current.Register<string>(ContextExtensionTypes.ParentCommonLogContextInfo, new ContextParentCommonLogContextInfo());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.PreCommonLogLevelID, new ContextCommonLogPreLevelID());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.CurrentCommonLogLevelID, new ContextCommonLogCurrentLevelID());

        }



        /// <summary>
        /// 初始化DI容器
        /// 自动装载被标识的对象
        /// </summary>
        /// <param name="serviceCollection"></param>
        /// <param name="dISetting"></param>
        public static void InitDI(IServiceCollection serviceCollection, DISetting dISetting)
        {
            serviceCollection.AddHttpClient();
            
            DIContainerContainer.DIContainer = new DIContainerDefault(serviceCollection, serviceCollection.BuildServiceProvider());
            DIContainerInit.Init = new DIContainerInitDefault();
            DIContainerInit.Execute(dISetting.SearchAssemblyNames);

            //装载需要手动处理的DI数据

            //Microsoft.AspNetCore.DataProtection.Repositories.IXmlRepository
            //DIContainerContainer.Inject<IXmlRepository, DataProtectionXmlRepository>(@"Configurations\Dataprotection\key.xml");

        }

        /// <summary>
        /// 初始化静态化信息
        /// 所有通过静态属性来配置的信息，都在该方法中初始化
        /// </summary>
        public static void InitStaticInfo()
        {
            //为HttpClinetHelper的HttpClientFactory赋值
            HttpClinetHelper.HttpClientFactory = DIContainerContainer.Get<IHttpClientFactory>();

            //CrmServiceFactoryRepositoryHelper.Repository = DIContainerContainer.Get<ICrmServiceFactoryRepository>();
            //为日志构建器处理的提供方处理工厂赋值
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.ApplicationInsights]=DIContainerContainer.Get<LoggingBuilderProviderHandlerForApplicationInsightsFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.Console]= DIContainerContainer.Get<LoggingBuilderProviderHandlerForConsoleFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.CommonLog]= DIContainerContainer.Get<LoggingBuilderProviderHandlerForCommonLogFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.CommonLogLocal]=DIContainerContainer.Get<LoggingBuilderProviderHandlerForCommonLogFactory>();

            //为HttpClaimGeneratorIMP.HttpClaimGeneratorServiceFactories增加键值对
            HttpClaimGeneratorIMP.HttpClaimGeneratorServiceFactories[HttpClaimGeneratorServiceTypes.Inner]= DIContainerContainer.Get<HttpClaimGeneratorServiceForInnerFactory>();

            //为ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories增加键值对
            ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories[ClaimContextGeneratorServiceTypes.Inner]= DIContainerContainer.Get<ClaimContextGeneratorServiceForInnerFactory>();
            ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories[ClaimContextGeneratorServiceTypes.Default] = DIContainerContainer.Get<ClaimContextGeneratorServiceForDefaultFactory>();


        }

        /// <summary>
        /// 初始化日志
        /// </summary>
        /// <param name="builder"></param>
        public static void InitLogger(ILoggingBuilder builder)
        {
           var mainHandler=  DIContainerContainer.Get<ILoggingBuilderHandler>();
            var loggerConfiguration = ConfigurationContainer.Get<LoggerConfiguration>(ConfigurationNames.Logger);

            mainHandler.Execute(builder, loggerConfiguration).Wait();
        }

    }
}
