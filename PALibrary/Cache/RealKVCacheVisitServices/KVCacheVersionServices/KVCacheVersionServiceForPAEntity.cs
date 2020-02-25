using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Entities;

namespace PALibrary.Cache.RealKVCacheVisitServices.KVCacheVersionServices
{
    public class KVCacheVersionServiceForPAEntity : IKVCacheVersionService
    {
        private IVersionConfigurationRepository _versionConfigurationRepository;

        public KVCacheVersionServiceForPAEntity(IVersionConfigurationRepository versionConfigurationRepository)
        {
            _versionConfigurationRepository = versionConfigurationRepository;
        }
        public string GetVersionSync(string versionName)
        {
            var versionConfiguration = _versionConfigurationRepository.QueryByName(versionName);
            return versionConfiguration.EntityRecord.GetAttributeValue<string>($"{PASolutionInfomation.CommonEntityPrefix}_version");
        }
    }
}
