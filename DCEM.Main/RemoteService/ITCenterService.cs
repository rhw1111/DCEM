using DCEM.Main.Entities;
using DCEM.Main.Entities.Request;
using DCEM.Main.Entities.Request.OrderManager;
using DCEM.Main.Entities.Request.Payment;
using DCEM.Main.Entities.Response.OrderManager;
using DCEM.Main.Entities.TCenter.MktCloud;
using DCEM.Main.Entities.TCenter.Request.Payment;
using DCEM.Main.Entities.TCenter.Response.Payment;
using DCEM.Main.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
   public interface ITCenterService
   {
        #region 1.类目管理
        /// <summary>
        /// 获取管理类目
        /// </summary>
        /// <returns></returns>
        Task<List<CategoryEntity>> GetAllManagerCategory();
        /// <summary>
        /// 获取管理类目
        /// </summary>
        /// <returns></returns>
        Task<List<CategoryEntity>> GetAllManagerCategory2();
        /// <summary>
        /// 获取前端类目
        /// </summary>
        /// <returns></returns>
        Task<List<CategoryEntity>> GetAllFrontCategory();
        /// <summary>
        /// 获取前端类目
        /// </summary>
        /// <returns></returns>
        Task<List<CategoryEntity>> GetAllFrontCategory2();
        #endregion

        #region 2.商品管理
        /// <summary>
        /// 商品全量查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryProductAllResponse> QueryProductAll(QueryProductAllRequest request);

        /// <summary>
        /// 通过商品编号查询商品
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryProductByCodeResponse> QueryProductByCode(string productCode);

        /// <summary>
        /// 通过商品编号查询商品
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<Product> QueryNewProductByCode(string productCode);

        /// <summary>
        ///  综合订单取消
        /// </summary>
        /// <param name="mcs_name"></param>
        /// <param name="mcs_paystatus"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> CancelOrder(CancelOrderRequest cancelOrder);

        /// <summary>
        /// 商品全量查询--优化后方法
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<List<QueryProductAllUpdateResponse>> QueryProductAllUpDate(QueryProductAllRequest request);

        Task<QueryProductAllResponse> QueryProductAllUpDate2(QueryProductAllRequest request);
        Task<QueryProductAllResponse> QueryProductByCategory(string code);

        /// <summary>
        /// 根据商品编码和sku号码查询商品
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        Task<List<SkuStockModel>> GetProductListByCode(QueryStockQuantityRequest model);
        #endregion

        #region 3.订单管理
        Task<CreateOrderManagerResponse> CreateOrder(CreateOrderManagerRequest param);
        #endregion

        #region 4.支付管理
        /// <summary>
        /// 模拟微信/支付宝退款接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<SimulatedRefundResponse> SimulatedRefund(SimulatedRefundRequest request);
        #endregion
    }

}
