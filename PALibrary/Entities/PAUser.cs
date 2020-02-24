using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.WebServiceClient;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities
{
    public class PAUser : PAEntityBase<IPAUserIMP>
    {
        public override IFactory<IPAUserIMP> GetIMPFactory()
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public bool HasEntityPrivilege(PAUser user, string EntityName, PrivilegeTypes privilegeType, PrivilegeDepths privilegeDepth)
        {
            throw new NotImplementedException();
        }

        public bool HasRole(PAUser user, Guid roleId)
        {
            throw new NotImplementedException();
        }

        public void RemoveRole(PAUser user, EntityReferenceCollection roleIdList)
        {
            throw new NotImplementedException();
        }

        public void SetBusinessUnit(PAUser user, Guid buId)
        {
            throw new NotImplementedException();
        }

        public void ShareEntityRecordPrivilegeToUser(PAUser user, EntityReference entityId, bool isRead, bool isWrite, bool isDelete, bool isShare, bool isAssign, bool isAppend, bool isAppendTo)
        {
            throw new NotImplementedException();
        }
    }
}
