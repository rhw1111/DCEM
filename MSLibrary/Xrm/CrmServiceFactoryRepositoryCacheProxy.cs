using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Cache;

namespace MSLibrary.Xrm
{
    [Injection(InterfaceType = typeof(ICrmServiceFactoryRepositoryCacheProxy), Scope = InjectionScope.Singleton)]
    public class CrmServiceFactoryRepositoryCacheProxy : ICrmServiceFactoryRepositoryCacheProxy
    {

        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private ICrmServiceFactoryRepository _crmServiceFactoryRepository;

        public CrmServiceFactoryRepositoryCacheProxy(ICrmServiceFactoryRepository crmServiceFactoryRepository)
        {
            _crmServiceFactoryRepository = crmServiceFactoryRepository;
        }
        private KVCacheVisitor _kvcacheVisitor = new KVCacheVisitor()
        {
            Name = "_CrmServiceFactoryRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
                }}", MaxLength.ToString(), ExpireSeconds.ToString())

        };
        public async Task<CrmServiceFactory> QueryByName(string name)
        {
            return await _kvcacheVisitor.Get(
                async(k)=>
                {
                    return await _crmServiceFactoryRepository.QueryByName(name);
                },
                name 
                );
        }
    }
}
