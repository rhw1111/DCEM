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
    }
}
