/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.Payment
*   文件名称    ：SyncPayedRecordsRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/20 14:17:49 
*   邮    箱    ：litingxian@live.cn
*   个人主站    ：https://github.com/tingli1991
*   功能描述    ：
*   使用说明    ：
*   ========================================================================
*   修改者      ：
*   修改日期    ：
*   修改内容    ：
*   ========================================================================
*  
***************************************************************************/



namespace DCEM.Main.Entities.Request.Payment
{
    /// <summary>
    /// 支付记录同步接口
    /// </summary>
    public class SyncPayedRecordsRequest
    {
        /// <summary>
        /// 支付方式
        /// 1：现金
        /// 2：积分
        /// 3：权益项抵扣
        /// </summary>
        public OrderPaymentTypeEnum PaymentType { get; set; }

        /// <summary>
        /// 支付金额或积分
        /// </summary>
        public decimal PaymentAmount { get; set; }

        /// <summary>
        /// 积分不够现金支付数
        /// 备注：
        ///     支付方式为积分，如果是一个商品需要使用现金+积分混合支付时，比如使用5元兑换替换50积分，则在“现金抵扣积分金额”字段赋值为5元
        ///     支付方式为现金，如果一个商品需要使用现金+积分混合支付时，比如使用50积分换5元，则在“积分抵扣现金积分数”字段赋值50积分
        /// </summary>
        public decimal CashPayment { get; set; }

        ///// <summary>
        ///// 积分总数或金额总数
        ///// 备注：
        /////     当支付方式为积分支付时表示积分数，否则表示金额
        ///// </summary>
        //public decimal PaymentTotal { get; set; }

        /// <summary>
        /// 订单支付时间
        /// 时间格式：yyyy-MM-dd HH:mm:ss
        /// </summary>
        public string PaymentTime { get; set; }

        /// <summary>
        /// 支付交易流水号
        /// </summary>
        public string PaySerialNumber { get; set; }

        /// <summary>
        /// 订单流水号
        /// </summary>
        public string SerialNumber { get; set; }

        /// <summary>
        /// 权益项名称
        /// </summary>
        public string EquityItem { get; set; }

        /// <summary>
        /// 权益项编号
        /// </summary>
        public string EquityItemCode { get; set; }

        /// <summary>
        /// 支付方向
        /// 备注：
        ///     支付，退款（传文字）
        /// </summary>
        public string DirectionOfPayment { get; set; }
        /// <summary>
        /// 用户支付ID
        /// </summary>
        public string PaymentUserId { get; set; }
        /// <summary>
        /// 支付渠道 0:微信支付；1：支付宝支付
        /// </summary>
        public int PaymentChannel { get; set; }

        /// <summary>
        /// 支付备注
        /// </summary>
        public string Remark { get; set; }
    }

    public class TailMoneyPayRequest
    {
        public string OrderCode { get; set; }
        /// <summary>
        /// 支付方式 1.现金 2.积分，3权益项抵扣
        /// </summary>
        public int PaymentType { get; set; }
        public decimal PaymentAmount { get; set; }
        public string PaymentTime { get; set; }
        public string Remark { get; set; }
        
        public string PaySerialNumber { get; set; }
        public string SerialNumber { get; set; }
        public string EquityItem { get; set; }
        public string EquityItemCode { get; set; }
        
        public string DirectionOfPayment { get; set; }
        public System.Guid Dealer { get; set; }
    }
    public class TailMoneyPayResponse
    {
        public string code { get; set; }
        public string message { get; set; }
        public string data { get; set; }
    }
}