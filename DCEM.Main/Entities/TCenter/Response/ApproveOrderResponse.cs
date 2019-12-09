using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 企业订单审核结果 
    /// </summary>
    public class ApproveOrderResponse : ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { set; get; }
    }
}
