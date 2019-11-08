using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.Context
{
    /// <summary>
    /// 基于声明的上下文生成器生成器仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(ClaimContextGeneratorRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class ClaimContextGeneratorRepositoryHelper
    {
        private IClaimContextGeneratorRepository _claimContextGeneratorRepository;

        private static HashLinkedCache<string, CacheTimeContainer<ClaimContextGenerator>> _generatorsByName = new HashLinkedCache<string, CacheTimeContainer<ClaimContextGenerator>>() { Length = CacheSize };


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

        public ClaimContextGeneratorRepositoryHelper(IClaimContextGeneratorRepository claimContextGeneratorRepository)
        {
            _claimContextGeneratorRepository = claimContextGeneratorRepository;
        }

        public async Task<ClaimContextGenerator> QueryByName(string name)
        {
            CacheTimeContainer<ClaimContextGenerator> serviceFactoryItem = _generatorsByName.GetValue(name);
            if (serviceFactoryItem == null || serviceFactoryItem.Expire())
            {
                var serviceFactory = await _claimContextGeneratorRepository.QueryByName(name);
                serviceFactoryItem = new CacheTimeContainer<ClaimContextGenerator>(serviceFactory, CacheTimeout);
                _generatorsByName.SetValue(name, serviceFactoryItem);
            }

            return serviceFactoryItem.Value;
        }
    }
}
