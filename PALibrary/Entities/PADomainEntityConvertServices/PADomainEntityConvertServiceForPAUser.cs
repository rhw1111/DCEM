using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities.PADomainEntityConvertServices
{
    public class PADomainEntityConvertServiceForPAUser : IPADomainEntityConvertService
    {
        public object Convert(Entity entityRecord)
        {
            var domainEntity= new PAUser();
            domainEntity.EntityRecord = entityRecord;
            return domainEntity;
        }
    }

    public class PADomainEntityConvertServiceForPAUserFactory : SingletonFactorySelf<IPADomainEntityConvertService, PADomainEntityConvertServiceForPAUserFactory>
    {
        protected override IPADomainEntityConvertService RealCreate()
        {
            return new PADomainEntityConvertServiceForPAUser();
        }
    }
}
