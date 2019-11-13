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
using Newtonsoft.Json.Linq;
using System.Linq;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class StockService : IStockService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int defaultpageCount;
        private IServiceproxyService _ServiceproxyService;

        public StockService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            defaultpageCount = 10;
            _ServiceproxyService = new ServiceproxyService(_crmService);
        }
        #endregion

        #region 查询厅店旧件库存
        public async Task<QueryResult<CrmEntity>> QuerySpmdspStockList(int pageindex, string search)
        {
            string filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter = $@"
                    <filter type='or'>
                        <condition attribute='mcs_name' operator='like' value='%{search}%' />
                        <condition attribute='mcs_partscode' operator='like' value='%{search}%' />
                    </filter>";
            }
            filter += @$"
    <link-entity name='mcs_spmdspstock' from='mcs_partid' to='mcs_partsid' alias='a'>
        <all-attributes/>
        <filter type='and'>
            <condition attribute='statecode' operator='eq' value='0' />;
        </filter>
    </link-entity>";
            return await _ServiceproxyService.QueryPartsListByFilter(pageindex, defaultpageCount, filter);
        }
        #endregion

        #region 查询整车厅店库存台账
        public async Task<QueryResult<CrmEntity>> QueryDeliverycentercarStockList(int pageindex, string search)
        {

            string filter = string.Empty;
            if (string.IsNullOrEmpty(filter))
            {
                filter = $@"
                    <filter type='or'>
                        <condition attribute='mcs_name' operator='like' value='%{search}%' />
                    </filter>";
            }

            #region 查询整车厅店库存台帐
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{15}' page='{1}' distinct='true'>
                    <entity name='mcs_deliverycentercarstock'>
                        <order attribute='createdon' descending='true' />
                        {filter}
                        <link-entity name='mcs_vehiclematerial' from='mcs_vehiclematerialid' to='mcs_pnocode' alias='a'>
                            <all-attributes/>
                        </link-entity>
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_deliverycentercarstock",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var partsResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = partsResponse.Value.Results;
            return queryResult;
        }
        #endregion

        #region 查询整车库存台账详情
        public async Task<DeliverycentercarStockInfoResponse> QueryDeliverycentercarStockInfo(string guid)
        {
            var response = new DeliverycentercarStockInfoResponse();
            var deliverycentercarStockGuid = Guid.Parse(guid);
            var deliverycentercarStockEntity = await _crmService.Retrieve("mcs_deliverycentercarstock", deliverycentercarStockGuid, string.Empty, null, dicHead);
            var vehiclematerialGuid = Guid.Parse(deliverycentercarStockEntity.Attributes.Value<string>("_mcs_pnocode_value"));
            var vehiclematerialEntity = await _crmService.Retrieve("mcs_vehiclematerial", vehiclematerialGuid, string.Empty, null, dicHead);

            var vin = deliverycentercarStockEntity.Attributes.Value<string>("mcs_name");

            #region 查询整车综合台帐
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{1}' distinct='true'>
                    <entity name='mcs_vehicle'>
                        <filter type='and'>
                          <condition attribute='mcs_name' operator='eq' value='{vin}' />
                        </filter>
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehicle",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var vehicleResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询厅店车辆入库
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{1}' distinct='true'>
                    <entity name='mcs_dealercarmovein'>
                        <order attribute='createdon' descending='true' />
                        <link-entity name='mcs_deliverycentercarstock' from='mcs_deliverycentercarstockid' to='mcs_vin' alias='a'>
                          <filter type='and'>
                            <condition attribute='mcs_name' operator='eq' value='{vin}' />
                          </filter>
                        </link-entity>
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_dealercarmovein",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var dealercarmoveinResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            response.Deliverycentercarstock = deliverycentercarStockEntity;
            response.Vehiclematerial = vehiclematerialEntity;
            if (vehicleResponse.Value.Results.Count > 0)
            {
                response.Vehicle = vehicleResponse.Value.Results[0];
            }
            if (dealercarmoveinResponse.Value.Results.Count > 0)
            {
                response.Dealercarmovein = dealercarmoveinResponse.Value.Results[0];
            }

            return response;
        }
        #endregion
    }
}
