using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MSLibrary;
using MSLibrary.Oauth.ADFS;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Context;
using MSLibrary.Context.HttpClaimGeneratorServices;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Token;
using MSLibrary.Xrm.Message;
using MSLibrary.Xrm.Message.AssociateCollection;
using MSLibrary.Xrm.Message.AssociateCollectionMultiple;
using MSLibrary.Xrm.Message.AssociateLookup;
using MSLibrary.Xrm.Message.Batch;
using MSLibrary.Xrm.Message.BoundAction;
using MSLibrary.Xrm.Message.BoundFunction;
using MSLibrary.Xrm.Message.Create;
using MSLibrary.Xrm.Message.CreateRetrieve;
using MSLibrary.Xrm.Message.Delete;
using MSLibrary.Xrm.Message.DisAssociateCollection;
using MSLibrary.Xrm.Message.DisAssociateLookup;
using MSLibrary.Xrm.Message.Retrieve;
using MSLibrary.Xrm.Message.RetrieveAggregation;
using MSLibrary.Xrm.Message.RetrieveCollectionAttribute;
using MSLibrary.Xrm.Message.RetrieveCollectionAttributeAggregation;
using MSLibrary.Xrm.Message.RetrieveCollectionAttributeReference;
using MSLibrary.Xrm.Message.RetrieveCollectionAttributeSavedQuery;
using MSLibrary.Xrm.Message.RetrieveCollectionAttributeUserQuery;
using MSLibrary.Xrm.Message.RetrieveEntityAttributeMetadata;
using MSLibrary.Xrm.Message.RetrieveEntityAttributeMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveEntityMetadata;
using MSLibrary.Xrm.Message.RetrieveEntityMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveEntityN2NRelationMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveEntityO2NRelationMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveGlobalOptionSetMetadata;
using MSLibrary.Xrm.Message.RetrieveLookupAttribute;
using MSLibrary.Xrm.Message.RetrieveLookupAttributeReference;
using MSLibrary.Xrm.Message.RetrieveMultiple;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using MSLibrary.Xrm.Message.RetrieveMultiplePage;
using MSLibrary.Xrm.Message.RetrieveMultipleSavedQuery;
using MSLibrary.Xrm.Message.RetrieveMultipleUserQuery;
using MSLibrary.Xrm.Message.RetrieveN2NRelationMetadata;
using MSLibrary.Xrm.Message.RetrieveN2NRelationMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveO2NRelationMetadata;
using MSLibrary.Xrm.Message.RetrieveO2NRelationMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveRelationMetadata;
using MSLibrary.Xrm.Message.RetrieveRelationMetadataMultiple;
using MSLibrary.Xrm.Message.RetrieveSignleAttribute;
using MSLibrary.Xrm.Message.UnBoundAction;
using MSLibrary.Xrm.Message.UnBoundFunction;
using MSLibrary.Xrm.Message.Update;
using MSLibrary.Xrm.Message.UpdateRetrieve;
using MSLibrary.Xrm.Message.Upsert;
using MSLibrary.Xrm.Message.UpsertRetrieve;
using MSLibrary.Xrm.MessageHandle;
using MSLibrary.Xrm.MessageHandle.CrmAttributeMetadataHandle;
using MSLibrary.Xrm.Convert;
using MSLibrary.Xrm.Convert.CrmRetrieveJTokenHandle;
using MSLibrary.Xrm.CrmServiceFactoryServices;
using MSLibrary.Logger;
using MSLibrary.Logger.LoggingBuilderProviderHandlers;
using MSLibrary.Xrm.Convert.CrmFunctionParameterHandle;
using MSLibrary.Xrm.Convert.CrmExecuteEntityTypeHandle;
using MSLibrary.Xrm.Convert.CrmAlternateKeyTypeHandle;
using MSLibrary.Xrm.Convert.CrmActionParameterHandle;
using MSLibrary.Security.Jwt.JwtGenerateCreateSignKeyServices;
using MSLibrary.Security.Jwt.JwtGenerateValidateSignKeyServices;
using MSLibrary.Security.Jwt.JwtValidateParameterBuildServices;
using DCEM.Main;
using DCEM.Main.Context;
using DCEM.Main.Context.HttpClaimGeneratorServices;
using DCEM.Main.Context.ClaimContextGeneratorServices;
using System.Net.Http;
using DCEM.Main.Configuration;
using DCEM.Main.Entities;

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
            ConfigurationContainer.Add(ConfigurationNames.Logger, loggerConfiguration);



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
            ContextContainer.Current.Register<string>(ContextTypes.CurrentUserId, new ContextCurrentUserID());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.ParentCommonLogID, new ContextParentCommonLogID());
            ContextContainer.Current.Register<string>(ContextExtensionTypes.ParentCommonLogActionName, new ContextParentCommonLogActionName());
            ContextContainer.Current.Register<string>(ContextExtensionTypes.ParentCommonLogContextInfo, new ContextParentCommonLogContextInfo());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.PreCommonLogLevelID, new ContextCommonLogPreLevelID());
            ContextContainer.Current.Register<Guid>(ContextExtensionTypes.CurrentCommonLogLevelID, new ContextCommonLogCurrentLevelID());
            ContextContainer.Current.Register<UserInfo>(ContextExtensionTypes.CurrentUserInfo, new ContextCurrentUserInfo());

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
            InitCrmStaticInfo();

            //为HttpClinetHelper的HttpClientFactory赋值
            HttpClinetHelper.HttpClientFactory = DIContainerContainer.Get<IHttpClientFactory>();

            //为AdfsHelper.HttpClientFactory赋值
            AdfsHelper.HttpClientFactory= DIContainerContainer.Get<IHttpClientFactory>();

            //CrmServiceFactoryRepositoryHelper.Repository = DIContainerContainer.Get<ICrmServiceFactoryRepository>();
            //为日志构建器处理的提供方处理工厂赋值
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.ApplicationInsights]=DIContainerContainer.Get<LoggingBuilderProviderHandlerForApplicationInsightsFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.Console]= DIContainerContainer.Get<LoggingBuilderProviderHandlerForConsoleFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.CommonLog]= DIContainerContainer.Get<LoggingBuilderProviderHandlerForCommonLogFactory>();
            LoggingBuilderHandlerDefault.ProviderHandlerFactories[LoggerProviderHandlerNames.CommonLogLocal]=DIContainerContainer.Get<LoggingBuilderProviderHandlerForCommonLogLocalFactory>();

            //为HttpClaimGeneratorIMP.HttpClaimGeneratorServiceFactories增加键值对
            HttpClaimGeneratorIMP.HttpClaimGeneratorServiceFactories[HttpClaimGeneratorServiceTypes.Inner]= DIContainerContainer.Get<HttpClaimGeneratorServiceForInnerFactory>();

            //为ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories增加键值对
            ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories[ClaimContextGeneratorServiceTypes.Inner]= DIContainerContainer.Get<ClaimContextGeneratorServiceForInnerFactory>();
            ClaimContextGeneratorIMP.ClaimContextGeneratorServiceFactories[ClaimContextGeneratorServiceTypes.Default] = DIContainerContainer.Get<ClaimContextGeneratorServiceForDefaultFactory>();

            //为JwtGenerateCreateSignKeyMainService.JwtGenerateValidateSignKeyMainService赋值
            JwtGenerateCreateSignKeyMainService.JwtGenerateCreateSignKeyServiceFactories[JwtGenerateCreateSignKeyServiceTypes.RsaPrivate] = DIContainerContainer.Get<JwtGenerateCreateSignKeyServiceForRsaPrivateFactory>();

            //为JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories赋值
            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories[JwtGenerateValidateSignKeyServiceTypes.MetadataService] = DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForMetadataServiceFactory>();
            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories[JwtGenerateValidateSignKeyServiceTypes.RsaPublic] = DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForRsaPublicFactory>();

            //为JwtValidateParameterBuildMainService.JwtValidateParameterBuildServiceFactories赋值
            JwtValidateParameterBuildMainService.JwtValidateParameterBuildServiceFactories[JwtValidateParameterBuildServiceTypes.Audience] = DIContainerContainer.Get<JwtValidateParameterBuildServiceForAudienceFactory>();
            JwtValidateParameterBuildMainService.JwtValidateParameterBuildServiceFactories[JwtValidateParameterBuildServiceTypes.Issuer] = DIContainerContainer.Get<JwtValidateParameterBuildServiceForIssuerFactory>();
            JwtValidateParameterBuildMainService.JwtValidateParameterBuildServiceFactories[JwtValidateParameterBuildServiceTypes.Lifetime] = DIContainerContainer.Get<JwtValidateParameterBuildServiceForLifetimeFactory>();

            InitThirdInterfaceSetting();

        }

        /// <summary>
        /// 初始化Crm静态信息
        /// </summary>
        public static void InitCrmStaticInfo()
        {
            //为CrmMessageHandleSelector.HandleFactories赋值，键为Message类型的全名
            CrmMessageHandleSelector.HandleFactories[typeof(CrmAssociateCollectionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForAssociateCollectionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmAssociateCollectionMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForAssociateCollectionMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmAssociateLookupRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForAssociateLookupFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmBatchRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForBatchFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmBoundActionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForBoundActionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmBoundFunctionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForBoundFunctionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmCreateRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForCreateFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmCreateRetrieveRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForCreateRetrieveFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmDeleteRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForDeleteFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmDisAssociateCollectionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForDisAssociateCollectionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmDisAssociateLookupRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForDisAssociateLookupFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveAggregationRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveAggregationFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveCollectionAttributeRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveCollectionAttributeFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveCollectionAttributeAggregationRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveCollectionAttributeAggregationFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveCollectionAttributeReferenceRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveCollectionAttributeReferenceFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveCollectionAttributeSavedQueryRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveCollectionAttributeSavedQueryFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveCollectionAttributeUserQueryRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveCollectionAttributeUserQueryFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityAttributeMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityAttributeMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityAttributeMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityAttributeMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityN2NRelationMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityN2NRelationMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveEntityO2NRelationMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveEntityO2NRelationMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveGlobalOptionSetMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveGlobalOptionSetMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveLookupAttributeRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveLookupAttributeFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveLookupAttributeReferenceRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveLookupAttributeReferenceFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveMultipleFetchRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveMultipleFetchFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveMultiplePageRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveMultiplePageFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveMultipleSavedQueryRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveMultipleSavedQueryFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveMultipleUserQueryRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveMultipleUserQueryFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveN2NRelationMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveN2NRelationMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveN2NRelationMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveN2NRelationMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveO2NRelationMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveO2NRelationMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveO2NRelationMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveO2NRelationMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveRelationMetadataRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveRelationMetadataFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveRelationMetadataMultipleRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveRelationMetadataMultipleFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmRetrieveSignleAttributeRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForRetrieveSignleAttributeFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUnBoundActionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUnBoundActionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUnBoundFunctionRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUnBoundFunctionFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUpdateRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUpdateFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUpdateRetrieveRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUpdateRetrieveFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUpsertRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUpsertFactory>();
            CrmMessageHandleSelector.HandleFactories[typeof(CrmUpsertRetrieveRequestMessage).FullName] = DIContainerContainer.Get<CrmMessageHandleForUpsertRetrieveFactory>();


            //为CrmAttributeMetadataHandleSelector.HandleFactories赋值
            CrmAttributeMetadataHandleSelector.HandleFactories[CrmAttributeReturnTypes.OptionSet]= DIContainerContainer.Get<CrmAttributeMetadataHandleForOptionSetFactory>();
            CrmAttributeMetadataHandleSelector.HandleFactories[CrmAttributeReturnTypes.PickList] = DIContainerContainer.Get<CrmAttributeMetadataHandleForPickListFactory>();


            //为CrmServiceTokenGenerateServiceSelector.ServiceFactories赋值
            CrmServiceTokenGenerateServiceSelector.ServiceFactories[CrmServiceTokenGenerateServiceTypes.AD] = DIContainerContainer.Get<CrmServiceTokenGenerateServiceForADFactory>();
            CrmServiceTokenGenerateServiceSelector.ServiceFactories[CrmServiceTokenGenerateServiceTypes.ADFS]= DIContainerContainer.Get<CrmServiceTokenGenerateServiceForADFSFactory>();
            CrmServiceTokenGenerateServiceSelector.ServiceFactories[CrmServiceTokenGenerateServiceTypes.ADFSPassword] = DIContainerContainer.Get<CrmServiceTokenGenerateServiceForADFSPasswordFactory>();
            CrmServiceTokenGenerateServiceSelector.ServiceFactories[CrmServiceTokenGenerateServiceTypes.S2S] = DIContainerContainer.Get<CrmServiceTokenGenerateServiceForS2SFactory>();


            //为 CrmServiceFactoryIMP.ServiceFactories赋值
            CrmServiceFactoryIMP.ServiceFactories[CrmServiceFactoryServiceTypes.Common]= DIContainerContainer.Get<CrmServiceFactoryServiceForCommonFactory>();

            //为 CrmRetrieveJTokenConvertService.HandleFactories赋值
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(CrmEntity)]= DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityFactory>();
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(CrmEntityCollection)] = DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityCollectionFactory>();
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(List<CrmEntity>)] = DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityListFactory>();
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(CrmEntityReference)] = DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityReferenceCollectionFactory>();
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(CrmEntityReferenceCollection)] = DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityReferenceCollectionFactory>();
            CrmRetrieveJTokenConvertService.HandleFactories[typeof(List<CrmEntityReference>)] = DIContainerContainer.Get<CrmRetrieveJTokenHandleForCrmEntityReferenceListFactory>();
           
            //为CrmFunctionParameterMainHandle.HandleFactories赋值
            CrmFunctionParameterMainHandle.HandleFactories[typeof(bool)]= DIContainerContainer.Get<CrmFunctionParameterHandleForBoolFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(CrmEntityReference)] = DIContainerContainer.Get<CrmFunctionParameterHandleForCrmEntityReferenceFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(CrmEntityReferenceNull)] = DIContainerContainer.Get<CrmFunctionParameterHandleForCrmEntityReferenceNullFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(DateTime)] = DIContainerContainer.Get<CrmFunctionParameterHandleForDateTimeFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(CrmFunctionEnumTypeParameter)] = DIContainerContainer.Get<CrmFunctionParameterHandleForEnumTypeFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(int)] = DIContainerContainer.Get<CrmFunctionParameterHandleForNumberFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(long)] = DIContainerContainer.Get<CrmFunctionParameterHandleForNumberFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(decimal)] = DIContainerContainer.Get<CrmFunctionParameterHandleForNumberFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(float)] = DIContainerContainer.Get<CrmFunctionParameterHandleForNumberFactory>();
            CrmFunctionParameterMainHandle.HandleFactories[typeof(string)] = DIContainerContainer.Get<CrmFunctionParameterHandleForStringFactory>();

            //为CrmExecuteEntityTypemMainHandle.ServiceFactories赋值
            CrmExecuteEntityTypemMainHandle.ServiceFactories[typeof(CrmEntityReference)] = DIContainerContainer.Get<CrmExecuteEntityTypeHandleForCrmEntityReferenceFactory>();
            CrmExecuteEntityTypemMainHandle.ServiceFactories[typeof(IList<CrmEntityReference>)] = DIContainerContainer.Get<CrmExecuteEntityTypeHandleForCrmEntityReferenceListFactory>();
            CrmExecuteEntityTypemMainHandle.ServiceFactories[typeof(IList<CrmEntityReferenceNull>)] = DIContainerContainer.Get<CrmExecuteEntityTypeHandleForCrmEntityReferenceNullFactory>();
            CrmExecuteEntityTypemMainHandle.ServiceFactories[typeof(CrmExecuteEntity)] = DIContainerContainer.Get<CrmExecuteEntityTypeHandleForCrmExecuteEntityFactory>();
            CrmExecuteEntityTypemMainHandle.ServiceFactories[typeof(IList<CrmExecuteEntity>)] = DIContainerContainer.Get<CrmExecuteEntityTypeHandleForCrmExecuteEntityListFactory>();

            //为CrmAlternateKeyTypeMainHandle.ServiceFactories赋值
            CrmAlternateKeyTypeMainHandle.ServiceFactories[typeof(CrmEntityReference)]= DIContainerContainer.Get<CrmAlternateKeyTypeHandleForCrmEntityReferenceFactory>();
            CrmAlternateKeyTypeMainHandle.ServiceFactories[typeof(int)] = DIContainerContainer.Get<CrmAlternateKeyTypeHandleForNumberFactory>();
            CrmAlternateKeyTypeMainHandle.ServiceFactories[typeof(float)] = DIContainerContainer.Get<CrmAlternateKeyTypeHandleForNumberFactory>();
            CrmAlternateKeyTypeMainHandle.ServiceFactories[typeof(decimal)] = DIContainerContainer.Get<CrmAlternateKeyTypeHandleForNumberFactory>();
            CrmAlternateKeyTypeMainHandle.ServiceFactories[typeof(string)] = DIContainerContainer.Get<CrmAlternateKeyTypeHandleForStringFactory>();

            //为 CrmActionParameterMainHandle.HandleFactories赋值
            CrmActionParameterMainHandle.HandleFactories[typeof(CrmEntityReference)]= DIContainerContainer.Get<CrmActionParameterHandleForCrmEntityReferenceFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(IList<CrmEntityReference>)] = DIContainerContainer.Get<CrmActionParameterHandleForCrmEntityReferenceListFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(CrmEntityReferenceNull)] = DIContainerContainer.Get<CrmActionParameterHandleForCrmEntityReferenceNullFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(CrmExecuteEntity)] = DIContainerContainer.Get<CrmActionParameterHandleForCrmExecuteEntityFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(IList<CrmExecuteEntity>)] = DIContainerContainer.Get<CrmActionParameterHandleForCrmExecuteEntityListFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(int)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(long)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(decimal)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(float)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(string)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(DateTime)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
            CrmActionParameterMainHandle.HandleFactories[typeof(bool)] = DIContainerContainer.Get<CrmActionParameterHandleForOtherFactory>();
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

        /// <summary>
        /// 初始化Crm服务
        /// </summary>
        /// <returns></returns>
        public static CrmService CreateCrmService()
        {
            var coreConfiguration = ConfigurationContainer.Get<BaseConfiguration>(ConfigurationNames.Application);

            var crmService = DIContainerContainer.Get<CrmService>();
            if (coreConfiguration.DyCRMSetting != null)
            {
                var dyCRMSetting = coreConfiguration.DyCRMSetting;
                if (crmService != null)
                {
                    crmService.CrmApiMaxRetry = dyCRMSetting.CrmApiMaxRetry;
                    crmService.CrmApiVersion = dyCRMSetting.CrmApiVersion;
                    crmService.CrmUrl = dyCRMSetting.CrmUrl;
                    crmService.TokenServiceType = dyCRMSetting.TokenServiceType;
                    crmService.TokenServiceParameters.Add("AdfsUrl", dyCRMSetting.AdfsUrl);
                    crmService.TokenServiceParameters.Add("CrmUrl", dyCRMSetting.CrmUrl);
                    crmService.TokenServiceParameters.Add("ClientId", dyCRMSetting.ClientId);
                    crmService.TokenServiceParameters.Add("ClientSecret", dyCRMSetting.ClientSecret);
                    crmService.TokenServiceParameters.Add("UserName", dyCRMSetting.UserName);
                    crmService.TokenServiceParameters.Add("Password", dyCRMSetting.Password);
                    crmService.TokenServiceParameters.Add("RedirectUri", dyCRMSetting.RedirectUri);

                }
            }

            return crmService;
        }
        /// <summary>
        /// 初始化第三方接口配置信息
        /// </summary>
        public static void InitThirdInterfaceSetting() { 

        }
        /// <summary>
        /// 初始化商品交易中心服务
        /// </summary>
        /// <returns></returns>
        public static CrmService InitialTCenterService()
        {

            return null;
        }
    }
}
