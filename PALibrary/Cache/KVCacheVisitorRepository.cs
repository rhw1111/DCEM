using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Cache
{
    public class KVCacheVisitorRepository : IKVCacheVisitorRepository
    {
        public KVCacheVisitor QueryByNameSync(string name)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""{0}_kvcachevisitor"">
                                    <attribute name=""{0}_name"" /> 
                                    <attribute name=""{0}_cachetype"" /> 
                                    <attribute name=""{0}_cacheconfiguration"" />
                                   
                                    <filter type=""and"">
                                        <condition attribute=""{0}_name"" operator=""eq"" value=""{1}"" />
                                    </filter>
                                </entity>
                            </fetch>", PASolutionInfomation.CommonEntityPrefix, name.ToXML());

            return PAEntityQueryHelper.Retrive<KVCacheVisitor>(strFetch);
        }
    }

    public class KVCacheVisitorRepositoryFactory : SingletonFactorySelf<IKVCacheVisitorRepository, KVCacheVisitorRepositoryFactory>
    {
        protected override IKVCacheVisitorRepository RealCreate()
        {
            return new KVCacheVisitorRepository();
        }
    }
}
