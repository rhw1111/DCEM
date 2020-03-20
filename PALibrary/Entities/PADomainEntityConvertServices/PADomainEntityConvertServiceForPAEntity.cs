using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities.PADomainEntityConvertServices
{
    public class PADomainEntityConvertServiceForPAEntity : IPADomainEntityConvertService
    {
        public object Convert(Entity entityRecord)
        {
            var domainEntity = new PAEntity();
            domainEntity.EntityRecord = entityRecord;
            return domainEntity;
        }
    }

    public class PADomainEntityConvertServiceForPAEntityFactory : SingletonFactorySelf<IPADomainEntityConvertService, PADomainEntityConvertServiceForPAEntityFactory>
    {
        protected override IPADomainEntityConvertService RealCreate()
        {
            return new PADomainEntityConvertServiceForPAEntity();
        }
    }
}
