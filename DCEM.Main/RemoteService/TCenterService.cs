using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.RemoteService;
using MSLibrary.LanguageTranslate;
using DCEM.Main.Entities;
using DCEM.Main.Entities.Request;
using DCEM.Main.Entities.Request.OrderManager;
using DCEM.Main.Entities.Request.Payment;
using DCEM.Main.Entities.Response.OrderManager;
using DCEM.Main.Entities.TCenter.MktCloud;
using MSLibrary.Configuration;
using DCEM.ServiceAssistantService.Main;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(ITCenterService), Scope = InjectionScope.Singleton)]
    public class TCenterService : ITCenterService
    {
        private ISystemConfigurationRepository _systemConigurationRepository;
        private ICrmService _crmService;

        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private static string BaseUrl = "";
        private static Dictionary<string, string> AuthInfos = new Dictionary<string, string>();

        public TCenterService(ISystemConfigurationRepository systemConigurationRepository)
        {
            var crmService = StartupHelper.CreateCrmService();
            _systemConigurationRepository = systemConigurationRepository;
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });

            //获取服务描述
            var remoteServiceTCenter = _systemConigurationRepository.QueryByName(RemoteServiceNames.RemoteServiceTCenter);
            if (remoteServiceTCenter == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundRemoteServiceDescriptionByName,
                    DefaultFormatting = "找不到名称为{0}的远程服务配置",
                    ReplaceParameters = new List<object>() { RemoteServiceNames.RemoteServiceTCenter }
                };

                throw new UtilityException((int)Errors.NotFoundRemoteServiceDescriptionByName, fragment);
            }
            //获取认证信息
            var tCenterConfiguration = remoteServiceTCenter.GetConfigurationValue<TCenterConfiguration>();
            if (tCenterConfiguration != null)
            {
                BaseUrl = tCenterConfiguration.Url;
                AuthInfos = tCenterConfiguration.AuthInfos;
            }
        }

        #region 1.类目管理
        public async Task<List<CategoryEntity>> GetAllManagerCategory()
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<List<CategoryEntity>>($"{BaseUrl}/api/category/AllManagerCategory", AuthInfos);
        }

        public async Task<List<CategoryEntity>> GetAllManagerCategory2()
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<List<CategoryEntity>>($"{BaseUrl}/api/category/AllManagerCategory2");
        }

        public async Task<List<CategoryEntity>> GetAllFrontCategory()
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<List<CategoryEntity>>($"{BaseUrl}/api/category/AllFrontCategory");
        }

        public async Task<List<CategoryEntity>> GetAllFrontCategory2()
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<List<CategoryEntity>>($"{BaseUrl}/api/category/AllFrontCategory2");
        }
        #endregion

        #region 2.商品管理
        public async Task<List<SkuStockModel>> GetProductListByCode(QueryStockQuantityRequest model)
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<List<SkuStockModel>>($"{BaseUrl}/api/product/QueryStockQuantity?ProductCode={model.ProductCode}&ProductSkuCode={model.ProductSkuCode}");
        }

        public async Task<Product> QueryNewProductByCode(string productCode)
        {
            return await HttpClinetHelper.PostAsync<string, Product>(productCode, $"{BaseUrl}/api/product/");
        }

        public async Task<QueryProductAllResponse> QueryProductAll(QueryProductAllRequest request)
        {
            //调用服务
            return await HttpClinetHelper.PostAsync<QueryProductAllRequest, QueryProductAllResponse>(request, $"{BaseUrl}/api/product/All");
        }

        public async Task<List<QueryProductAllUpdateResponse>> QueryProductAllUpDate(QueryProductAllRequest request)
        {
            //调用服务
            return await HttpClinetHelper.PostAsync<QueryProductAllRequest, List<QueryProductAllUpdateResponse>>(request, $"{BaseUrl}/api/product/AllUpdate");
        }

        public async Task<QueryProductAllResponse> QueryProductAllUpDate2(QueryProductAllRequest request)
        {
            //调用服务
            return await HttpClinetHelper.PostAsync<QueryProductAllRequest, QueryProductAllResponse>(request, $"{BaseUrl}/api/product/All2");
        }

        public async Task<QueryProductAllResponse> QueryProductByCategory(string code)
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<QueryProductAllResponse>($"{BaseUrl}/api/product/QueryProductByCategory?code={code}");
        }

        public async Task<QueryProductByCodeResponse> QueryProductByCode(string productCode)
        {
            //调用服务
            return await HttpClinetHelper.GetAsync<QueryProductByCodeResponse>($"{BaseUrl}/api/product/Detail?productCode={productCode}");
        }
        #endregion

        #region 3.订单管理
        public async Task<CreateOrderManagerResponse> CreateOrder(CreateOrderManagerRequest request)
        {
            return await HttpClinetHelper.PostAsync<CreateOrderManagerRequest, CreateOrderManagerResponse>(request, $"{BaseUrl}/api/order/CreateOrder");
        }


        /// <summary>
        /// 综合订单取消
        /// </summary>
        /// <param name="mcs_name"></param>
        /// <param name="mcs_paystatus"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> CancelOrder(CancelOrderRequest cancelOrder)
        {
            var validateResult = new ValidateResult<CrmEntity>();

            var fetchOrder = QueryOrder(cancelOrder.OrderCode);
            var fetchXdocOrder = XDocument.Parse(fetchOrder);
            var fetchOrderRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_order",
                FetchXml = fetchXdocOrder
            };
            fetchOrderRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchOrderRequest);
            var orderResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            if (orderResponse.Value.Results.Count == 0)
            {
                validateResult.Data = null;
                validateResult.Result = false;
                validateResult.Description = "订单记录不存在";
                return validateResult;
            }
            CrmEntity order = orderResponse.Value.Results[0];

            if (!order.Attributes.ContainsKey("mcs_paystatus"))
            {
                validateResult.Data = order;
                validateResult.Result = false;
                validateResult.Description = "订单记录支付状态为空";
                return validateResult;
            }

            var upOrder =new CrmExecuteEntity(order.EntityName, order.Id);
            var paystatus = order.Attributes.Value<int>("mcs_paystatus");
            if (paystatus==(int)PayStatus.NoNeedPay|| paystatus== (int)PayStatus.ToBePay) 
            {
                upOrder.Attributes.Add("mcs_state", (int)Tc_OrderState.Cancel);
            }
            if (paystatus== (int)PayStatus.Paid)
            {
                if (order.Attributes.ContainsKey("staterecord.createdon"))
                {
                    var date = DateTime.Now;
                    var paydate= order.Attributes.Value<DateTime>("staterecord.createdon");
                    if (paydate.AddDays(7)<date)
                    {
                        validateResult.Data = order;
                        validateResult.Result = false;
                        validateResult.Description = "订单已支付7天，不予许退订了";
                        return validateResult;
                    }
                }
                upOrder.Attributes.Add("mcs_state", (int)Tc_OrderState.Refunding);
            }
            await _crmService.Update(upOrder);

            validateResult.Data = order;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }

        /// <summary>
        /// 查询订单记录
        /// </summary>
        /// <param name="mcs_name"></param>
        /// <param name="mcs_paystatus"></param>
        /// <returns></returns>
        private string QueryOrder(string mcs_name)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
              <entity name='mcs_tc_order'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_totalintegral' />
                <attribute name='mcs_totalamount' />
                <attribute name='mcs_state' />
                <attribute name='mcs_shopcode' />
                <attribute name='mcs_referrerphone' />
                <attribute name='mcs_purchaserphone' />
                <attribute name='mcs_purchasername' />
                <attribute name='mcs_purchasercertificatetype' />
                <attribute name='mcs_purchasercertificatecode' />
                <attribute name='mcs_paystatus' />
                <attribute name='mcs_ordertime' />
                <attribute name='mcs_ordersource' />
                <attribute name='mcs_isneedtopay' />
                <attribute name='mcs_isneedtodeposit' />
                <attribute name='mcs_isneedtodelivery' />
                <attribute name='mcs_isneedtoapproval' />
                <attribute name='mcs_buyersphone' />
                <attribute name='mcs_accesschannel' />
                <attribute name='mcs_tc_orderid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_name' operator='eq' value='{mcs_name}' />
                </filter>
                <link-entity name='mcs_tc_order_staterecord' from='mcs_order' to='mcs_tc_orderid' link-type='inner' alias='staterecord'>
                <attribute name='createdon' />
               <order attribute='createdon' descending='false' />
               </link-entity>
              </entity>
            </fetch>";
            return str;
        }
        #endregion
    }
}
