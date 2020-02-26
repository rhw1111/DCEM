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
    public class VersionConfigurationRepository : IVersionConfigurationRepository
    {
        public VersionConfiguration QueryByName(string name)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""{0}_versionConfiguration"">
                                    <attribute name=""{0}_version"" /> 
                                    <filter type=""and"">
                                        <condition attribute=""{0}_name"" operator=""eq"" value=""{1}"" />
                                    </filter>
                                </entity>
                            </fetch>", PASolutionInfomation.CommonEntityPrefix, name.ToXML());

            return PAEntityQueryHelper.Retrive<VersionConfiguration>(strFetch);
        }
    }


    public class VersionConfigurationRepositoryFactory : SingletonFactorySelf<IVersionConfigurationRepository, VersionConfigurationRepositoryFactory>
    {

        protected override IVersionConfigurationRepository RealCreate()
        {
            return new VersionConfigurationRepository();
        }
    }

}
