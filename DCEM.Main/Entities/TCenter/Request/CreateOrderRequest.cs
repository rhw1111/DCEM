
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    ///<summary>
    /// 创建订单请求参数
    ///</summary>           
    public class CreateOrderRequest : RequestBase
    {
        ///<summary>
        ///	订单主信息
        ///</summary> 
        public OrderData OrderData { get; set; }
        
        ///<summary>
        ///订单包含商品集合信息	
        ///</summary> 
        public ICollection<ProductModel> Products { get; set; }
    }
    #region 公共类
    /// <summary>
    /// 订单主数据
    /// </summary>
    public class OrderData
    {
        /// <summary>
        /// 商城订单编号
        /// </summary>
        public string OrderCode { get; set; }
        ///<summary>
        ///	用户ID	
        ///</summary> 
        public long UserId { get; set; }
        ///<summary>
        ///	用户名称	
        ///</summary> 
        public string UserName { get; set; }
        //订单类型：0C端用户订单1：企业订单
        public int OrderType { get; set; } = 0;
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
        ///	购车方名称	
        ///</summary> 
        public string CarBuyerName { get; set; }
        ///<summary>
        ///	购车方联系电话	
        ///</summary> 
        public string CarBuyerPhone { get; set; }
        /// <summary>
        /// 购车方证类型  身份证=1 港澳通行证=2,护照=3，企业纳税识别号=4 台湾通行证=5

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
        public int  PaymentStatus { get; set; }
        /// <summary>
        /// 支付状态集合 
        /// </summary>
        public List<PaymentStatusData> PaymentStatusList { get; set; }
        ///<summary>
        ///	订单总金额	
        ///</summary> 
        public decimal CashTotal { get; set; }
        ///<summary>
        ///	线上应收金额	
        ///</summary> 
        public decimal TotalDeposiAmount { get; set; }
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
        public decimal Finalpayment { get; set; }
        ///<summary>
        ///	积分总额	
        ///</summary> 
        public decimal InstallmentTotal { get; set; }
        ///<summary>
        ///	实收积分	
        ///</summary> 
        public decimal ReceivedIntegral { get; set; }
        ///<summary>
        ///	积分不足，现金支付金额	
        ///</summary> 
        public decimal CashPayment { get; set; }
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
        ///	企业客户订单交车地址	
        ///</summary> 
        public string EnterpriseDeliveryAdderss { get; set; }
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
        /// <summary>
        /// 企业客户编号
        /// </summary>
        public string EnterpriseCode { get; set; }
        /// <summary>
        /// 企业客户公司地址
        /// </summary>
        public string CompanyAddress { get; set; }
    }

    #endregion

    public class PaymentStatusData {
        /// <summary>
        /// 支付状态：不需要支付=0, 等待支付=1 支付成功=3  2019-4-3新增
        /// </summary>
        public int Status { get; set; }
        /// <summary>
        /// 处理时间 时间格式字符串：yyyy-MM-dd HH:mm:ss
        /// </summary>
        public DateTime DateTime { get; set; }
    }
}

