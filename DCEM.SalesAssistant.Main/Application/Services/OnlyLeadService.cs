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

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class OnlyLeadService : IOnlyLeadService
    {
        private CrmService _crmService;
        private IOnlyLeadRepository _onlyLeadRepository;

        public OnlyLeadService(CrmService crmService, IOnlyLeadRepository onlyLeadRepository)
        {
            _crmService = crmService;
            _onlyLeadRepository = onlyLeadRepository;
        }

        /// <summary>
        /// 唯一线索列表查询
        /// </summary>
        /// <param name="onlyLeadRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(OnlyLeadRequest onlyLeadRequest)
        {
            try
            {
                var fetchString = _onlyLeadRepository.QueryList(onlyLeadRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_onlylead",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = onlyLeadRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 唯一线索详情查询
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetOnlyLeadDetail(string entityid)
        {
            try
            {
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });

                //var fetchString = _onlyLeadRepository.GetOnlyLeadDetail(entityid);
                CrmEntity entity = null;
                entity = await _crmService.Retrieve("mcs_onlylead", Guid.Parse(entityid), "", null, dicHead);
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
