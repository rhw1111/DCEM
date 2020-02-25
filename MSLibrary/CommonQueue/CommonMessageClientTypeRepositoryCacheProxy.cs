using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Cache;

namespace MSLibrary.CommonQueue
{
    [Injection(InterfaceType = typeof(ICommonMessageClientTypeRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class CommonMessageClientTypeRepositoryCacheProxy : ICommonMessageClientTypeRepositoryCacheProxy
    {
        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private ICommonMessageClientTypeRepository _commonMessageClientTypeRepository;

        public CommonMessageClientTypeRepositoryCacheProxy(ICommonMessageClientTypeRepository commonMessageClientTypeRepository)
        {
            _commonMessageClientTypeRepository = commonMessageClientTypeRepository;
        }

        private KVCacheVisitor _timeoutCache = new KVCacheVisitor()
        {
            Name = "_CommonMessageClientTypeRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };


        public async Task<CommonMessageClientType> QueryByName(string name)
        {
            return await _timeoutCache.Get(
                async(key)=>
                {
                    return await _commonMessageClientTypeRepository.QueryByName(name);
                },
                name
                );
        }
    }
}
