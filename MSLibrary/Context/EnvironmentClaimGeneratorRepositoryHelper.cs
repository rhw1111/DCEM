using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.Context
{
    /// <summary>
    /// 环境声明生成器仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(EnvironmentClaimGeneratorRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class EnvironmentClaimGeneratorRepositoryHelper
    {
        private IEnvironmentClaimGeneratorRepository _environmentClaimGeneratorRepository;

        private static HashLinkedCache<string, CacheTimeContainer<EnvironmentClaimGenerator>> _generatorsByName = new HashLinkedCache<string, CacheTimeContainer<EnvironmentClaimGenerator>>() { Length = CacheSize };


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
                _cacheSize = value;
                _generatorsByName.Length = value;
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
                _generatorsByName.Clear();
            }
        }


        public async Task<EnvironmentClaimGenerator> QueryByName(string name)
        {
            CacheTimeContainer<EnvironmentClaimGenerator> serviceFactoryItem = _generatorsByName.GetValue(name);
            if (serviceFactoryItem == null || serviceFactoryItem.Expire())
            {
                var serviceFactory = await _environmentClaimGeneratorRepository.QueryByName(name);
                serviceFactoryItem = new CacheTimeContainer<EnvironmentClaimGenerator>(serviceFactory, CacheTimeout);
                _generatorsByName.SetValue(name, serviceFactoryItem);
            }

            return serviceFactoryItem.Value;
        }


    }
}
