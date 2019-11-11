using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.Xrm
{
    /// <summary>
    /// Crm服务工厂仓储帮助器
    /// 加入了缓存功能
    /// 简化需要缓存服务的服务工厂仓储的调用方使用
    /// 
    /// </summary>
    [Injection(InterfaceType = typeof(CrmServiceFactoryRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class CrmServiceFactoryRepositoryHelper
    {

        private ICrmServiceFactoryRepository _crmServiceFactoryRepository;

        public CrmServiceFactoryRepositoryHelper(ICrmServiceFactoryRepository crmServiceFactoryRepository)
        {
            _crmServiceFactoryRepository = crmServiceFactoryRepository;
        }

        private static int _cacheSize = 200;

        /// <summary>
        /// 缓存数量
        /// 默认200
        /// </summary>
        public static int CacheSize {
            get
            {
                return _cacheSize;
            }
            set
            {
                _cacheSize = value;
                _factories.Length = value;
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
                _factories.Clear();
            }
        }


        private static HashLinkedCache<string, CacheTimeContainer<CrmServiceFactory>> _factories = new HashLinkedCache<string, CacheTimeContainer<CrmServiceFactory>>() { Length= CacheSize };

        public async Task<CrmServiceFactory> QueryByName(string name)
        {
            CacheTimeContainer<CrmServiceFactory> serviceFactoryItem = _factories.GetValue(name);
            if (serviceFactoryItem== null || serviceFactoryItem.Expire())
            {
                var serviceFactory = await _crmServiceFactoryRepository.QueryByName(name);
                serviceFactoryItem = new CacheTimeContainer<CrmServiceFactory>(serviceFactory, CacheTimeout);
                _factories.SetValue(name, serviceFactoryItem);
            }

            return serviceFactoryItem.Value;
        }

        
    }
}
