using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    ///<summary>
    /// 订单支付完成确认请求参数
    ///</summary> 
    public class OrderPayedConfrimRequest : RequestBase
    {
        ///<summary>
        ///	订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        ///<summary>
        ///	订单总金额
        ///</summary> 
        public decimal Cashtoal { get; set; }
        ///<summary>
        ///	线上应收金额金额
        ///</summary> 
        public decimal TotalDeposiAmount { get; set; }
        ///<summary>
        ///	线上已收金额金额
        ///</summary> 
        public decimal ReceivedDeposiAmount { get; set; }
        ///<summary>
        ///	已收货款金额（不含积分不够现金支付部分）	
        ///</summary> 
        public decimal ReceivableAmount { get; set; }
        ///<summary>
        ///	权益项抵扣金额
        ///</summary> 
        public decimal DeductionAmount { get; set; }
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

    }
}
