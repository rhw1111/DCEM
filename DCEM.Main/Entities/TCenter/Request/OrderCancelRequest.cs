using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单取消申请请求参数
    /// </summary>   
    public class OrderCancelApplyRequest : RequestBase
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
        ///<summary>
        ///	取消时间
        ///</summary> 
        public DateTime CancelTime { get; set; } = DateTime.Now;
        ///<summary>
        ///	取消原因
        ///</summary> 
        public string CancelReason { get; set; }
        /// <summary>
        /// 需要取消的产品Sku
        /// </summary>
        public ICollection<CancelProduct> ProductCollection { set; get; }
    }

    /// <summary>
    /// 申请取消商品的Items
    /// </summary>
    public class CancelProduct
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
