using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单创建接口返回参数
    /// </summary>   
    public class CreateOrderResponse : ExcuteResutResponse
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
    }

    /// <summary>
    /// 企业客户订单创建接口返回参数
    /// </summary>   
    public class BaseCreateOrderResponse : ExcuteResutResponse
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
        /// <summary>
        /// 订单编号
        /// </summary>
        public int OrderId { set; get; }
    }
}
