

namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using MSLibrary.Xrm;
    using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System.Xml.Linq;
    using System;
    using Newtonsoft.Json.Linq;
    using MSLibrary;

    public class SysConfigService : ISysConfigService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;
        public SysConfigService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 50;
        }
        #endregion

        #region 查询配置信息表
        public async Task<JObject> QueryCepconfig(string key)
        {
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_cepconfig'>
                <filter type='and'>
                <condition attribute='mcs_name' operator='eq' value='{key}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_cepconfig",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var response = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            if (response.Value.Results.Count > 0)
                return response.Value.Results[0].Attributes;
            else
                return null;

        }
        #endregion

    }
}
