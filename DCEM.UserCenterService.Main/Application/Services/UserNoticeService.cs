
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

                //更新消息为已读
                //if (queryResult.Results!=null && queryResult.Results.Count>0)
                //{
                //    foreach (var item in queryResult.Results)
                //    {
                //        if (int.Parse(item.Attributes["mcs_readstatus"].ToString()) ==0)
                //        {
                //            await UpdateUserNoticeReadStatus(new UserNoticeRequest() { 
                //                Id= item.Id.ToString(),
                //                mcs_readstatus=1
                //            });;
                //        }
                //    }
                //}
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> UpdateUserNoticeReadStatus(UserNoticeRequest request)
        {
            bool result = false;
            try
            {
                Guid guid = Guid.Empty;
                if (!string.IsNullOrEmpty(request.Id))
                {
                    guid = Guid.Parse(request.Id);
                }
                CrmExecuteEntity updateEntity = new CrmExecuteEntity("mcs_user_msg", guid);
                updateEntity.Attributes.Add("mcs_readstatus", request.mcs_readstatus);
                await _crmService.Update(updateEntity);
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
            }
            return result;
        }

        public async Task<int> GetUserNoticesNoReadCount(string userId)
        {
            int noreadTotalCount = 0;
            #region 查询总记录数
           
            var fetchXdoc = await GetGetQueryListCountFetchXml(userId);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_user_msg",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var result = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            if (result!=null)
            {
                noreadTotalCount = (int)result.Value.Results[0].Attributes["count"];
            }
            #endregion

            return noreadTotalCount;
        }

        #region MyRegion
        public async Task<XDocument> GetGetQueryListCountFetchXml(string userguid)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'  aggregate='true'>
                <entity name='mcs_user_msg'>
                    <attribute name='mcs_user_msgid' aggregate='countcolumn' alias='count'/>
                     <link-entity name='mcs_user' from='mcs_userid' to='mcs_user' link-type='inner' alias='ab' >
                        <filter type='and' >
                            <condition attribute='mcs_userid' operator='eq' value='{userguid}' />
                        </filter>
                    </link-entity>
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      <condition attribute='mcs_readstatus' operator='eq' value='0' />
                    </filter>
                </entity>
            </fetch>";

                return XDocument.Parse(fetchXml);
            });
        }
        #endregion
    }
}
