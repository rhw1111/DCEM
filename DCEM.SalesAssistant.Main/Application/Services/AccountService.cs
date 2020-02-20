using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using System.Threading.Tasks;
using System.Xml.Linq;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using DCEM.SalesAssistant.Main.Common;
using DCEM.Main;
using DCEM.Main.Entities;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class AccountService : IAccountService
    {
        private const string EntityName = "account";
        private CrmService _crmService;
        private IAccountRepository _AccountRepository;

        public AccountService(CrmService crmService, IAccountRepository accountRepository)
        {
            _crmService = crmService;
            _AccountRepository = accountRepository;
        }

        /// <summary>
        /// 销售机会列表查询
        /// </summary>
        /// <param name="AccountRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(AccountSearhRequest accountRequest)
        {
            try
            {
                var fetchString = _AccountRepository.QueryList(accountRequest);

                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = EntityName,
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo != null ? userInfo.systemuserid : null
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = accountRequest.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<CrmEntity> QueryById(Guid entityId)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, EntityName, entityId,Guid.Empty);
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        /// <summary>
        /// 创建或编辑实体
        /// </summary>
        /// <param name="crmEntity"></param>
        /// <returns></returns>
        public async Task<Guid> AddOrEditEntity(AccountRequest request)
        {
            Guid guid = Guid.Empty;
            try
            {
                guid = string.IsNullOrEmpty(request.Id) ? Guid.NewGuid() : Guid.Parse(request.Id);
                CrmExecuteEntity createorUpdateEntity = new CrmExecuteEntity(EntityName, guid);

                if (!string.IsNullOrEmpty(request.name))
                {
                    createorUpdateEntity.Attributes.Add("name", request.name);
                }
                if (!string.IsNullOrEmpty(request.mcs_onlyleadid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_onlyleadid", new CrmEntityReference("mcs_onlylead", Guid.Parse(request.mcs_onlyleadid)));
                }
                if (!string.IsNullOrEmpty(request.mcs_vehcolorid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_vehcolorid", new CrmEntityReference("mcs_vehiclecolor", Guid.Parse(request.mcs_vehcolorid)));
                }
                if (!string.IsNullOrEmpty(request.mcs_vehtypeid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_vehtypeid", new CrmEntityReference("mcs_vehicletype", Guid.Parse(request.mcs_vehtypeid)));
                }

                
                if (!string.IsNullOrEmpty(request.mcs_carattention))
                {
                    createorUpdateEntity.Attributes.Add("mcs_carattention", request.mcs_carattention);
                }
                if (!string.IsNullOrEmpty(request.mcs_competingtype))
                {
                    createorUpdateEntity.Attributes.Add("mcs_competingtype", request.mcs_competingtype);
                }
                if (!string.IsNullOrEmpty(request.mcs_introducecarowner))
                {
                    createorUpdateEntity.Attributes.Add("mcs_introducecarowner", request.mcs_introducecarowner);
                }
                if (!string.IsNullOrEmpty(request.mcs_mobilephone))
                {
                    createorUpdateEntity.Attributes.Add("mcs_mobilephone", request.mcs_mobilephone);
                }
                if (!string.IsNullOrEmpty(request.mcs_estimatedtransactiondate))
                {
                    createorUpdateEntity.Attributes.Add("mcs_estimatedtransactiondate", DateTime.Parse(request.mcs_estimatedtransactiondate));
                }
                if (request.mcs_carereason.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_carereason", request.mcs_carereason.Value);
                }
                if (request.mcs_gender.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_gender", request.mcs_gender.Value);
                }
                if (request.mcs_generation.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_generation", request.mcs_generation.Value);
                }
                if (request.mcs_idtype.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_idtype", request.mcs_idtype.Value);
                }
                if (request.mcs_level.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_level", request.mcs_level.Value);
                }
                if (request.mcs_purchasepurpose.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_purchasepurpose", request.mcs_purchasepurpose.Value);
                }
                if (request.mcs_purchaseway.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_purchaseway", request.mcs_purchaseway.Value);
                }
                if (request.mcs_vehicleusers.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_vehicleusers", request.mcs_vehicleusers.Value);
                }
                if (request.mcs_familymembernum.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_familymembernum", request.mcs_familymembernum.Value);
                }
                if (!string.IsNullOrEmpty(request.description))
                {
                    createorUpdateEntity.Attributes.Add("description", request.description); 
                }
                if (request.mcs_customerstatus.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_customerstatus", request.mcs_customerstatus.Value);
                }

                //if (request.ownerid.HasValue)
                //{
                //    createorUpdateEntity.Attributes.Add("ownerid", new CrmEntityReference("systemuser", request.ownerid.Value));
                //}
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null && userInfo.systemuserid.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("ownerid", new CrmEntityReference("systemuser", userInfo.systemuserid.Value));
                }

                if (!string.IsNullOrEmpty(request.Id))
                {
                    await _crmService.Update(createorUpdateEntity);
                }
                else
                {
                    guid = await _crmService.Create(createorUpdateEntity);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return guid;
        }
    }
}
