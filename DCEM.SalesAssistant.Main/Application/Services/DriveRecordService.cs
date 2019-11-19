using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
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
    public class DriveRecordService : IDriveRecordService
    {
        private CrmService _crmService;
        private IDriveRecordRepository _driveRecordRepository;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;

        public DriveRecordService(CrmService crmService, IDriveRecordRepository driveRecordRepository)
        {
            _crmService = crmService;
            _driveRecordRepository = driveRecordRepository;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<DriveRecordListResponse<CrmEntity>> QueryList(DriveRecordRequest request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
                {
                   // request.DealerId = Guid.Parse(userInfo.mcs_dealerid);
                }
                #region 查询结果集
                var fetchString = _driveRecordRepository.QueryList(request);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchXdoc,
                    ProxyUserId= userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询总条数
                var status = 0;
                var fetchAllTotalCountString = _driveRecordRepository.QueryListByCount(request, status);
                var fetchAllTotalXdoc = XDocument.Parse(fetchAllTotalCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchAllTotalXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var allTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 已提交
                status = 10;
                var fetchSubmittedCountString = _driveRecordRepository.QueryListByCount(request, status);
                var fetchSubmittedXdoc = XDocument.Parse(fetchSubmittedCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchSubmittedXdoc,
                     ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var SubmittedCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 已排程
                status = 12;
                var fetchScheduledCountString = _driveRecordRepository.QueryListByCount(request, status);
                var fetchScheduledXdoc = XDocument.Parse(fetchScheduledCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchScheduledXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var ScheduledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 已取消
                status = 13;
                var fetchCancelledCountString = _driveRecordRepository.QueryListByCount(request, status);
                var fetchCancelledXdoc = XDocument.Parse(fetchCancelledCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchCancelledXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var CancelledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                //#region 开始试驾
                //status = 14;
                //var fetchCancelledCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchCancelledXdoc = XDocument.Parse(fetchCancelledCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchCancelledXdoc
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var CancelledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                var queryResult = new DriveRecordListResponse<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageIndex;
                queryResult.ALLTotalCount = (int)allTotalCountResults.Value.Results[0].Attributes["count"];
                queryResult.ScheduledCount = (int)SubmittedCountResults.Value.Results[0].Attributes["count"];
                queryResult.CancelledCount = (int)CancelledCountResults.Value.Results[0].Attributes["count"];
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
