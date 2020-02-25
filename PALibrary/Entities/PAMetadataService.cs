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
            EntityMetadata entityMetadatas;

            IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            RetrieveEntityRequest request = new RetrieveEntityRequest();
            request.EntityFilters = EntityFilters.Entity;
            request.LogicalName = entityName;
            request.RetrieveAsIfPublished = true;
            var response = (RetrieveEntityResponse)orgService.Execute(request);


            entityMetadatas = response.EntityMetadata;


            return entityMetadatas;
        }

        public EntityMetadata GetEntityMetadata(int typeCode)
        {
            EntityMetadata entityMetadatas;


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


            return entityMetadatas;
        }

        public OptionMetadata[] GetOptionSet(string optionSetName)
        {

            IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            RetrieveOptionSetRequest retrieveOptionSetRequest = new RetrieveOptionSetRequest
            {
                Name = optionSetName
            };
            RetrieveOptionSetResponse retrieveOptionSetResponse = (RetrieveOptionSetResponse)orgService.Execute(retrieveOptionSetRequest);
            OptionSetMetadata optionSetMetadata = (OptionSetMetadata)retrieveOptionSetResponse.OptionSetMetadata;
            OptionMetadata[] optionList = optionSetMetadata.Options.ToArray();

            return optionList;

        }

        public OptionMetadata[] GetOptionSet(string entityName, string fieldName)
        {
            OptionMetadata[] optionMetadatas;
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


    }

    public class PAMetadataServiceFactory : SingletonFactorySelf<IPAMetadataService, PAMetadataServiceFactory>
    {
        protected override IPAMetadataService RealCreate()
        {
            return new PAMetadataService();
        }

    }
}
