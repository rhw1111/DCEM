using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.Factory;
using MSLibrary;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.Main.TCenter;
using DCEM.Main.Entities;
using DCEM.Main.RemoteService;

namespace DCEM.Web.Controllers
{
    [Route("api/product")]
    public class ProductController : ApiController
    {
        /// <summary>
        /// IAppProduct 工厂，默认使用 ProductLogicFactory
        /// </summary>
        public static ITCenterFactory _productLogicCRMFactory;

        /// <summary>
        /// 提供静态属性用于替换IAppProduct工厂
        /// </summary>
        public ProductController(ITCenterFactory tCenterFactory)
        {
            _productLogicCRMFactory = tCenterFactory;
        }
        /// <summary>
        /// 商品全量查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("All")]
        //[OtherSystemAuthenticationActionFilter]
        public async Task<QueryProductAllResponse> QueryProductAll(QueryProductAllRequest request)
        {
            var productLogic = await _productLogicCRMFactory.Create();
            return  await productLogic.QueryProductAll(request);
        }
        ///// <summary>
        ///// FetchXML商品全量查询
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("All2")]
        ////[OtherSystemAuthenticationActionFilter]
        //public Task<QueryProductAllResponse> QueryProductAll2(QueryProductAllRequest request)
        //{
        //    var productLogic = _productLogicCRMFactory.Create();
        //    var result = productLogic.QueryProductAllUpDate2(request);
        //    return result;
        //}

        ///// <summary>
        ///// FetchXML按类目商品查询
        ///// </summary>
        ///// <returns></returns>
        //[HttpGet]
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //[Route("QueryProductByCategory")]
        ////[OtherSystemAuthenticationActionFilter]
        //public Task<QueryProductAllResponse> QueryProductByCategory(string code)
        //{
        //    var productLogic = _productLogicCRMFactory.Create();
        //    var result = productLogic.QueryProductByCategory(code);
        //    return result;
        //}
        ///// <summary>
        ///// 商品全量查询--效率优化方法
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("AllUpdate")]
        //[OtherSystemAuthenticationActionFilter]
        //public async Task<List<QueryProductAllUpdateResponse>> QueryProductAllUpdate(QueryProductAllRequest request)
        //{
        //    var productLogic = _productLogicFactory.Create();
        //    var result = productLogic.QueryProductAllUpDate(request);
        //    return await result;
        //}

        ///// <summary>
        ///// FetchXML商品全量查询
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        ////[HttpPost]
        ////[Route("AllSearch")]
        //////[OtherSystemAuthenticationActionFilter]
        ////public List<QueryProductAllResponse> QueryProductAllUpdate2(QueryProductAllRequest request) {
        ////    var productLogic = _productLogicFactory.Create();
        ////    var result = productLogic.QueryProductAllUpDate2(request);
        ////    return result;
        ////}

        ///// <summary>
        ///// 通过商品编号查询商品
        ///// </summary>
        ///// <param name="request">商品编号</param>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("Detail")]
        ////[OtherSystemAuthenticationActionFilter]
        //public async Task<QueryProductByCodeResponse> QueryProductByCode(string productCode)
        //{
        //    var productLogic = _productLogicFactory.Create();
        //    var result = productLogic.QueryProductByCode(productCode);
        //    return await result;
        //}

        ///// <summary>
        ///// 商品库存查询接口
        ///// </summary>
        ///// <param name="ProductCode"></param>
        ///// <param name="ProductSkuCode"></param>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("QueryStockQuantity")]
        //[OtherSystemAuthenticationActionFilter]
        //public async Task<ProductResutResponse> QueryStockQuantity(string ProductCode = "", string ProductSkuCode = "")
        //{
        //    ProductResutResponse result = new ProductResutResponse();
        //    if (string.IsNullOrWhiteSpace(ProductCode) && string.IsNullOrWhiteSpace(ProductSkuCode))
        //    {
        //        return new ProductResutResponse() { Code = "002", Message = "商品编码和SkuCode不能同时为空" };
        //    }
        //    QueryStockQuantityRequest request = new QueryStockQuantityRequest();
        //    request.ProductCode = ProductCode;
        //    request.ProductSkuCode = ProductSkuCode;

        //    var productLogic = _productLogicFactory.Create();
        //    var list = await productLogic.GetProductListByCode(request);
        //    List<SkuStock> skuList = new List<SkuStock>();
        //    if (list != null && list.Count > 0)
        //    {
        //        foreach (var item in list)
        //        {
        //            SkuStock model = new SkuStock();
        //            model.SkuCode = item.SkuCode;
        //            var entity = GetStock(item.MaterielCode);
        //            if (entity != null)
        //            {
        //                model.Count = Convert.ToInt32(entity.GetAttributeValue<decimal>("mcs_stockq"));
        //            }
        //            skuList.Add(model);
        //        }
        //    }
        //    result.Data = skuList;
        //    return result;
        //}

        ///// <summary>
        ///// 获取衍生品主数据
        ///// </summary>
        ///// <param name="code"></param>
        ///// <returns></returns>
        //public Entity GetDetails(string code)
        //{
        //    Entity entity = null;
        //    using (OrganizationServiceProxy service = CRM.Core.CrmServerConnect.Connector())
        //    {
        //        string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
        //                          <entity name='mcs_spmaccessoriesproduct'>
        //                            <attribute name='mcs_spmaccessoriesproductid' />
        //                            <attribute name='mcs_name' />
        //                            <attribute name='createdon' />
        //                            <order attribute='mcs_name' descending='false' />
        //                            <filter type='and'>
        //                              <condition attribute='statecode' operator='eq' value='0' />
        //                              <condition attribute='mcs_name' operator='eq' value='{code}' />
        //                            </filter>
        //                          </entity>
        //                        </fetch>";
        //        var fetch = new FetchExpression(str);
        //        var response = service.RetrieveMultiple(fetch);
        //        if (response.Entities.Count > 0)
        //        {
        //            entity = response.Entities[0];
        //        }
        //    }
        //    return entity;
        //}

        ///// <summary>
        ///// 获取库存
        ///// </summary>
        ///// <param name="code"></param>
        ///// <returns></returns>
        //public Entity GetStock(string code)
        //{
        //    Entity entity = null;
        //    var info = GetDetails(code);
        //    if (info != null)
        //    {
        //        using (OrganizationServiceProxy service = CRM.Core.CrmServerConnect.Connector())
        //        {
        //            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
        //                              <entity name='mcs_spmaccprodstock'>
        //                                <attribute name='mcs_spmaccprodstockid' />
        //                                <attribute name='mcs_name' />
        //                                <attribute name='mcs_stockq' />
        //                                <attribute name='createdon' />
        //                                <order attribute='mcs_name' descending='false' />
        //                                <filter type='and'>
        //                                  <condition attribute='mcs_status' operator='eq' value='0' />
        //                                  <condition attribute='mcs_spmaccessoriesproductid' operator='eq' value='{info.Id}' />
        //                                </filter>
        //                              </entity>
        //                            </fetch>";
        //            var fetch = new FetchExpression(str);
        //            var response = service.RetrieveMultiple(fetch);
        //            if (response.Entities.Count > 0)
        //            {
        //                entity = response.Entities[0];
        //            }
        //        }
        //    }
        //    return entity;
        //}
    }
}
