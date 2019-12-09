
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 获取订单透明化记录返回参数
    /// </summary>   
    public class QueryOrderStatusRecordResponse : ResponseBase
    {
        ///<summary>
        ///	综合订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        /// <summary>
        /// 支付状态
        /// </summary>
        public int PaymentStatus { get; set; }
        /// <summary>
        /// 订单状态
        /// </summary>
        public int Status { get; set; }
        ///<summary>
        ///	综合订单状态记录
        ///</summary> 
        public ICollection<OrderStatus> OrderStatusRecords { get; set; }
        ///<summary>
        ///	综合订单支付状态记录
        ///</summary> 
        public ICollection<OrderStatus> PaymentStatusRecords { get; set; }

        ///<summary>
        ///	子项集合
        ///</summary> 
        public ICollection<SubOrderStatus> SubOrderStatus { get; set; }

        ///<summary>
        /// 履约信息
        ///</summary> 
        public ICollection<ProviderInfoData> Infos { get; set; }
        ///<summary>
        ///	配送信息	
        ///</summary> 
        public ICollection<ShippingInfoData> ShippingInfo { get; set; }

        ///<summary>
        ///	业务办理结果
        ///</summary> 
        public ICollection<BusinessInfoData> BusinessInfo { get; set; }
        ///<summary>
        ///	施工结果
        ///</summary> 
        public ICollection<ConstructionInfoData> ConstructionInfo { get; set; }

        ///<summary>
        ///	交车结果
        ///</summary> 
        public ICollection<DeliveryInfoData> DeliveryInfo { get; set; }
        ///<summary>
        ///	自提结果
        ///</summary> 
        public ICollection<SelfLiftingInfoData> SelfLiftingInfo { get; set; }
    }
    /// <summary>
    /// 综合订单状态记录
    /// </summary>
    public class OrderStatus
    {
        ///<summary>
        ///	变更前状态
        ///</summary> 
        public string BeforeStatus { get; set; }
        /// <summary>
        /// 变更前状态状码
        /// </summary>
        public int BeforeStatusCode { get; set; }
        ///<summary>
        ///	变更后状态
        ///</summary> 
        public string AfterStatus { get; set; }
        /// <summary>
        /// 变更后状态码
        /// </summary>
        public int AfterStatusCode { get; set; }
        ///<summary>
        ///	操作时间
        ///</summary> 
        public string OprateTime { get; set; }
    }
    /// <summary>
    /// 子项(子订单状态信息)
    /// </summary>
    public class SubOrderStatus
    {
        ///<summary>
        ///	子项编号
        ///</summary> 
        public string SubOrderCode { get; set; }
        ///<summary>
        ///	子订单状态记录
        ///</summary> 
        public ICollection<OrderStatus> SubCodeStatusRecords { get; set; }
    }

    /// <summary>
    /// 商品状态情况
    /// </summary>
    public class ProductStatusInfo
    {
        /// <summary>
        /// 商品编号
        /// </summary>
        public string ProductCode { set; get; }
        /// <summary>
        /// 商品SKU
        /// </summary>
        public string SKU { set; get; }
        
    }
}