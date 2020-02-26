using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Entities;

namespace PALibrary.Cache.RealKVCacheVisitServices.KVCacheVersionServices
{
    public class KVCacheVersionServiceForPAEntityFactory : SingletonFactorySelf<IKVCacheVersionService, KVCacheVersionServiceForPAEntityFactory>
    {
        protected override IKVCacheVersionService RealCreate()
        {
            var versionConfigurationRepository = VersionConfigurationRepositoryFactory.Get();
            return new KVCacheVersionServiceForPAEntity(versionConfigurationRepository);
        }
    }
}
