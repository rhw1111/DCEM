using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Cache;

namespace MSLibrary.Configuration
{
    [Injection(InterfaceType = typeof(ISystemConfigurationRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class SystemConfigurationRepositoryCacheProxy : ISystemConfigurationRepositoryCacheProxy
    {
        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private ISystemConfigurationRepository _systemConfigurationRepository;

        public SystemConfigurationRepositoryCacheProxy(ISystemConfigurationRepository systemConfigurationRepository)
        {
            _systemConfigurationRepository= systemConfigurationRepository;
        }

        private KVCacheVisitor _timeoutCache = new KVCacheVisitor()
        {
            Name = "_SystemConfigurationRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };

        public SystemConfiguration QueryByName(string name)
        {
            return _timeoutCache.GetSync(
                (k)=>
                {
                    return _systemConfigurationRepository.QueryByName(name);
                },name
                );
        }
    }
}
