using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单详情查询请求参数
    /// </summary>   
    public class GetOrderDetailRequest : RequestBase
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
    }
}
