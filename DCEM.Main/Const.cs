using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main
{
    /// <summary>
    /// 配置名称集
    /// </summary>
    public static class ConfigurationNames
    {
        /// <summary>
        /// 应用配置
        /// </summary>
        public const string Application = "Application";
        /// <summary>
        /// 主机配置
        /// </summary>
        public const string Host = "Host";
        /// <summary>
        /// 日志配置
        /// </summary>
        public const string Logger = "Logger";
    }

    /// <summary>
    /// 上下文扩展类型名称集
    /// </summary>
    public static class ContextExtensionTypes
    {
        /// <summary>
        /// DI容器上下文
        /// </summary>
        public const string DI = "DI";
        /// <summary>
        /// 当前用户ID上下文
        /// </summary>
        public const string CurrentUserID = "CurrentUserID";
        /// <summary>
        /// 通用上下文用户信息
        /// </summary>
        public const string CurrentUserInfo = "CurrentUserInfo";
        /// <summary>
        /// 父通用日志ID
        /// </summary>
        public const string ParentCommonLogID = "ParentCommonLogID";
        /// <summary>
        /// 通用日志前一层级ID
        /// </summary>
        public const string PreCommonLogLevelID = "PreCommonLogLevelID";
        /// <summary>
        /// 通用日志当前层级ID
        /// </summary>
        public const string CurrentCommonLogLevelID = "CurrentCommonLogLevelID";
        /// <summary>
        /// 父通用日志动作名称
        /// </summary>
        public const string ParentCommonLogActionName = "ParentCommonLogActionName";
        /// <summary>
        /// 父通用日志上下文信息
        /// </summary>
        public const string ParentCommonLogContextInfo = "ParentCommonLogContextInfo";
    }

    /// <summary>
    /// 日志提供方处理名称集
    /// </summary>
    public static class LoggerProviderHandlerNames
    {
        /// <summary>
        /// ApplicationInsights
        /// </summary>
        public const string ApplicationInsights = "ApplicationInsights";
        /// <summary>
        /// 控制台
        /// </summary>
        public const string Console = "Console";
        /// <summary>
        /// 通用日志
        /// </summary>
        public const string CommonLog = "CommonLog";

        /// <summary>
        /// 本地通用日志
        /// </summary>
        public const string CommonLogLocal = "CommonLogLocal";
    }

    /// <summary>
    /// Http头名称集
    /// </summary>
    public static class HttpHeaderNames
    {
        /// <summary>
        /// 内部请求附加的身份信息的头名称
        /// </summary>
        public const string InnerAuth = "InnerAuth";
        /// <summary>
        /// 保存父日志信息的头名称
        /// </summary>
        public const string LogInfo = "LogInfo";
    }

    /// <summary>
    /// 声明类型集合
    /// </summary>
    public static class ClaimsTypes
    {
        public const string User = "User";
        public const string UserID = "UserID";
        public const string Lcid = "Lcid";
        public const string TimezoneOffset = "TimezoneOffset";

    }

    /// <summary>
    /// 声明上下文生成服务类型集
    /// </summary>
    public static class ClaimContextGeneratorServiceTypes
    {
        /// <summary>
        /// 内部服务
        /// </summary>
        public const string Inner = "Inner";
        /// <summary>
        /// 使用默认用户信息
        /// </summary>
        public const string Default = "Default";
    }

    /// <summary>
    /// http声明生成服务类型集
    /// </summary>
    public static class HttpClaimGeneratorServiceTypes
    {
        /// <summary>
        /// 内部服务
        /// </summary>
        public const string Inner = "Inner";
    }

    /// <summary>
    /// 日志目录名称集
    /// </summary>
    public static class LoggerCategoryNames
    {
        public const string DIWrapper = "DIWrapper";
        public const string HttpRequest = "HttpRequest";
        public const string SystemAuthentication = "SystemAuthentication";
    }

    /// <summary>
    /// 系统配置名称集
    /// </summary>
    public static class SystemConfigurationNames
    {
        /// <summary>
        /// 配置服务地址
        /// </summary>
        public const string ConfigurationServiceBaseAddress = "ConfigurationServiceBaseAddress";
        /// <summary>
        /// 默认上下文信息
        /// </summary>
        public const string DefaultContextInfo = "DefaultContextInfo";
    }

    /// <summary>
    /// 数据连接名称集
    /// </summary>
    public static class DBConnectionNames
    {
        /// <summary>
        /// 主读写数据
        /// </summary>
        public const string MainDBAll = "MainDBAll";
        /// <summary>
        /// 主只读数据
        /// </summary>
        public const string MainDBRead = "MainDBRead";

    }

    /// <summary>
    /// 远程服务名称集
    /// </summary>
    public static class RemoteServiceNames
    {
        /// <summary>
        /// 新增通用日志
        /// </summary>
        public const string AddCommonLog = "AddCommonLog";
        /// <summary>
        /// 商品交易中心服务
        /// </summary>
        public const string RemoteServiceTCenter = "RemoteServiceTCenter";
    }

    /// <summary>
    /// Crm服务令牌生成服务类型集
    /// </summary>
    public static class CrmServiceTokenGenerateServiceTypes
    {
        /// <summary>
        /// 基于AD的基本认证模式
        /// </summary>
        public const string AD = "AD";
        /// <summary>
        /// 基于ADFS Oauth的Code模式
        /// </summary>
        public const string ADFS = "ADFS";
        /// <summary>
        /// 基于ADFS Oauth的Password模式
        /// </summary>
        public const string ADFSPassword = "ADFSPassword";
        /// <summary>
        /// 基于AAD Oauth的客户端模式
        /// </summary>
        public const string S2S = "S2S";
    }

    /// <summary>
    /// Crm消息名称集
    /// </summary>
    public static class CrmMessageNames
    {
        public const string AssociateCollection = "AssociateCollection";
        public const string AssociateCollectionMultiple = "AssociateCollectionMultiple";
        public const string AssociateLookup = "AssociateLookup";
        public const string Batch = "Batch";
        public const string BoundAction = "BoundAction";
        public const string BoundFunction = "BoundFunction";
        public const string Create = "Create";
        public const string CreateRetrieve = "CreateRetrieve";
        public const string Delete = "Delete";
        public const string DisAssociateCollection = "DisAssociateCollection";
        public const string DisAssociateLookup = "DisAssociateLookup";
        public const string Retrieve = "Retrieve";
        public const string RetrieveAggregation = "RetrieveAggregation";
        public const string RetrieveCollectionAttribute = "RetrieveCollectionAttribute";
        public const string RetrieveCollectionAttributeAggregation = "RetrieveCollectionAttributeAggregation";
        public const string RetrieveCollectionAttributeReference = "RetrieveCollectionAttributeReference";
        public const string RetrieveCollectionAttributeSavedQuery = "RetrieveCollectionAttributeSavedQuery";
        public const string RetrieveCollectionAttributeUserQuery = "RetrieveCollectionAttributeUserQuery";
        public const string RetrieveEntityAttributeMetadata = "RetrieveEntityAttributeMetadata";
        public const string RetrieveEntityAttributeMetadataMultiple = "RetrieveEntityAttributeMetadataMultiple";
        public const string RetrieveEntityMetadata = "RetrieveEntityMetadata";
        public const string RetrieveEntityMetadataMultiple = "RetrieveEntityMetadataMultiple";
        public const string RetrieveEntityN2NRelationMetadataMultiple = "RetrieveEntityN2NRelationMetadataMultiple";
        public const string RetrieveEntityO2NRelationMetadataMultiple = "RetrieveEntityO2NRelationMetadataMultiple";
        public const string RetrieveGlobalOptionSetMetadata = "RetrieveGlobalOptionSetMetadata";
        public const string RetrieveLookupAttribute = "RetrieveLookupAttribute";
        public const string RetrieveLookupAttributeReference = "RetrieveLookupAttributeReference";
        public const string RetrieveMultiple = "RetrieveMultiple";
        public const string RetrieveMultipleFetch = "RetrieveMultipleFetch";
        public const string RetrieveMultiplePage = "RetrieveMultiplePage";
        public const string RetrieveMultipleSavedQuery = "RetrieveMultipleSavedQuery";
        public const string RetrieveMultipleUserQuery = "RetrieveMultipleUserQuery";
        public const string RetrieveN2NRelationMetadata = "RetrieveN2NRelationMetadata";
        public const string RetrieveN2NRelationMetadataMultiple = "RetrieveN2NRelationMetadataMultiple";
        public const string RetrieveO2NRelationMetadata = "RetrieveO2NRelationMetadata";
        public const string RetrieveO2NRelationMetadataMultiple = "RetrieveO2NRelationMetadataMultiple";
        public const string RetrieveRelationMetadata = "RetrieveRelationMetadata";
        public const string RetrieveRelationMetadataMultiple = "RetrieveRelationMetadataMultiple";
        public const string RetrieveSignleAttribute = "RetrieveSignleAttribute";
        public const string UnBoundAction = "UnBoundAction";
        public const string UnBoundFunction = "UnBoundFunction";
        public const string Update = "Update";
        public const string UpdateRetrieve = "UpdateRetrieve";
        public const string Upsert = "Upsert";
        public const string UpsertRetrieve = "UpsertRetrieve";


    }

    /// <summary>
    /// Crm属性返回类型集
    /// </summary>
    public static class CrmAttributeReturnTypes
    {
        public const string OptionSet = "OptionSet";

        public const string PickList = "PickList";
    }

    /// <summary>
    /// Crm服务工厂的服务类型集
    /// </summary>
    public static class CrmServiceFactoryServiceTypes
    {
        public const string Common = "Common";
    }

    /// <summary>
    /// Jwt生成生成时用到的密钥服务的类型集
    /// </summary>
    public static class JwtGenerateCreateSignKeyServiceTypes
    {
        /// <summary>
        /// 基于非对称密钥的私钥
        /// </summary>
        public const string RsaPrivate = "RsaPrivate";
    }

    /// <summary>
    /// Jwt生成验证时使用的密钥服务的类型集
    /// </summary>
    public static class JwtGenerateValidateSignKeyServiceTypes
    {
        /// <summary>
        /// 基于元数据服务
        /// </summary>
        public const string MetadataService = "MetadataService";
        /// <summary>
        /// 基于非对称密钥的公钥
        /// </summary>
        public const string RsaPublic = "RsaPublic";
    }

    /// <summary>
    /// Jwt验证参数构造服务类型集
    /// </summary>
    public static class JwtValidateParameterBuildServiceTypes
    {
        /// <summary>
        /// 调用者
        /// </summary>
        public const string Audience = "Audience";
        /// <summary>
        /// 颁发者
        /// </summary>
        public const string Issuer = "Issuer";
        /// <summary>
        /// 令牌有效期
        /// </summary>
        public const string Lifetime = "Lifetime";
    }

}