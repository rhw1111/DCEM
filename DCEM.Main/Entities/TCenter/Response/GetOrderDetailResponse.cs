
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单详情查询返回参数
    /// </summary>   
    public class GetOrderDetailResponse : ResponseBase
    {
        ///<summary>
        ///	订单主信息	
        ///</summary> 
        public ReturnOrderData OrderData { get; set; }
        ///<summary>
        ///	订单包含商品集合信息	
        ///</summary> 
        public ICollection<ProductModel> Products { get; set; }
    }
    /// <summary>
    /// 返回订单的主数据实体
    /// </summary>
    public class ReturnOrderData : OrderData
    {
        ///<summary>
        ///	订单ID	
        ///</summary> 
        public int OrderId { get; set; }    
        ///<summary>
        ///	订单编号	
        ///</summary> 
        public string OrderCode { get; set; }
        ///<summary>
        ///	1.状态（待审批（定金没交足），2审批中（审批交足），3已通过，4已驳回，5订单取消，6订单退货 7交易完成  	
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	0-不需要支付,1-等待支付,2-支付确认中3-支付成功,4-支付失败	
        ///</summary> 
        public int PaymentStatus { get; set; }
    }
}