

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

    public class StoreService : IStoreService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;
        public StoreService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 50;
        }

        #region 获取 商品列表


        public async Task<ProducListResponse> QueryProductList(ProducListRequest request)
        {
            var producListResponse = new ProducListResponse();

            #region 查询所有商品
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{50}' page='{1}' distinct='true'>
                    <entity name='mcs_tc_product'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_product",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var procudtResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            foreach (var procudt in procudtResponse.Value.Results)
            {

            }

            #region 查询商品图片


            #endregion

            return producListResponse;
        }
        #endregion


        #endregion
    }
}
