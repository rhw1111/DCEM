using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk.Metadata;
using PALibrary.Cache;

namespace PALibrary.Entities
{
    public class PAMetadataServiceCacheProxy : IPAMetadataServiceCacheProxy
    {

        public static string VersionName
        {
            get; set;
        } = CacheVersionNames.CommonCacheVersion;

        private KVCacheVisitor _versionVisitor = new KVCacheVisitor()
        {
            Name = "_PAMetadataService",
            CacheType = KVCacheTypes.LocalVersion,
            CacheConfiguration = string.Format(@"
                        {{
                            ""MaxLength"":2000,
                            ""VersionCallTimeout"":120,
                            ""VersionNameMappings"":{{}},
                            ""DefaultVersionName"":""{0}""
                        }}", VersionName)
        };


        private IPAMetadataService _paMetadataService;

        public PAMetadataServiceCacheProxy(IPAMetadataService paMetadataService)
        {
            _paMetadataService = paMetadataService;
        }

        public AttributeMetadata[] GetAttributes(string entityName)
        {
            var entityMetadata=GetEntityMetadata(entityName);
            return entityMetadata.Attributes;
        }

        public AttributeMetadata[] GetAttributes(int typeCode)
        {
            var entityMetadata = GetEntityMetadata(typeCode);
            return entityMetadata.Attributes;
        }

        public EntityMetadata GetEntityMetadata(string entityName)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            return _versionVisitor.GetSync((k) =>
            {
                return _paMetadataService.GetEntityMetadata(entityName);
            },$"{orgId.ToString()}_EntityName_{entityName}");
        }

        public EntityMetadata GetEntityMetadata(int typeCode)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            return _versionVisitor.GetSync((k) =>
            {
                return _paMetadataService.GetEntityMetadata(typeCode);
            }, $"{orgId.ToString()}_TypeCode_{typeCode.ToString()}");
        }

        public OptionMetadata[] GetOptionSet(string optionSetName)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            return _versionVisitor.GetSync((k) =>
            {
                return _paMetadataService.GetOptionSet(optionSetName);
            }, $"{orgId.ToString()}_GOption_{optionSetName}");
        }

        public OptionMetadata[] GetOptionSet(string entityName, string fieldName)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            return _versionVisitor.GetSync((k) =>
            {
                return _paMetadataService.GetOptionSet(entityName, fieldName);
            }, $"{orgId.ToString()}_SOption_{entityName}_{fieldName}");
        }

        public bool HasAttribute(string entityName, string attributeName)
        {
            var entityMetadata = GetEntityMetadata(entityName);
            var existAttribute = (from item in entityMetadata.Attributes
                                  where item.LogicalName == attributeName
                                  select item).FirstOrDefault();
            return !(existAttribute == null);
        }

        public bool HasAttribute(int typeCode, string attributeName)
        {
            var entityMetadata = GetEntityMetadata(typeCode);
            var existAttribute = (from item in entityMetadata.Attributes
                                  where item.LogicalName == attributeName
                                  select item).FirstOrDefault();
            return !(existAttribute == null);
        }



    }


    public class PAMetadataServiceCacheProxyFactory : SingletonFactorySelf<IPAMetadataServiceCacheProxy, PAMetadataServiceCacheProxyFactory>
    {
        protected override IPAMetadataServiceCacheProxy RealCreate()
        {
            var paMetadataService = PAMetadataServiceFactory.Get();
            PAMetadataServiceCacheProxy paMetadataServiceCacheProxy = new PAMetadataServiceCacheProxy(paMetadataService);
            return paMetadataServiceCacheProxy;
        }
    }
}
