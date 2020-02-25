using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Cache;

namespace MSLibrary.MessageQueue
{
    [Injection(InterfaceType = typeof(ISMessageExecuteTypeRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class SMessageExecuteTypeRepositoryCacheProxy : ISMessageExecuteTypeRepositoryCacheProxy
    {
        public static int MaxLength { get; set; } = 5000;
        public static int ExpireSeconds { get; set; } = 600;

        private ISMessageExecuteTypeRepository _sMessageExecuteTypeRepository;

        public SMessageExecuteTypeRepositoryCacheProxy(ISMessageExecuteTypeRepository sMessageExecuteTypeRepository)
        {
            _sMessageExecuteTypeRepository = sMessageExecuteTypeRepository;
        }

        private KVCacheVisitor _timeoutCache = new KVCacheVisitor()
        {
            Name = "_SMessageExecuteTypeRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };

        public async Task<SMessageExecuteType> QueryByName(string name)
        {
            return await _timeoutCache.Get(
                async(k)=>
                {
                    return await _sMessageExecuteTypeRepository.QueryByName(name);
                },name
                );
        }
    }
}
