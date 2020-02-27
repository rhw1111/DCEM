using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.WebServiceClient;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using PALibrary.PAEntityExtensions;
using PALibrary.LanguageTranslate;
using System.IO;

namespace PALibrary.Entities
{
    public class PAUser : PAEntityBase<IPAUserIMP>
    {
        private static IFactory<IPAUserIMP> _paUserIMPFactory = new PAUserIMPFactory();

        public static IFactory<IPAUserIMP> PAUserIMPFactory
        {
            set
            {
                _paUserIMPFactory = value;
            }
        }
        public override IFactory<IPAUserIMP> GetIMPFactory()
        {
            return _paUserIMPFactory;
        }

        public PAUserSetting GetSetting()
        {
           
            return _imp.GetSetting(this);
        }
    }

    public interface IPAUserIMP
    {
        /// <summary>
        /// 获取用户设置
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        PAUserSetting GetSetting(PAUser user);
        /// <summary>
        /// 加角色
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleIdList"></param>
        void AddRole(PAUser user, EntityReferenceCollection roleIdList);
        /// <summary>
        /// 移除角色
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleIdList"></param>
        void RemoveRole(PAUser user, EntityReferenceCollection roleIdList);
        /// <summary>
        /// 检查是否有指定实体记录的指定权限
        /// </summary>
        /// <param name="user"></param>
        /// <param name="entityId"></param>
        /// <param name="privilegeType"></param>
        /// <returns></returns>
        bool HasEntityPrivilege(PAUser user, EntityReference entityId, PrivilegeTypes privilegeType);
        /// <summary>
        /// 检查是否有指定实体名称的指定权限
        /// </summary>
        /// <param name="user"></param>
        /// <param name="EntityName"></param>
        /// <param name="privilegeType"></param>
        /// <param name="privilegeDepth"></param>
        /// <returns></returns>
        bool HasEntityPrivilege(PAUser user, string EntityName, PrivilegeTypes privilegeType, PrivilegeDepths privilegeDepth);
        /// <summary>
        /// 检查是否拥有指定角色ID角色
        /// </summary>
        /// <param name="user"></param>
        /// <param name="roleId"></param>
        /// <returns></returns>
        bool HasRole(PAUser user, Guid roleId);
        /// <summary>
        /// 为用户共享指定的实体记录
        /// </summary>
        /// <param name="user"></param>
        /// <param name="entityId"></param>
        /// <param name="isRead"></param>
        /// <param name="isWrite"></param>
        /// <param name="isDelete"></param>
        /// <param name="isShare"></param>
        /// <param name="isAssign"></param>
        /// <param name="isAppend"></param>
        /// <param name="isAppendTo"></param>
        void ShareEntityRecordPrivilegeToUser(PAUser user,EntityReference entityId, bool isRead, bool isWrite, bool isDelete, bool isShare, bool isAssign, bool isAppend, bool isAppendTo);

        /// <summary>
        /// 设置用户的部门
        /// </summary>
        /// <param name="userId">用户编号</param>
        /// <param name="buId">部门编号</param>
        void SetBusinessUnit(PAUser user, Guid buId);


    }

    public class PAUserIMP : IPAUserIMP
    {
        private IPAMetadataServiceCacheProxy _paMetadataServiceCacheProxy;
        private IConfigurationService _configurationService;

        public PAUserIMP(IPAMetadataServiceCacheProxy paMetadataServiceCacheProxy, IConfigurationService configurationService)
        {
            _paMetadataServiceCacheProxy = paMetadataServiceCacheProxy;
            _configurationService = configurationService;
        }
        public void AddRole(PAUser user, EntityReferenceCollection roleIdList)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            Relationship roleRelationShip = new Relationship("systemuserroles_association");
            if (roleIdList.Count > 0)
            {
                orgService.Associate("systemuser", user.EntityRecord.Id, roleRelationShip, roleIdList);
            }
        }

