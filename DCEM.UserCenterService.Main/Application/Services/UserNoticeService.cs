
using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using System;
using System.Xml.Linq;
using DCEM.UserCenterService.Main.Common;
using MSLibrary;
using DCEM.Main;
using DCEM.Main.Entities;
using MSLibrary.Xrm.MessageHandle;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Collections.Generic;

namespace DCEM.UserCenterService.Main.Application.Services
{
    /// <summary>
    /// C端用户通知信息
    /// </summary>
    public class UserNoticeService : IUserNoticeService
    {

        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;

        public IUserNoticeRepository _repository;
        public UserNoticeService(ICrmService crmService, IUserNoticeRepository repository)
        {
            _crmService = crmService;
            _repository = repository;

            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        public async Task<QueryResult<CrmEntity>> GetUserNotices(UserNoticeRequest request)
        {
            try
            {
                var fetchString = _repository.GetUserNotices(request);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_user_msg",
                    FetchXml = fetchXdoc,
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
