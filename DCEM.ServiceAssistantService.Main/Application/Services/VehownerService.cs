using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;
using MSLibrary;
using System;
using DCEM.ServiceAssistantService.Main.DTOModel;
using System.Collections.Generic;
using MSLibrary.Xrm.Message.Retrieve;
using MSLibrary.Xrm.Message.RetrieveSignleAttribute;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public class VehownerService : IVehownerService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        public VehownerService(ICrmService crmService)
        {
            _crmService = crmService;
        }
        #endregion

        #region 获取车辆档案列表

        #region filter组装
        public async Task<string> GetQueryListFilter(string search)
        {
            return await Task<string>.Run(() =>
            {
                var filter = string.Empty;

                if (!string.IsNullOrEmpty(search))
                {
                    filter += $"<filter type='or'>";
                    filter += $"<condition attribute='mcs_vehplate' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_fullname' operator='like' value='%{search}%' />";
                    filter += $"</filter>";
                }

                if (!string.IsNullOrEmpty(filter))
                {
                    filter = "<filter type='and'>" + filter;
                    filter = filter + "</filter>";
                }
                return filter;
            });
        }
        #endregion

        #region FetchXml组装
        public async Task<XDocument> GetGetQueryListFetchXml(int pageindex, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{500}' page='{pageindex}' >
              <entity name='mcs_vehowner'>
                  <attribute name='mcs_name' />
                  <attribute name='mcs_vehtype' />
                  <attribute name='mcs_fullname' />
                  <attribute name='mcs_gender' />
                  <attribute name='mcs_mobilephone' />
                  <attribute name='mcs_vehplate' />
                  <attribute name='mcs_enginennumber' />
                  <attribute name='mcs_netmileage' />
                  <attribute name='mcs_motormodel' />
                  <attribute name='mcs_batterymodel' />
                  <attribute name='mcs_motorserialnumber' />
                  <order attribute='mcs_fullname' descending='true' />
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion

        #region 查询记录集
        public async Task<QueryResult<CrmEntity>> QueryList(int pageindex, string search)
        {
            #region 组装head
            var dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });
            #endregion

            #region 获取记录结果集
            var filter = await GetQueryListFilter(search);
            var fetchXdoc = await GetGetQueryListFetchXml(pageindex, filter);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehowner",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装返回结果集
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = resultsList.Value.Results;
            queryResult.CurrentPage = pageindex;
            queryResult.TotalCount = resultsList.Value.Results.Count;
            return queryResult;
            #endregion
        }
        #endregion

        #endregion

    }
}
