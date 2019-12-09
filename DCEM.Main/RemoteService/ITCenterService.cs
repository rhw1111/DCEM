using DCEM.Main.Entities;
using DCEM.Main.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
   public interface ITCenterService
   {
        #region 商品管理
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

        #region 订单管理

        #endregion
    }

}
