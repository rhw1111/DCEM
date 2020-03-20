using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities.PADomainEntityConvertServices
{
    public class PADomainEntityConvertServiceForPAUserSetting : IPADomainEntityConvertService
    {
        public object Convert(Entity entityRecord)
        {
            var domainEntity = new PAUserSetting();
            domainEntity.EntityRecord = entityRecord;
            return domainEntity;
        }
    }

    public class PADomainEntityConvertServiceForPAUserSettingFactory : SingletonFactorySelf<IPADomainEntityConvertService, PADomainEntityConvertServiceForPAUserSettingFactory>
    {
        protected override IPADomainEntityConvertService RealCreate()
        {
            return new PADomainEntityConvertServiceForPAUserSetting();
        }
    }
}
