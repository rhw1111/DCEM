using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities
{
    public class PAWebResourceRepository : IPAWebResourceRepository
    {
        public PAWebResource QueryByName(string name)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""webresource"">
                                    <attribute name=""content"" />
                                    <attribute name=""languagecode"" />
                                    <attribute name=""webresourcetype"" />   
                                    <filter type=""and"">
                                        <condition attribute=""name"" operator=""eq"" value=""{0}"" />
                                    </filter>
                                </entity>
                            </fetch>", name);

            return PAEntityQueryHelper.Retrive<PAWebResource>(strFetch);
        }
    }


    public class PAWebResourceRepositoryFactory : SingletonFactorySelf<IPAWebResourceRepository, PAWebResourceRepositoryFactory>
    {
        protected override IPAWebResourceRepository RealCreate()
        {
            return new PAWebResourceRepository();
        }

    }
}
