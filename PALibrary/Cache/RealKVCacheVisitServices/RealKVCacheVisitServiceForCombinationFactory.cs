using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Cache.RealKVCacheVisitServices
{
    public class RealKVCacheVisitServiceForCombinationFactory : SingletonFactorySelf<IRealKVCacheVisitService, RealKVCacheVisitServiceForCombinationFactory>
    {
        protected override IRealKVCacheVisitService RealCreate()
        {
            IKVCacheVisitorRepositoryCacheProxy kvCacheVisitorRepositoryCacheProxy=KVCacheVisitorRepositoryCacheProxyFactory.Get();
            RealKVCacheVisitServiceForCombination realKVCacheVisitServiceForCombination = new RealKVCacheVisitServiceForCombination(kvCacheVisitorRepositoryCacheProxy);
            throw new NotImplementedException();
        }
    }
}
