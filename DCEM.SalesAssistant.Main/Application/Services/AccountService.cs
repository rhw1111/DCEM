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

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = EntityName,
                    FetchXml = fetchXdoc
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

                if (request.mcs_customerstatus.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_customerstatus", request.mcs_customerstatus.Value);
                }

                if (request.ownerid.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("ownerid", new CrmEntityReference("systemuser", request.ownerid.Value));
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
