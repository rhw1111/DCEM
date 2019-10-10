using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;

namespace MSLibrary.Context
{
    /// <summary>
    /// Http声明生成器仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    public class HttpClaimGeneratorRepositoryHelper
    {
        private IHttpClaimGeneratorRepository _httpClaimGeneratorRepository;


        private static int _cacheSize = 2000;

        private static int CacheSize
        {
            get
            {
                return _cacheSize;
            }
            set
            {
                _generatorsByName.Length = value;
            }
        }
        private static int CacheTimeout { get; set; } = 600;

        private static HashLinkedCache<string, CacheTimeContainer<HttpClaimGenerator>> _generatorsByName = new HashLinkedCache<string, CacheTimeContainer<HttpClaimGenerator>>() { Length = CacheSize };


        public HttpClaimGeneratorRepositoryHelper(IHttpClaimGeneratorRepository httpClaimGeneratorRepository)
        {
            _httpClaimGeneratorRepository = httpClaimGeneratorRepository;
        }
        public async Task<HttpClaimGenerator> QueryByName(string name)
        {
            CacheTimeContainer<HttpClaimGenerator> generatorItem = _generatorsByName.GetValue(name);
            if (generatorItem == null || generatorItem.Expire())
            {
                var generator = await _httpClaimGeneratorRepository.QueryByName(name);
                generatorItem = new CacheTimeContainer<HttpClaimGenerator>(generator, CacheTimeout);
                _generatorsByName.SetValue(name, generatorItem);
            }

            return generatorItem.Value;
        }
    }

    /// <summary>
    /// Http声明生成器仓储帮助类工厂
    /// </summary>
    public static class HttpClaimGeneratorRepositoryHelperFactory
    {
        public static HttpClaimGeneratorRepositoryHelper Create(IHttpClaimGeneratorRepository repository)
        {
            return new HttpClaimGeneratorRepositoryHelper(repository);
        }
    }


}