        public PAUserSetting GetSetting(PAUser user)
        {
            var defaultEntity = new Entity("usersettings");
            defaultEntity["uilanguageid"] = 2052;
            defaultEntity["timezonebias"] = -480;

           

            IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            if (orgService == null)
            {
                return defaultEntity.ConvertToDomainEntity<PAUserSetting>();
            }


            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""usersettings"">
                                    <attribute name=""uilanguageid"" />
                                    <attribute name=""timezonebias"" />
                                    <attribute name=""timezonecode"" />
                                    <attribute name=""paginglimit"" />
                                    <attribute name=""numberseparator"" />
                                    <attribute name=""decimalsymbol"" />
                                    <attribute name=""numbergroupformat"" />
                                    <attribute name=""negativeformatcode"" />                  
                                    <attribute name=""dateseparator"" />
                                    <attribute name=""timeseparator"" />
                                    <attribute name=""timeformatstring"" />
                                    <attribute name=""dateformatstring"" />
                                    <filter type=""and"">
                                        <condition attribute=""systemuserid"" operator=""eq"" uitype=""systemuser"" value=""{0}"" />
                                    </filter>
                                </entity>
                            </fetch>", user.EntityRecord.Id.ToString());
            //Logger.WriteLog("orgService is null: " + (orgService==null).ToString(), System.Diagnostics.EventLogEntryType.Warning);
            var entityCollection = orgService.RetrieveMultiple(new FetchExpression(strFetch));
            if (entityCollection.Entities.Count > 0)
            {
                return entityCollection.Entities[0].ConvertToDomainEntity<PAUserSetting>();

            }
            else
            {
                return defaultEntity.ConvertToDomainEntity<PAUserSetting>();
            }

        }

        public bool HasEntityPrivilege(PAUser user, EntityReference entityId, PrivilegeTypes privilegeType)
        {
            var metaDateType = _paMetadataServiceCacheProxy.GetEntityMetadata(entityId.LogicalName);

            if (metaDateType.OwnershipType.HasValue)
            {
                switch (metaDateType.OwnershipType.Value)
                {
                    case Microsoft.Xrm.Sdk.Metadata.OwnershipTypes.UserOwned:

                        RetrievePrincipalAccessRequest request = new RetrievePrincipalAccessRequest();
                        request.Principal = new EntityReference("systemuser", user.EntityRecord.Id);
                        request.Target = entityId;
                        IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
                        var response = (RetrievePrincipalAccessResponse)orgService.Execute(request);


                        if (response.AccessRights.HasFlag((AccessRights)(int)privilegeType))
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    case Microsoft.Xrm.Sdk.Metadata.OwnershipTypes.OrganizationOwned:
                        var result = HasEntityPrivilege(user, entityId.LogicalName, privilegeType, PrivilegeDepths.Basic);
                        return result;
                    default:
                        return false;
                }
            }
            else
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.EntityNotCheckPrivilege,
                    DefaultFormatting = "实体{0}无法判断权限，它的OwnershipType为空",
                    ReplaceParameters = new List<object>() { entityId.LogicalName }
                };

