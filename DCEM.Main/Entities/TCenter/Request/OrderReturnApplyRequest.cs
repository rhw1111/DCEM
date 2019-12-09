using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单退货申请请求参数
    /// </summary>
    public class OrderReturnApplyRequest : RequestBase
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
        ///<summary>
        ///	退货时间
        ///</summary> 
        public DateTime ReturnTime { get; set; } = DateTime.Now;
        ///<summary>
        ///	退货原因
        ///</summary> 
        public string ReturnReason { get; set; }
        /// <summary>
        /// 需要退货的产品Sku
        /// </summary>
        public ICollection<ReturnProduct> ProductCollection { set; get; }

    }

    /// <summary>
    /// 申请退货的商品Item
    /// </summary>
    public class ReturnProduct
    {
        ///<summary>
        ///	商品编号
        ///</summary> 
        public string ProductCode { get; set; }
        ///<summary>
        ///	订单商品SKU编号
        ///</summary> 
        public string SkuCode { get; set; }
    }
}