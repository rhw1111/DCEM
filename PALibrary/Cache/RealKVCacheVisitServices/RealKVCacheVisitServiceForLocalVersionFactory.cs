using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Cache.RealKVCacheVisitServices
{
    public class RealKVCacheVisitServiceForLocalVersionFactory : SingletonFactorySelf<IRealKVCacheVisitService, RealKVCacheVisitServiceForLocalVersionFactory>
    {
        protected override IRealKVCacheVisitService RealCreate()
        {
            return new RealKVCacheVisitServiceForLocalVersion();
        }
    }
}
