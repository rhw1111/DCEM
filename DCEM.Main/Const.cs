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
}
