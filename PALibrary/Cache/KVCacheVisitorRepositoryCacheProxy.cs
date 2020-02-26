using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Cache
{
    public class KVCacheVisitorRepositoryCacheProxy : IKVCacheVisitorRepositoryCacheProxy
    {

        public static int MaxLength { get; set; } = 500;
        public static int ExpireSeconds { get; set; } = 600;

        private KVCacheVisitor _timeoutVisitor = new KVCacheVisitor()
        {
            Name = "_KVCacheVisitorRepository",
            CacheType = KVCacheTypes.LocalTimeout,
            CacheConfiguration = string.Format(@"{{
                        ""MaxLength"":{0},
                        ""ExpireSeconds"":{1}
              }}", MaxLength.ToString(), ExpireSeconds.ToString())
        };


        private IKVCacheVisitorRepository _kvCacheVisitorRepository;

        public KVCacheVisitorRepositoryCacheProxy(IKVCacheVisitorRepository kvCacheVisitorRepository)
        {
            _kvCacheVisitorRepository = kvCacheVisitorRepository;
        }
        public KVCacheVisitor QueryByNameSync(string name)
        {
            return _timeoutVisitor.GetSync(
                (k)=>
                {
                    return _kvCacheVisitorRepository.QueryByNameSync(name);
                },
                name
                );
        }
    }

    public class KVCacheVisitorRepositoryCacheProxyFactory : SingletonFactorySelf<IKVCacheVisitorRepositoryCacheProxy, KVCacheVisitorRepositoryCacheProxyFactory>
    {
        protected override IKVCacheVisitorRepositoryCacheProxy RealCreate()
        {
            var kvCacheVisitorRepository= KVCacheVisitorRepositoryFactory.Get();
            return new KVCacheVisitorRepositoryCacheProxy(kvCacheVisitorRepository);
        }
    }
}
