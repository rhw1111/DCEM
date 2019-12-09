using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{

    #region 订单取消申请
    /// <summary>
    /// 订单取消申请请求参数
    /// </summary>   
    public class OrderCancelApplyBOModel 
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }

        public ICollection<CancelProductBO> ProductCollection { set; get; }
        /// <summary>
        /// 取消类型
        /// </summary>
        public int CancelType { get; set; }
        ///<summary>
        ///	退货时间
        ///</summary> 
        public DateTime? CancelTime { get; set; }
        ///<summary>
        ///	退货原因
        ///</summary> 
        public string CancelReason { get; set; }

    }
    /// <summary>
    /// 申请取消商品的Items
    /// </summary>
    public class CancelProductBO
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
    #endregion

    /// <summary>
    /// 订单列表业务实体
    /// </summary>
    public class OrderQueryModel
    {
        ///<summary>
        ///	订单编号	
        ///</summary> 
        public string OrderCode { get; set; }
        ///<summary>
        ///	1.状态（待审批（定金没交足），2审批中（审批交足），3已通过，4已驳回，5订单取消，6订单退货 7交易完成  	
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	用户ID	
        ///</summary> 
        public int? UserId { get; set; }
        ///<summary>
        ///	用户名称	
        ///</summary> 
        public string UserName { get; set; }
        ///<summary>
        ///	用户手机号码	
        ///</summary> 
        public string UserMobile { get; set; }
        ///<summary>
        ///	接入媒体	
        ///</summary> 
        public string Media { get; set; }
        ///<summary>
        ///	接入终端	
        ///</summary> 
        public string Terminal { get; set; }
        ///<summary>
        ///	订单接入渠道(APPID)	
        ///</summary> 
        public string ChannelSource { get; set; }
        ///<summary>
        ///	下单时间	
        ///</summary> 
        public DateTime? OrderTime { get; set; }
        ///<summary>
        ///	购车人姓名	
        ///</summary> 
        public string CarBuyerName { get; set; }
        ///<summary>
        ///	购车人手机号码	
        ///</summary> 
        public string CarBuyerPhone { get; set; }
        ///<summary>
        ///	购车人身份证号码	
        ///</summary> 
        public string CarBuyerId { get; set; }
        ///<summary>
        ///	是否需要配送	
        ///</summary> 
        public bool ShippingFlag { get; set; }
        ///<summary>
        ///	是否需要支付	
        ///</summary> 
        public bool PaymentFlag { get; set; }
        ///<summary>
        ///	0-不需要支付,1-等待支付,2-支付确认中3-支付成功,4-支付失败	
        ///</summary> 
        public int? PaymentStatus { get; set; }
        ///<summary>
        ///	订单总金额	
        ///</summary> 
        public decimal? Cashtoal { get; set; }
        ///<summary>
        ///	线上应收金额金额	
        ///</summary> 
        public decimal? TotalDeposiAmount { get; set; }
        ///<summary>
        ///	线上已收金额金额	
        ///</summary> 
        public decimal? ReceivedDeposiAmount { get; set; }
        ///<summary>
        ///	已收货款金额（不含积分不够现金支付部分）	
        ///</summary> 
        public decimal? ReceivableAmount { get; set; }
        ///<summary>
        ///	权益项抵扣金额	
        ///</summary> 
        public decimal? DeductionAmount { get; set; }
        ///<summary>
        ///	待收尾款	
        ///</summary> 
        public decimal? Finalpayment { get; set; }
        ///<summary>
        ///	积分总额	
        ///</summary> 
        public decimal? InstallmentTotal { get; set; }
        ///<summary>
        ///	实收积分	
        ///</summary> 
        public decimal? ReceivedIntegral { get; set; }
        ///<summary>
        ///	积分不足，现金支付金额	
        ///</summary> 
        public decimal? CashPayment { get; set; }
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
        ///	配送省	
        ///</summary> 
        public string ProvinceCode { get; set; }
        ///<summary>
        ///	配送市	
        ///</summary> 
        public string CityCode { get; set; }
        ///<summary>
        ///	配送区	
        ///</summary> 
        public string DistrictCode { get; set; }
        ///<summary>
        ///	配送地址	
        ///</summary> 
        public string ShippingAddress { get; set; }
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
        ///	厅店名称	
        ///</summary> 
        public string DealerName { get; set; }
    }
}
