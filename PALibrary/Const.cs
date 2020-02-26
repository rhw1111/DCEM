using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 上下文类型
    /// </summary>
    public static class ContextTypes
    {
        /// <summary>
        /// 当前用户Id
        /// </summary>
        public const string CurrentUser = "CurrentUser";
        /// <summary>
        /// 当前的组织Id
        /// </summary>
        public const string CurrentOrganization = "CurrentOrganization";
        /// <summary>
        /// 组织服务
        /// </summary>
        public const string OrgService = "OrgService";
        /// <summary>
        /// 组织服务工厂
        /// </summary>
        public const string OrgServiceFactory = "OrgServiceFactory";
        /// <summary>
        /// 跟踪服务
        /// </summary>
        public const string TracingService = "TracingService";
        /// <summary>
        /// 字典
        /// </summary>
        public const string Dictionary = "Dictionary";
    }

    /// <summary>
    /// 字典上下文中的键集合
    /// </summary>
    public static class ContextDictionaryKeys
    {
        /// <summary>
        /// 语言翻译文件加载
        /// </summary>
        public const string LanguageTranslateFileLoad = "LanguageTranslateFileLoad";
        /// <summary>
        /// 当前组织名
        /// </summary>
        public const string OrgName = "OrgName";
    }

    /// <summary>
    /// 系统配置名称集
    /// </summary>
    public static class SystemConfigurationNames
    {
        /// <summary>
        /// 通用缓存版本号
        /// 用来控制未特殊标明的缓存更新
        /// </summary>
        public const string CommonCacheVersion = "CommonCacheVersion";
        /// <summary>
        /// 系统管理员ID
        /// </summary>
        public const string AdministratorID = "AdministratorID";
    }

    /// <summary>
    /// KV缓存类型
    /// </summary>
    public static class KVCacheTypes
    {
        /// <summary>
        /// 本地超时
        /// </summary>
        public const string LocalTimeout = "LocalTimeout";
        /// <summary>
        /// 本地版本号
        /// </summary>
        public const string LocalVersion = "LocalVersion";
        /// <summary>
        /// 组合
        /// </summary>
        public const string Combination = "Combination";
    }

    /// <summary>
    /// 缓存版本名称集
    /// </summary>
    public static class CacheVersionNames
    {
        public const string CommonCacheVersion = "CommonCacheVersion";
    }
}
