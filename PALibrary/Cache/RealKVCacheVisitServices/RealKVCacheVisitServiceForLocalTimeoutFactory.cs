using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Cache.RealKVCacheVisitServices
{
    public class RealKVCacheVisitServiceForLocalTimeoutFactory : SingletonFactorySelf<IRealKVCacheVisitService, RealKVCacheVisitServiceForLocalTimeoutFactory>
    {
        protected override IRealKVCacheVisitService RealCreate()
        {
            return new RealKVCacheVisitServiceForLocalTimeout();
        }
    }
}
