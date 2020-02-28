using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main.Entities.TCenter.Response.Payment
{
    /// <summary>
    /// 模拟微信/支付宝等支付接口返回参数
    /// </summary>
    public class SimulatedRefundResponse : BaseRefundResponse
    {
        /// appid
        /// </summary>
        public string appid { get; set; }
        /// <summary>
        /// 商户号
        /// </summary>
        public string mch_id { get; set; }
        /// <summary>
        /// 随机字符串 用与加密算法
        /// </summary>
        public string nonce_str { get; set; }
        /// <summary>
        /// 签名 通常MD5
        /// </summary>
        public string sign { get; set; }
        /// <summary>
        /// 商户订单号
        /// </summary>
        public string out_trade_no { get; set; }
        /// <summary>
        /// 商户退款单号
        /// </summary>
        public string out_refund_no { get; set; }
        /// <summary>
        /// 微信/支付宝退款单号
        /// </summary>
        public string refund_id { get; set; }
        /// <summary>
        /// 退款金额 单位为分
        /// </summary>
        public int refund_fee { get; set; }
        /// <summary>
        /// 订单总金额 单位为分
        /// </summary>
        public int total_fee { get; set; }
    }
}