                throw new UtilityException((int)Errors.EntityNotCheckPrivilege, fragment);
            }
        }

        public bool HasEntityPrivilege(PAUser user, string EntityName, PrivilegeTypes privilegeType, PrivilegeDepths privilegeDepth)
        {
            if (EntityName.ToLower().Equals("systemuser"))
            {
                EntityName = "user";
            }

            PrivilegeDepths enumMark = PrivilegeDepths.None;
            StringBuilder strPrivilegeName = new StringBuilder("prv");
            strPrivilegeName.Append(privilegeType.ToString());
            strPrivilegeName.Append(EntityName);

            string privilegeName = strPrivilegeName.ToString();

            IOrganizationService orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService.ToString());

            string strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml - platform"" mapping=""logical"" distinct=""false"" aggregate=""true"">
                                <entity name = ""privilege"" >
                                        <link-entity name=""roleprivileges"" intersect=""true"" visible=""false"" to=""privilegeid"" from=""privilegeid"" alias = ""aa"">
                                            <attribute name=""privilegedepthmask"" alias=""maxmask"" aggregate=""max""/>  

                                            <link-entity name = ""role"" to = ""roleid"" from = ""parentrootroleid"" alias = ""ad"" >

                                                <link-entity name = ""systemuserroles"" to = ""roleid"" from = ""roleid"" alias = ""ab"" >
                                                    <link-entity name = ""systemuser"" to = ""systemuserid"" from = ""systemuserid"" alias = ""ac"" >
                                                        <filter type = ""and"" >     
                                                            <condition attribute=""systemuserid"" value=""{1}"" operator=""eq"" uitype=""systemuser"" />
                                                        </filter> 
                                                    </link-entity>  
                                                </link-entity>      
           
                                            </link-entity>   
  
                                        </link-entity>

                                    <filter type = ""and"" >     
                                        <condition attribute = ""name"" value = ""{2}"" operator= ""eq"" />
                                    </filter> 
                                </entity>
                               </fetch>", ((int)privilegeDepth).ToString(), user.EntityRecord.Id.ToString(), strPrivilegeName);

            var entityCollection = orgService.RetrieveMultiple(new FetchExpression(strFetch));

            if (entityCollection.Entities.Count > 0)
            {
                var mask = (AliasedValue)entityCollection.Entities[0].Attributes["maxmask"];

                if (mask.Value == null) { return false; }
                enumMark = (PrivilegeDepths)mask.Value;
            }

            if (enumMark != PrivilegeDepths.None && (int)enumMark >= (int)privilegeDepth)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool HasRole(PAUser user, Guid roleId)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            var strFetch = string.Format(@"<fetch distinct=""false"" mapping=""logical"" output-format=""xml - platform"" version=""1.0"">
                                <entity name = ""role"">
                                    <attribute name = ""name"" />   
                                    <attribute name = ""roleid"" />
                                    <filter type = ""and"" >
                                        <condition attribute=""roleid"" operator=""eq"" uitype=""role"" value=""{0}"" />              
                                    </filter >
                                    <link-entity name = ""systemuserroles"" intersect = ""true"" visible = ""false"" to = ""roleid"" from = ""roleid"" >
                                        <link-entity name = ""systemuser"" to = ""systemuserid"" from = ""systemuserid"" alias = ""aa"" >
                                            <filter type = ""and"" >                                         
                                                <condition attribute = ""systemuserid"" value = ""{1}"" operator= ""eq"" uitype = ""systemuser"" />                                                  
                                            </filter >                                                 
                                        </link-entity>                                                 
                                    </link-entity>                                                  
                                   </entity>                                                  
                                </fetch> ", roleId.ToString(), user.EntityRecord.Id.ToString());

            var collection = orgService.RetrieveMultiple(new FetchExpression(strFetch));
            if (collection.Entities.Count == 0)
            {
                return false;
            }
            return true;
        }

        public void RemoveRole(PAUser user, EntityReferenceCollection roleIdList)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            Relationship roleRelationShip = new Relationship("systemuserroles_association");
            orgService.Disassociate("systemuser", user.EntityRecord.Id, roleRelationShip, roleIdList);
        }

        public void SetBusinessUnit(PAUser user, Guid buId)
        {
            var currentUser = ContextContainer.GetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser);
            Entity updateUser = new Entity("systemuser");
            updateUser.Id = user.EntityRecord.Id;
            updateUser["businessunitid"] = new EntityReference("businessunit", buId);

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            try
            {
                orgService.Update(updateUser);
            }
            catch
            {
                SetBusinessSystemUserRequest request = new SetBusinessSystemUserRequest();
                request.UserId = user.EntityRecord.Id;
                request.BusinessId = buId;

                //var administrator = _configurationService.GetAdministratorID();
                request.ReassignPrincipal = currentUser.GetUserID();
                orgService.Execute(request);
            }
        }

        public void ShareEntityRecordPrivilegeToUser(PAUser user, EntityReference entityId, bool isRead, bool isWrite, bool isDelete, bool isShare, bool isAssign, bool isAppend, bool isAppendTo)
        {

            if (isRead)
            {
                var grantAccessRequest = new GrantAccessRequest()
                {
                    PrincipalAccess = new PrincipalAccess
                    {
                        AccessMask = AccessRights.ReadAccess,
                        Principal = new EntityReference("systemuser", user.EntityRecord.Id)
                    },
                    Target = entityId
                };


                if (isWrite)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.WriteAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }

                if (isDelete)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.DeleteAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }


                if (isShare)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.ShareAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }

                if (isAssign)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.AssignAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }

                if (isAppend)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.AppendAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }

                if (isAppendTo)
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.AppendToAccess;
                }
                else
                {
                    grantAccessRequest.PrincipalAccess.AccessMask = grantAccessRequest.PrincipalAccess.AccessMask | AccessRights.None;
                }



                var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

                orgService.Execute(grantAccessRequest);
            }
        }
    }


    public class PAUserIMPFactory : IFactory<PAUserIMP>
    {
        public PAUserIMP Create()
        {
            var paMetadataServiceCacheProxy = PAMetadataServiceCacheProxyFactory.Get();
            var configurationService= ConfigurationServiceFactory.Get();
            return new PAUserIMP(paMetadataServiceCacheProxy, configurationService);
        }
    }
}
