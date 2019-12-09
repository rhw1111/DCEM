using System;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单定金支付记录同步请求参数
    /// </summary>
    public class SyncPayedRecordsRequest
    {
        ///<summary>
        ///	订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        ///<summary>
        ///	支付方式
        ///</summary> 
        public int? PaymentType { get; set; }
        ///<summary>
        ///	支付金额
        ///</summary> 
        public decimal? PaymentAmount { get; set; }
        ///<summary>
        ///	积分不够现金支付数
        ///</summary> 
        public decimal? CashPayment { get; set; }
        ///<summary>
        ///	积分数
        ///</summary> 
        public decimal? PaymentTotal { get; set; }
        ///<summary>
        ///	支付时间
        ///</summary> 
        public DateTime? PaymentTime { get; set; }
        ///<summary>
        ///	支付备注
        ///</summary> 
        public string Remark { get; set; }
        ///<summary>
        ///	支付交易流水号
        ///</summary> 
        public string PaySerialNumber { get; set; }
        ///<summary>
        ///	订单交易流水号
        ///</summary> 
        public string SerialNumber { get; set; }
        ///<summary>
        ///	权益项名称
        ///</summary> 
        public string EquityItem { get; set; }
        ///<summary>
        ///	权益项编号
        ///</summary> 
        public string EquityItemCode { get; set; }
        ///<summary>
        ///	支付方向
        ///</summary> 
        public string DirectionOfPayment { get; set; }
        /// <summary>
        /// 订单类型
        /// </summary>
        public int?  OrderType{ get; set; }
}
}
