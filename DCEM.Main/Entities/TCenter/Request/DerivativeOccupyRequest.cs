using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 冻结库存请求参数
    /// </summary>
    public class DerivativeOccupyRequest : RequestBase
    {
        /// <summary>
        /// 订单号
        /// </summary>
        public string OrderCode { get; set; }
        /// <summary>
        /// 商品明细
        /// </summary>
        public List<ProductDetile> ProductDetiles { get; set; }

        public int Type { get; set; }
    }


    public class ProductDetile
    {
        /// <summary>
        /// 商品编码
        /// </summary>
        public string ProductCode { get; set; }
        /// <summary>
        /// 商品数量
        /// </summary>
        public int Quantity { get; set; }
        /// <summary>
        /// 商品Sku编码
        /// </summary>
        public string SkuCode { get; set; }
        /// <summary>
        /// 折后金额
        /// </summary>
        public decimal discount { get; set; }
        /// <summary>
        /// 积分抵扣金额
        /// </summary>
        public decimal integral { get; set; }
        /// <summary>
        /// 实付金额
        /// </summary>
        public decimal paid { get; set; }

    }
}
