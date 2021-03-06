﻿using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;
using MSLibrary;
using System;
using DCEM.ServiceAssistantService.Main.DTOModel;
using System.Collections.Generic;
using MSLibrary.Xrm.Message.Retrieve;
using MSLibrary.Xrm.Message.RetrieveSignleAttribute;
using DCEM.Main.Entities;
using DCEM.Main;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class VehownerService : IVehownerService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;

        public VehownerService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 10;
        }
        #endregion

        #region 获取车辆档案列表

        #region filter组装
        public async Task<string> GetQueryListFilter(string search,string dealeridGuid)
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
               filter = "<filter type='and'>" + filter;
               filter = filter + $" <condition attribute='mcs_dealer' operator='eq'  value='{dealeridGuid}' />";
               filter = filter + "</filter>";
                
             
                return filter;
            });
        }
        #endregion

        #region FetchXml组装
        public async Task<XDocument> GetQueryListFetchXml(int pageindex, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_vehowner'>
                <order attribute='createdon' descending='true' />
                    {filter}
                <link-entity name='mcs_carserviceadvisor' from='mcs_customerid' link-type='outer' to='mcs_vehownerid' alias='a'>
                    <all-attributes />
                </link-entity> 
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion

        #region 查询记录集
        public async Task<QueryResult<CrmEntity>> QueryList(int pageindex, string search,string dealeridGuid)
        {
            #region 获取记录结果集
            var filter = await GetQueryListFilter(search, dealeridGuid);
            var fetchXdoc = await GetQueryListFetchXml(pageindex, filter);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehowner",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
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

        #region 查询车型 列表
        public async Task<QueryResult<CrmEntity>> QueryCarmodelList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_carmodel", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

    }
}
