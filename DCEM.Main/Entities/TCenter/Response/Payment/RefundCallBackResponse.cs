using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main.Entities.TCenter.Response.Payment
{
    public class BaseRefundCallBackResponse : BaseRefundResponse
    {
        public string appid { get; set; }
        /// <summary>
        /// 商户号
        /// </summary>
        public string mch_id { get; set; }
        /// <summary>
        /// 随机字符串 用与加密算法
        /// </summary>
        public string nonce_str { get; set; }
        public string req_info { get; set; }
    }
    /// <summary>
    /// 退款回调通知参数
    /// </summary>
    public class RefundCallBackResponse : BaseRefundCallBackResponse
    {
        /// <summary>
        /// 微信订单号 
        /// </summary>
        public string transaction_id { get; set; }
        /// <summary>
        /// 商户订单号 
        /// </summary>
        public string out_trade_no { get; set; }
        /// <summary>
        /// 微信退款单号
        /// </summary>
        public string refund_id { get; set; }
        /// <summary>
        /// 商户退款单号
        /// </summary>
        public string out_refund_no { get; set; }
        /// <summary>
        /// 订单金额
        /// </summary>
        public int total_fee { get; set; }
        /// <summary>
        /// 申请退款金额
        /// </summary>
        public int refund_fee { get; set; }
        /// <summary>
        /// 退款金额
        /// </summary>
        public int settlement_refund_fee { get; set; }
        /// <summary>
        /// 退款状态 SUCCESS-退款成功  CHANGE-退款异常  REFUNDCLOSE—退款关闭
        /// </summary>
        public string refund_status { get; set; }
        /// <summary>
        /// 退款成功时间 
        /// </summary>
        public string success_time { get; set; }
        /// <summary>
        /// 退款入账账户
        /// </summary>
        public string refund_recv_accout { get; set; }
        /// <summary>
        /// 退款资金来源
        /// </summary>
        public string refund_account { get; set; }
        /// <summary>
        /// 退款发起来源
        /// </summary>
        public string refund_request_source { get; set; }
    }
}
