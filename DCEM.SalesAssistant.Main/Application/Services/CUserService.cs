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
using Newtonsoft.Json.Linq;
namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class CUserService : ICUserService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;
        public CUserService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 10;
        }
        #endregion

        #region 获取 用户
        public async Task<QueryResult<JObject>> QueryUserList(int pageindex, string search)
        {
            #region 组装filter
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_phone' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_cardid' operator='like' value='%{search}%' />";
                filter += $"</filter>";
            }

            if (!string.IsNullOrEmpty(filter))
            {
                filter = "<filter type='and'>" + filter;
                filter = filter + "</filter>";
            }
            #endregion

            #region 组装FetchXml
            var xDoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_user'>
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            }); ;
            #endregion

            #region 获取记录结果集
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_user",
                FetchXml = xDoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装数据返回
            var result = new QueryResult<JObject>();
            foreach (var entity in resultsList.Value.Results)
            {
                result.Results.Add(entity.Attributes);
            }
            return result;
            #endregion
        }
        #endregion

        #region 获取厅店
        public async Task<QueryResult<JObject>> QueryDealerList(int pageindex, string search)
        {
            #region 组装filter
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_phone' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_code' operator='like' value='%{search}%' />";
                filter += $"</filter>";
            }

            if (!string.IsNullOrEmpty(filter))
            {
                filter = "<filter type='and'>" + filter;
                filter = filter + "</filter>";
            }
            #endregion

            #region 组装FetchXml
            var xDoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_dealer'>
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            }); ;
            #endregion

            #region 获取记录结果集
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_dealer",
                FetchXml = xDoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装数据返回
            var result = new QueryResult<JObject>();
            foreach (var entity in resultsList.Value.Results)
            {
                result.Results.Add(entity.Attributes);
            }
            return result;
            #endregion
        }
        #endregion



    }
}
