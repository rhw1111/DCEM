using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;

namespace MSLibrary.Xrm
{
    /// <summary>
    /// Crm服务工厂仓储帮助器
    /// 加入了缓存功能
    /// 简化需要缓存服务的服务工厂仓储的调用方使用
    /// 
    /// </summary>
    public static class CrmServiceFactoryRepositoryHelper
    {
        private static ICrmServiceFactoryRepository _repository;
        private static int _cacheSize = 200;

        public static ICrmServiceFactoryRepository Repository
        {
            set
            {
                _repository = value;
            }
        }

        private static int CacheSize {
            get
            {
                return _cacheSize;
            }
            set
            {
                _factories.Length = value;
            }
        }
        private static int CacheTimeout { get; set; } = 600;

        private static HashLinkedCache<string, CacheTimeContainer<CrmServiceFactory>> _factories = new HashLinkedCache<string, CacheTimeContainer<CrmServiceFactory>>() { Length= CacheSize };

        public static async Task<CrmServiceFactory> QueryByName(string name)
        {
            CacheTimeContainer<CrmServiceFactory> serviceFactoryItem = _factories.GetValue(name);
            if (serviceFactoryItem== null || serviceFactoryItem.Expire())
            {
                var serviceFactory = await _repository.QueryByName(name);
                serviceFactoryItem = new CacheTimeContainer<CrmServiceFactory>(serviceFactory, CacheTimeout);
                _factories.SetValue(name, serviceFactoryItem);
            }

            return serviceFactoryItem.Value;
        }

        
    }
}
