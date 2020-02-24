using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities
{
    public class SystemConfigurationRepository : ISystemConfigurationRepository
    {
        public SystemConfiguration QueryByName(string name)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""{0}_systemconfiguration"">
                                    <attribute name=""{0}_content"" /> 
                                    <filter type=""and"">
                                        <condition attribute=""{0}_name"" operator=""eq"" value=""{1}"" />
                                    </filter>
                                </entity>
                            </fetch>", PASolutionInfomation.CommonEntityPrefix,name);

            return PAEntityQueryHelper.Retrive<SystemConfiguration>(name);
        }
    }

    public class SystemConfigurationRepositoryFactory : SingletonFactorySelf<ISystemConfigurationRepository, SystemConfigurationRepositoryFactory>
    {

        protected override ISystemConfigurationRepository RealCreate()
        {
            return new SystemConfigurationRepository();
        }
    }
}
