using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.Configuration
{
    /// <summary>
    /// 系统配置仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(SystemConfigurationRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class SystemConfigurationRepositoryHelper
    {
        private ISystemConfigurationRepository _systemConfigurationRepository;


        private static int _cacheSize = 2000;

        /// <summary>
        /// 缓存数量
        /// 默认2000
        /// </summary>
        public static int CacheSize
        {
            get
            {
                return _cacheSize;
            }
            set
            {
                _configurationsByName.Length = value;
            }
        }
        /// <summary>
        /// 缓存时间
        /// 默认600秒
        /// </summary>
        public static int CacheTimeout { get; set; } = 600;

        /// <summary>
        /// 清除缓存
        /// </summary>
        public static bool Refreash
        {
            set
            {
                _configurationsByName.Clear();
            }
        }

        private static HashLinkedCache<string, CacheTimeContainer<SystemConfiguration>> _configurationsByName = new HashLinkedCache<string, CacheTimeContainer<SystemConfiguration>>() { Length = CacheSize };

        public SystemConfigurationRepositoryHelper(ISystemConfigurationRepository systemConfigurationRepository)
        {
            _systemConfigurationRepository = systemConfigurationRepository;
        }

        public SystemConfiguration QueryByName(string name)
        {
            CacheTimeContainer<SystemConfiguration> configurationItem = _configurationsByName.GetValue(name);
            if (configurationItem == null || configurationItem.Expire())
            {
                var configuration = _systemConfigurationRepository.QueryByName(name);
                configurationItem = new CacheTimeContainer<SystemConfiguration>(configuration, CacheTimeout);
                _configurationsByName.SetValue(name, configurationItem);
            }

            return configurationItem.Value;
        }

    }
}
