using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Cache;

namespace MSLibrary.Context
{
    [Injection(InterfaceType = typeof(IClaimContextGeneratorRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class ClaimContextGeneratorRepositoryCacheProxy : IClaimContextGeneratorRepositoryCacheProxy
    {
        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private IClaimContextGeneratorRepository _claimContextGeneratorRepository;

        public ClaimContextGeneratorRepositoryCacheProxy(IClaimContextGeneratorRepository claimContextGeneratorRepository)
        {
            _claimContextGeneratorRepository = claimContextGeneratorRepository;
        }

        private KVCacheVisitor _timeoutCache = new KVCacheVisitor()
        {
            Name = "_ClaimContextGeneratorRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };

        public async Task<ClaimContextGenerator> QueryByName(string name)
        {
            return await _timeoutCache.Get(
                async(k)=>
                {
                    return await _claimContextGeneratorRepository.QueryByName(name);
                },
                name
                );
        }
    }
}
