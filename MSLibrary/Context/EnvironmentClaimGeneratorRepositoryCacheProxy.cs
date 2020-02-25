using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Cache;


namespace MSLibrary.Context
{
    [Injection(InterfaceType = typeof(IEnvironmentClaimGeneratorRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class EnvironmentClaimGeneratorRepositoryCacheProxy : IEnvironmentClaimGeneratorRepositoryCacheProxy
    {
        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private IEnvironmentClaimGeneratorRepository _environmentClaimGeneratorRepository;

        private KVCacheVisitor _timeoutCache = new KVCacheVisitor()
        {
            Name = "_EnvironmentClaimGeneratorRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };


        public EnvironmentClaimGeneratorRepositoryCacheProxy(IEnvironmentClaimGeneratorRepository environmentClaimGeneratorRepository)
        {
            _environmentClaimGeneratorRepository = environmentClaimGeneratorRepository;
        }


        public async Task<EnvironmentClaimGenerator> QueryByName(string name)
        {
            return await _timeoutCache.Get(
                async(k)=>
                {
                    return await _environmentClaimGeneratorRepository.QueryByName(name);
                },
                name
                );

        }
    }
}
