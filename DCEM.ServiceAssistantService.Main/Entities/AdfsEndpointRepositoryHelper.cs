using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace DCEM.ServiceAssistantService.Main.Entities
{

    [Injection(InterfaceType = typeof(AdfsEndpointRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class AdfsEndpointRepositoryHelper
    {
        private IAdfsEndpointRepository _adfsEndpointRepository;
        private static HashLinkedCache<string, CacheTimeContainer<AdfsEndpoint>> _nameEndpoints = new HashLinkedCache<string, CacheTimeContainer<AdfsEndpoint>>() { Length = 200 };


        public AdfsEndpointRepositoryHelper(IAdfsEndpointRepository adfsEndpointRepository)
        {
            _adfsEndpointRepository = adfsEndpointRepository;
        }

        private static int _cacheSize = 200;

        /// <summary>
        /// 缓存数量
        /// 默认200
        /// </summary>
        public static int CacheSize
        {
            get
            {
                return _cacheSize;
            }
            set
            {
                _cacheSize = value;
                _nameEndpoints.Length = value;
            }
        }
        /// <summary>
        /// 缓存时间
        /// -1表示永久有效
        /// </summary>
        public static int CacheTimeout { get; set; } = -1;


        /// <summary>
        /// 清除缓存
        /// </summary>
        public static bool Refreash
        {
            set
            {
                _nameEndpoints.Clear();
            }
        }

        public async Task<AdfsEndpoint> QueryByName(string name)
        {
            CacheTimeContainer<AdfsEndpoint> serviceFactoryItem = _nameEndpoints.GetValue(name);
            if (serviceFactoryItem == null || serviceFactoryItem.Expire())
            {
                var serviceFactory = await _adfsEndpointRepository.QueryByName(name);
                serviceFactoryItem = new CacheTimeContainer<AdfsEndpoint>(serviceFactory, CacheTimeout);
                _nameEndpoints.SetValue(name, serviceFactoryItem);
            }

            return serviceFactoryItem.Value;
        }
    }
}
