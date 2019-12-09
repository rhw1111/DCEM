using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Response
{
    /// <summary>
    /// 订单取消返回参数
    /// </summary> 
    public class OrderCancelResponse : ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { set; get; }
    }
}
