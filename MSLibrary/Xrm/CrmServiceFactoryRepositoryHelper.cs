using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace MSLibrary.Xrm
{
    /// <summary>
    /// Crm服务工厂仓储帮助器
    /// 供需要使用服务工厂仓储的调用方使用
    /// 加入了缓存功能
    /// </summary>
    public static class CrmServiceFactoryRepositoryHelper
    {
        private static ICrmServiceFactoryRepository _repository;

        public static ICrmServiceFactoryRepository Repository
        {
            set
            {
                _repository = value;
            }
        }

        private static int CacheSize { get; set; } = 200;
        private static int CacheTimeout { get; set; } = 600;

        private static MemoryCache _factories = new MemoryCache(new MemoryCacheOptions()
        {
             SizeLimit= CacheSize
        });

        public static async Task<CrmServiceFactory> QueryByName(string name)
        {
            if (!_factories.TryGetValue<CrmServiceFactory>(name,out CrmServiceFactory serviceFactory))
            {
                serviceFactory = await _repository.QueryByName(name);
                if (serviceFactory!=null)
                {
                    _factories.Set(name, serviceFactory, new MemoryCacheEntryOptions()
                    {
                        AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, CacheTimeout)
                    });
                }
            }

            return serviceFactory;
        }

        
    }
}
