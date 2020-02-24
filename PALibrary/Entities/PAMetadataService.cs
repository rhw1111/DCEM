using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using PALibrary.Cache;

namespace PALibrary.Entities
{
    public class PAMetadataService : IPAMetadataService
    {

        private static Dictionary<string, EntityMetadataItem> _dicEntityMetadatas = new Dictionary<string, EntityMetadataItem>();
        private static Dictionary<string, Dictionary<string, OptionMetadata[]>> _dicOptionMetadatas = new Dictionary<string, Dictionary<string, OptionMetadata[]>>();


        private static object _lockDicEntityMetadatasObj = new object();
        private static object _lockDicOptionMetadatasObj = new object();

        public static VersionCacheController EntityMetadatasCacheController
        {
            get;
        } = new VersionCacheController();

        public static VersionCacheController OptionMetadatasCacheController
        {
            get;
        } = new VersionCacheController();


        private IConfigurationService _configurationService;

        public PAMetadataService(IConfigurationService configurationService)
        {
            _configurationService = configurationService;
        }

        public AttributeMetadata[] GetAttributes(string entityName)
        {
            throw new NotImplementedException();
        }

        public AttributeMetadata[] GetAttributes(int typeCode)
        {
            throw new NotImplementedException();
        }

        public EntityMetadata GetEntityMetadata(string entityName)
        {
            EntityMetadata entityMetadatas;
            EntityMetadatasCacheController.Execute(() =>
            {
                return false;
            },
            () =>
            {
                _dicEntityMetadatas.Clear();
            }
            );
            var dicEntityMetadatas = GetEntityMetadataItem();

            if (!dicEntityMetadatas.EntityByName.TryGetValue(entityName, out entityMetadatas))
            {
                lock (dicEntityMetadatas)
                {
                    if (!dicEntityMetadatas.EntityByName.TryGetValue(entityName, out entityMetadatas))
                    {
                        IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

                        RetrieveEntityRequest request = new RetrieveEntityRequest();
                        request.EntityFilters = EntityFilters.Entity;
                        request.LogicalName = entityName;
                        request.RetrieveAsIfPublished = true;
                        var response = (RetrieveEntityResponse)orgService.Execute(request);

                      

                        entityMetadatas = response.EntityMetadata;

                        dicEntityMetadatas.EntityByName.Add(entityName, entityMetadatas);

                    }
                }
            }

            return entityMetadatas;
        }

        public EntityMetadata GetEntityMetadata(int typeCode)
        {
            EntityMetadata entityMetadatas;

            EntityMetadatasCacheController.Execute(() =>
            {
                return false;
            },
            () =>
{
    _dicEntityMetadatas.Clear();
}
            );

            var dicEntityMetadatas = GetEntityMetadataItem();




            if (!dicEntityMetadatas.EntityByCode.TryGetValue(typeCode, out entityMetadatas))
            {
                lock (dicEntityMetadatas)
                {
                    if (!dicEntityMetadatas.EntityByCode.TryGetValue(typeCode, out entityMetadatas))
                    {
                        IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);


                        MetadataFilterExpression EntityFilter = new MetadataFilterExpression(LogicalOperator.And);
                        EntityFilter.Conditions.Add(new MetadataConditionExpression("ObjectTypeCode", MetadataConditionOperator.Equals, 9800));

                        EntityQueryExpression entityQueryExpression = new EntityQueryExpression();
                        entityQueryExpression.Criteria = EntityFilter;
                        //entityQueryExpression.AttributeQuery=new AttributeQueryExpression()

                        RetrieveMetadataChangesRequest request = new RetrieveMetadataChangesRequest()
                        {
                            Query = entityQueryExpression,
                            //ClientVersionStamp = clientVersionStamp,
                            //DeletedMetadataFilters = deletedMetadataFilter
                        };

                        var response = (RetrieveEntityResponse)orgService.Execute(request);

                        entityMetadatas = response.EntityMetadata;

                        dicEntityMetadatas.EntityByCode.Add(typeCode, entityMetadatas);

                    }
                }
            }

            return entityMetadatas;
        }

        public OptionMetadata[] GetOptionSet(string optionSetName)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            Dictionary<string, OptionMetadata[]> dicOptionMetadatas;
            OptionMetadata[] optionMetadatas;

            OptionMetadatasCacheController.Execute( () =>
            {
                return false;
            },
            () =>
{
    _dicOptionMetadatas.Clear();
}
            );

            if (!_dicOptionMetadatas.TryGetValue(orgId.ToString(), out dicOptionMetadatas))
            {
                lock (_lockDicOptionMetadatasObj)
                {
                    if (!_dicOptionMetadatas.TryGetValue(orgId.ToString(), out dicOptionMetadatas))
                    {

                        var newDict = _dicOptionMetadatas.ToDictionary(p => p.Key, p => p.Value);

                        dicOptionMetadatas = new Dictionary<string, OptionMetadata[]>();
                        newDict.Add(orgId.ToString(), dicOptionMetadatas);
                        _dicOptionMetadatas = newDict;
                    }
                }
            }




