using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 子订单取消返回参数
    /// </summary> 
    public class SubOrderCancelApplyResponse : ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { set; get; }
    }
}
