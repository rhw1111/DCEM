﻿using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Context;
using DCEM.Main.Context;

namespace DCEM.Main
{
    public static class StartupHepler
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
            var appConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}configuration-{environmentName}.json";

            if (!File.Exists(appConfigurationUri))
            {
                appConfigurationUri= $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}configuration.json";
            }

            var hostConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}host-{environmentName}.json";

            if (!File.Exists(appConfigurationUri))
            {
                hostConfigurationUri = $"{fileBaseUrl}{Path.DirectorySeparatorChar}Configurations{Path.DirectorySeparatorChar}host.json";
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

            //向配置容器增加主机配置信息
            ConfigurationContainer.Add(ConfigurationNames.Host, hostConfiguration);
            
            //向配置容器增加主配置
            ConfigurationContainer.Add(ConfigurationNames.Application, configuration);

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


        }



        /// <summary>
        /// 初始化DI容器
        /// 自动装载被标识的对象
        /// </summary>
        /// <param name="serviceCollection"></param>
        /// <param name="dISetting"></param>
        public static void InitDI(IServiceCollection serviceCollection, DISetting dISetting)
        {

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

        }

    }
}