            if (!dicOptionMetadatas.TryGetValue(optionSetName, out optionMetadatas))
            {
                lock (dicOptionMetadatas)
                {

                    if (!dicOptionMetadatas.TryGetValue(optionSetName, out optionMetadatas))
                    {
                        IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

                        RetrieveOptionSetRequest retrieveOptionSetRequest = new RetrieveOptionSetRequest
                        {
                            Name = optionSetName
                        };
                        RetrieveOptionSetResponse retrieveOptionSetResponse = (RetrieveOptionSetResponse)orgService.Execute(retrieveOptionSetRequest);
                        OptionSetMetadata optionSetMetadata = (OptionSetMetadata)retrieveOptionSetResponse.OptionSetMetadata;
                        OptionMetadata[] optionList = optionSetMetadata.Options.ToArray();

                        optionMetadatas = optionList;
                        dicOptionMetadatas.Add(optionSetName, optionMetadatas);

                    }
                }
            }

            return optionMetadatas;
        }

        public OptionMetadata[] GetOptionSet(string entityName, string fieldName)
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            Dictionary<string, OptionMetadata[]> dicOptionMetadatas;
            OptionMetadata[] optionMetadatas;

            OptionMetadatasCacheController.Execute(() =>
            {
                return false;
            },
            () =>
            {
                _dicOptionMetadatas.Clear();
            }
            );

            if (!_dicOptionMetadatas.TryGetValue(orgId.ToString(), out dicOptionMetadatas))
            {
                lock (_lockDicOptionMetadatasObj)
                {
                    if (!_dicOptionMetadatas.TryGetValue(orgId.ToString(), out dicOptionMetadatas))
                    {
                        dicOptionMetadatas = new Dictionary<string, OptionMetadata[]>();
                        _dicOptionMetadatas.Add(orgId.ToString(), dicOptionMetadatas);
                    }
                }
            }

            if (!dicOptionMetadatas.TryGetValue(entityName + "_" + fieldName, out optionMetadatas))
            {
                lock (dicOptionMetadatas)
                {
                    if (!dicOptionMetadatas.TryGetValue(entityName + "_" + fieldName, out optionMetadatas))
                    {
                        IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
                        RetrieveAttributeRequest attributeRequest = new RetrieveAttributeRequest
                        {
                            EntityLogicalName = entityName,
                            LogicalName = fieldName,
                            RetrieveAsIfPublished = false
                        };

                        RetrieveAttributeResponse attributeResponse = (RetrieveAttributeResponse)orgService.Execute(attributeRequest);

                        if (attributeResponse.AttributeMetadata.AttributeType == Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.Boolean)
                        {
                            BooleanAttributeMetadata boolenAttributeMetadata = (BooleanAttributeMetadata)attributeResponse.AttributeMetadata;
                            BooleanOptionSetMetadata boolenOptionSetMetadata = boolenAttributeMetadata.OptionSet;

                            OptionMetadata[] options = new OptionMetadata[2];
                            options[0] = boolenOptionSetMetadata.TrueOption;
                            options[1] = boolenOptionSetMetadata.FalseOption;
                            optionMetadatas = options;
                        }
                        else
                        {
                            EnumAttributeMetadata picklistAttributeMetadata = (EnumAttributeMetadata)attributeResponse.AttributeMetadata;
                            OptionSetMetadata optionSetMetadata = picklistAttributeMetadata.OptionSet;
                            OptionMetadata[] optionList = optionSetMetadata.Options.ToArray();
                            optionMetadatas = optionList;
                        }

                        dicOptionMetadatas.Add(entityName + "_" + fieldName, optionMetadatas);
                    }
                }
            }

            return optionMetadatas;
        }

        public bool HasAttribute(string entityName, string attributeName)
        {
            var entityMetadata = GetEntityMetadata(entityName);

            var att = (from item in entityMetadata.Attributes
                       where item.LogicalName == attributeName
                       select item).FirstOrDefault();

            if (att != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool HasAttribute(int typeCode, string attributeName)
        {
            var entityMetadata = GetEntityMetadata(typeCode);

            var att = (from item in entityMetadata.Attributes
                       where item.LogicalName == attributeName
                       select item).FirstOrDefault();

            if (att != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private EntityMetadataItem GetEntityMetadataItem()
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.OrgService);
            EntityMetadataItem dicEntityMetadatas;


            if (!_dicEntityMetadatas.TryGetValue(orgId.ToString(), out dicEntityMetadatas))
            {
                lock (_lockDicEntityMetadatasObj)
                {
                    if (!_dicEntityMetadatas.TryGetValue(orgId.ToString(), out dicEntityMetadatas))
                    {
                        dicEntityMetadatas = new EntityMetadataItem();

                        dicEntityMetadatas.EntityByName = new Dictionary<string, EntityMetadata>();
                        dicEntityMetadatas.EntityByCode = new Dictionary<int, EntityMetadata>();

                        _dicEntityMetadatas.Add(orgId.ToString(), dicEntityMetadatas);
                    }
                }
            }

            return dicEntityMetadatas;
        }


        private class EntityMetadataItem
        {
            public Dictionary<string, EntityMetadata> EntityByName { get; set; }
            public Dictionary<int, EntityMetadata> EntityByCode { get; set; }
        }
    }

    public class PAMetadataServiceFactory : SingletonFactorySelf<IPAMetadataService, PAMetadataServiceFactory>
    {
        protected override IPAMetadataService RealCreate()
        {
            var configurationService=ConfigurationServiceFactory.Get();
            return new PAMetadataService(configurationService);
        }

    }
}
