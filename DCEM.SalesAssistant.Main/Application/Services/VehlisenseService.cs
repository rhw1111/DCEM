using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class VehlisenseService : IVehlisenseService
    {
        private const string partnertype = "2";
        private ICrmService _crmService;
        private IVehlisenseRepository _Repository;
        public VehlisenseService(ICrmService crmService, IVehlisenseRepository repository)
        {
            _crmService = crmService;
            _Repository = repository;
        }
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> getlist(VehlisenseListRequest request)
        {
            try
            {
                var fetchXdoc = _Repository.GetListFetchXml(request);

                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehlisense",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageSize;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 明细获取
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<VehlisenseDetailRepository> getdetail(Guid id)
        {
            try
            {
                VehlisenseDetailRepository repository = new VehlisenseDetailRepository();
                #region 上牌明细
                var fetchXdoc = _Repository.GetDetaillFetchXml(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehlisense",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.Detail = detailResult.Value.Results[0];
                #endregion
                #region  附件
                fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "2");
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_attachment",
                    FetchXml = fetchXdoc.Result
                };
                fetchResponse = await _crmService.Execute(fetchRequest);
                detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.AttmDetail = detailResult.Value.Results;
                #endregion 

                return repository;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
