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

        #endregion
    }
}
