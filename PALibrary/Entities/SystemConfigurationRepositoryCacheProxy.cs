using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Cache;


namespace PALibrary.Entities
{
    public class SystemConfigurationRepositoryCacheProxy : ISystemConfigurationRepositoryCacheProxy
    {

        public static int MaxLength { get; set; } = 1000;
        public static int ExpireSeconds { get; set; } = 180;

        private KVCacheVisitor _timeoutVisitor = new KVCacheVisitor()
        {
            Name = "_SystemConfigurationRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
              }}", MaxLength.ToString(), ExpireSeconds.ToString())
        };


        private ISystemConfigurationRepository _systemConfigurationRepository;

        public SystemConfigurationRepositoryCacheProxy(ISystemConfigurationRepository systemConfigurationRepository)
        {
            _systemConfigurationRepository = systemConfigurationRepository;
        }

        public SystemConfiguration QueryByName(string name)
        {
            return _timeoutVisitor.GetSync(
                (k)=>
                {
                    return _systemConfigurationRepository.QueryByName(name);
                },
                name
                );
        }
    }

    public class SystemConfigurationRepositoryCacheProxyFactory : SingletonFactorySelf<ISystemConfigurationRepositoryCacheProxy, SystemConfigurationRepositoryCacheProxyFactory>
    {
        protected override ISystemConfigurationRepositoryCacheProxy RealCreate()
        {
            ISystemConfigurationRepository systemConfigurationRepository = SystemConfigurationRepositoryFactory.Get();
            return new SystemConfigurationRepositoryCacheProxy(systemConfigurationRepository);
        }
    }
}
