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
    [Injection(InterfaceType = typeof(TCenterService), Scope = InjectionScope.Singleton)]
    public class TCenterService : ITCenterService
    {
        private RemoteServiceDescriptionRepositoryHelper _remoteServiceDescriptionRepositoryHelper;

        public TCenterService(RemoteServiceDescriptionRepositoryHelper remoteServiceDescriptionRepositoryHelper)
        {
            _remoteServiceDescriptionRepositoryHelper = remoteServiceDescriptionRepositoryHelper;
        }

       

        public async Task<List<SkuStockModel>> GetProductListByCode(QueryStockQuantityRequest model)
        {
            //获取服务描述       
            var description = await _remoteServiceDescriptionRepositoryHelper.QueryByName(RemoteServiceNames.RemoteServiceTCenter);
            if (description == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundRemoteServiceDescriptionByName,
                    DefaultFormatting = "找不到名称为{0}的远程服务描述",
                    ReplaceParameters = new List<object>() { RemoteServiceNames.RemoteServiceTCenter }
                };

                throw new UtilityException((int)Errors.NotFoundRemoteServiceDescriptionByName, fragment);
            }
            //获取认证信息
            var authInfos = await description.GenerateAuthInfo();
            //调用服务
            return await HttpClinetHelper.PostAsync<QueryStockQuantityRequest, List<SkuStockModel>>(model,description.Address);
        }

        public Task<Product> QueryNewProductByCode(string productCode)
        {
            throw new NotImplementedException();
        }

        public Task<QueryProductAllResponse> QueryProductAll(QueryProductAllRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<List<QueryProductAllUpdateResponse>> QueryProductAllUpDate(QueryProductAllRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<QueryProductAllResponse> QueryProductAllUpDate2(QueryProductAllRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<QueryProductAllResponse> QueryProductByCategory(string code)
        {
            throw new NotImplementedException();
        }

        public Task<QueryProductByCodeResponse> QueryProductByCode(string productCode)
        {
            throw new NotImplementedException();
        }
    }
}
