﻿using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using System.Threading.Tasks;
using System.Xml.Linq;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class AccountService : IAccountService
    {
        private const string EntityName = "mcs_account";
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
        public async Task<QueryResult<CrmEntity>> QueryList(AccountRequest AccountRequest)
        {
            try
            {
                var fetchString = _AccountRepository.QueryList(AccountRequest);

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
                queryResult.CurrentPage = AccountRequest.PageIndex;
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
                CrmEntity entity = null;
                entity = await _crmService.Retrieve(EntityName, entityId, "");
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
               
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return guid;
        }
    }
}
