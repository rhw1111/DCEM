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

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(ITCenterService), Scope = InjectionScope.Singleton)]
    public class TCenterService : ITCenterService
    {
        private ISystemConfigurationRepository _systemConigurationRepository;

        private static string BaseUrl = "";
        private static Dictionary<string, string> AuthInfos = new Dictionary<string, string>();

        public TCenterService(ISystemConfigurationRepository systemConigurationRepository)
        {
            _systemConigurationRepository = systemConigurationRepository;

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
        
        #endregion
    }
}
