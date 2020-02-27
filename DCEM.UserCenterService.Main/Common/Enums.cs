using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.Common
{
    public static class Enums
    {
        /// <summary>
        /// 小订订单状态
        /// </summary>
        public enum SmallOrderStatus
        {
            /// <summary>
            /// 待支付
            /// </summary>
            Unpaid = 0,
            /// <summary>
            /// 已支付
            /// </summary>
            Paid = 1,
            /// <summary>
            /// 申请退订
            /// </summary>
            ApplyForUnsubscribe = 2,
            /// <summary>
            /// 已关闭
            /// </summary>
            Closed = 3,
            /// <summary>
            /// 已支付部分退订
            /// </summary>
            PartiallyCancelled = 4
        }
    }
}
