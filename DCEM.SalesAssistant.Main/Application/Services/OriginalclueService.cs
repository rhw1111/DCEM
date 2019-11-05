using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class OriginalclueService : IOriginalclueService
    {
        private ICrmService _crmService;
        private IOriginalclueRepository _originalclueRepository;
        public OriginalclueService(ICrmService crmService, IOriginalclueRepository originalclueRepository)
        {
            _crmService = crmService;
            _originalclueRepository = originalclueRepository;
        }
        /// <summary>
        /// 获取原始线索列表数据
        /// </summary>
        public async Task<OriginalclueListResponse> GetOriginalclueList(OriginalclueListRequest originalclueListRequest)
        {
            var response = new OriginalclueListResponse() { };
            var fetchXdoc = await _originalclueRepository.GetGetQueryListFetchXml(originalclueListRequest);
            var crmRequestHelper = new CrmRequestHelper();
            var entities = await crmRequestHelper.ExecuteAsync(_crmService, "lead", fetchXdoc, Guid.Parse(originalclueListRequest.UserId));
            response.originalclues = entities.Results;
            response.ALLTotalCount = entities.Count;
            response.PageSize = originalclueListRequest.PageSize;
            response.CurrentPage = originalclueListRequest.PageIndex;
            return response;
        }
        #region 私有方法
   
        #endregion
    }
}
