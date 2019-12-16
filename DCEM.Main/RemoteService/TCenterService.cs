using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.RemoteService;
using MSLibrary.LanguageTranslate;
using DCEM.Main.Entities;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(ITCenterService), Scope = InjectionScope.Singleton)]
    public class TCenterService : ITCenterService
    {
        private RemoteServiceDescriptionRepositoryHelper _remoteServiceDescriptionRepositoryHelper;
        private static string BaseUrl = "http://106.14.121.65:8082/TC/";

        public TCenterService(RemoteServiceDescriptionRepositoryHelper remoteServiceDescriptionRepositoryHelper)
        {
            _remoteServiceDescriptionRepositoryHelper = remoteServiceDescriptionRepositoryHelper;
        }
       
        public async Task<List<SkuStockModel>> GetProductListByCode(QueryStockQuantityRequest model)
        {
            ////获取服务描述       
            //var description = await _remoteServiceDescriptionRepositoryHelper.QueryByName(RemoteServiceNames.RemoteServiceTCenter);
            //if (description == null)
            //{
            //    var fragment = new TextFragment()
            //    {
            //        Code = TextCodes.NotFoundRemoteServiceDescriptionByName,
            //        DefaultFormatting = "找不到名称为{0}的远程服务描述",
            //        ReplaceParameters = new List<object>() { RemoteServiceNames.RemoteServiceTCenter }
            //    };

            //    throw new UtilityException((int)Errors.NotFoundRemoteServiceDescriptionByName, fragment);
            //}
            ////获取认证信息
            //var authInfos = await description.GenerateAuthInfo();
            //调用服务
            return await HttpClinetHelper.GetAsync<List<SkuStockModel>>( $"{BaseUrl}/api/product/QueryStockQuantity?ProductCode={model.ProductCode}&ProductSkuCode={model.ProductSkuCode}");
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
    }
}
