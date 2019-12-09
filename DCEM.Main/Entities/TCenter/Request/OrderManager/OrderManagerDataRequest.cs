/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：OrderManagerDataRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:17:32 
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


using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 订单管理-创建订单-主数据请求参数
    /// </summary>
    public class OrderManagerDataRequest
    {
        /// <summary>
        /// 商城订单编号
        /// </summary>
        public string OrderCode { get; set; }

        ///<summary>
        ///	用户ID	
        ///</summary> 
        public string UserId { get; set; }

        ///<summary>
        ///	用户名称	
        ///</summary> 
        public string UserName { get; set; }

        /// <summary>
        /// 订单类型：0 商城订单 1：企业订单
        /// </summary>
        public int OrderType { get; set; }

        ///<summary>
        ///	用户手机号码	
        ///</summary> 
        public string UserMobile { get; set; }

        ///<summary>
        ///	接入媒体	
        ///</summary> 
        public OrderSourceEnum Media { get; set; }

        ///<summary>
        ///	订单接入渠道(APPID)	
        ///</summary> 
        public string ChannelSource { get; set; }

        ///<summary>
        ///	下单时间	
        ///</summary> 
        public DateTime? OrderTime { get; set; }

        ///<summary>
        ///	购车方名称	
        ///</summary> 
        public string CarBuyerName { get; set; }

        ///<summary>
        ///	购车方联系电话	
        ///</summary> 
        public string CarBuyerPhone { get; set; }

        /// <summary>
        /// 购车方证类型  身份证=1 港澳通行证=2,台湾来往通行证=3，护照=4 企业纳税识别号=5,其他=0
        /// </summary>
        public int CarBuyerIdType { get; set; }

        ///<summary>
        ///	购车方证号码	
        ///</summary> 
        public string CarBuyerId { get; set; }

        ///<summary>
        ///	是否需要配送	
        ///</summary> 
        public bool? ShippingFlag { get; set; }

        ///<summary>
        ///	是否需要支付	
        ///</summary> 
        public bool? PaymentFlag { get; set; }

        /// <summary>
        /// 当前支付状态：不需要支付=0, 等待支付=1 支付成功=3  2019-4-3新增
        /// </summary>
        public int PaymentStatus { get; set; }

        ///<summary>
        ///	订单总金额	
        ///</summary> 
        public decimal CashTotal { get; set; }

        ///<summary>
        ///	线上应收金额	
        ///</summary> 
        public decimal TotalDepositAmount { get; set; }

        ///<summary>
        ///	线上已收金额	
        ///</summary> 
        public decimal ReceivedDepositAmount { get; set; }

        ///<summary>
        ///	已收金额（不含积分不够现金支付部分）	
        ///</summary> 
        public decimal ReceivableAmount { get; set; }

        ///<summary>
        ///	抵扣金额(权益项抵扣金额：通常是负数（例如抵扣了30元：-30），使用权益或者积分抵扣的金额)
        ///</summary> 
        public decimal DeductionAmount { get; set; }

        ///<summary>
        ///	订单尾款/待收尾款(尾款=订单总金额-实际支付金额FinalPayment=CashTotal- ReceivedDepositAmount)	
        ///</summary> 
        public decimal FinalPayment { get; set; }

        ///<summary>
        ///	订单总积分	
        ///</summary> 
        public decimal IntegralTotal { get; set; }

        /// <summary>
        /// 应收积分(应收积分=订单总积分+积分抵扣（负数）)
        /// </summary>
        public decimal IntegralReceivable { get; set; }

        ///<summary>
        ///	已收积分	
        ///</summary> 
        public decimal ReceivedIntegral { get; set; }

        /// <summary>
        /// 抵扣积分(通常是负数（例如抵扣了30积分：-30），使用权益或者现金抵扣的积分)
        /// </summary>
        public decimal DeductionIntegral { get; set; }

        ///<summary>
        ///	活动编号	
        ///</summary> 
        public string ActiveCode { get; set; }

        ///<summary>
        ///	活动名称	
        ///</summary> 
        public string ActiveName { get; set; }

        ///<summary>
        ///	优购码	
        ///</summary> 
        public string OptimalCode { get; set; }

        ///<summary>
        ///	推荐人姓名	
        ///</summary> 
        public string RecommendUserName { get; set; }

        ///<summary>
        ///	推荐人手机号码	
        ///</summary> 
        public string RecommendUserPhone { get; set; }

        ///<summary>
        ///	订单备注	
        ///</summary> 
        public string Comment { get; set; }

        ///<summary>
        ///	收货人名字	
        ///</summary> 
        public string ReceiverName { get; set; }

        ///<summary>
        ///	收货人手机号码	
        ///</summary> 
        public string ReceiverPhone { get; set; }

        ///<summary>
        ///	厅店编码	
        ///</summary> 
        public string DealerCode { get; set; }

        ///<summary>
        ///	交车地址
        ///</summary> 
        public string DeliveryAdderss { get; set; }

        /// <summary>
        /// 小订订单编号列表
        /// </summary>
        public List<string> SmallOrderCodeList { get; set; }

        /// <summary>
        /// 金融方案信息
        /// </summary>
        public OrderManagerFinancialRequest OrderFinancial { get; set; }

        /// <summary>
        /// 支付状态集合 
        /// </summary>
        public List<OrderManagerPaymentStatusRequest> PaymentStatusList { get; set; }
    }
}