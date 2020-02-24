using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities
{
    public class PAUserRepository : IPAUserRepository
    {
        public PAUser QueryByID(Guid id)
        {
            string strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"" >
                                    <entity name = ""systemuser"">
                                        <attribute name = ""businessunitid"" />                        
                                        <attribute name = ""systemuserid"" />
                                        <attribute name = ""internalemailaddress"" />         
                                        <attribute name=""domainname"" />
                                        <attribute name=""isdisabled"" />       
                                         <filter type = ""and"" >
                                            <condition attribute=""systemuserid"" operator=""eq"" uitype=""systemuser"" value=""{0}"" />
                                         </filter >
                                    </entity >
                                 </fetch> ", id);
            return PAEntityQueryHelper.Retrive<PAUser>(strFetch);
        }
    }

    public class PAUserRepositoryFactory : SingletonFactorySelf<IPAUserRepository, PAUserRepositoryFactory>
    {
        protected override IPAUserRepository RealCreate()
        {
            return new PAUserRepository();
        }
    }
}
