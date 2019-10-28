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
    public class ServiceproxyService : IServiceproxyService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        public ServiceproxyService(ICrmService crmService)
        {
            _crmService = crmService;
        }
        #endregion

        #region 获取列表

        #region filter组装
        public async Task<string> GetQueryListFilter(int type, string search)
        {
            return await Task<string>.Run(() =>
            {
                var filter = string.Empty;
                if (type == 1)
                {
                    filter += @$"
        <condition attribute='statecode' operator='eq' value='0' />
            <filter type='or'>
                <condition attribute='mcs_currenttype' operator='eq' value='10' />
                <condition attribute='mcs_ifchange' operator='eq' value='1' />
            </filter>
        <condition attribute='mcs_isdelete' operator='ne' value='1' />";
                }
                else if (type == 2)
                {
                    filter += @$"
        <condition attribute='statecode' operator='eq' value='0' />
        <condition attribute='mcs_currenttype' operator='eq' value='20' />
        <condition attribute='mcs_isdelete' operator='ne' value='1' />";
                }

                if (!string.IsNullOrEmpty(search))
                {
                    filter += $"<filter type='or'>";
                    filter += $"<condition attribute='mcs_carplate' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_customername' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
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
              <entity name='mcs_serviceproxy'>
                  <order attribute='createdon' descending='true' />
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion

        #region 组装结果集
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1、问诊单，2、服务委托书</param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(int type, int pageindex, string search)
        {
            #region 组装head
            var dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });
            #endregion

            #region 获取记录结果集
            var filter = await GetQueryListFilter(type, search);
            var fetchXdoc = await GetGetQueryListFetchXml(pageindex, filter);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
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
            return queryResult;
            #endregion

        }
        #endregion
        #endregion

        #region 获取详情
        public async Task<ServiceproxyQueryInfoResponse> QueryInfo(string guid)
        {
            var dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });

            var serviceproxyQueryInfoResponse = new ServiceproxyQueryInfoResponse();
            var serviceproxyGuid = Guid.Parse(guid);
            var serviceproxyEntity = await _crmService.Retrieve("mcs_serviceproxy", serviceproxyGuid, string.Empty, null, dicHead);

            #region 环检
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceordercheckresult'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceordercheckresult",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceordercheckresultList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 工时
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceorderrepairitem'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceorderrepairitem",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceorderrepairitemList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 零件
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceorderpart'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceorderpart",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceorderpartList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            serviceproxyQueryInfoResponse.Serviceproxy = serviceproxyEntity;
            serviceproxyQueryInfoResponse.ServiceordercheckresultList = serviceordercheckresultList.Value.Results;
            serviceproxyQueryInfoResponse.ServiceorderrepairitemList = serviceorderrepairitemList.Value.Results;
            serviceproxyQueryInfoResponse.ServiceorderpartList = serviceorderpartList.Value.Results;
            return serviceproxyQueryInfoResponse;

        }
        #endregion

    }
}
