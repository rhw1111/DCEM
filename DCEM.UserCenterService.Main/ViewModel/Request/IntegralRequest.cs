using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class IntegralRequest
    {
        public string UserId { get; set; }
        /// <summary>
        /// 积分埋点定义编号
        /// </summary>
        public string IntegralPointCode { get; set; }
        /// <summary>
        /// 积分数量
        /// </summary>
        public string Num { get; set; }
        public string OrderNumber { get; set; }
        /// <summary>
        /// 来源系统：官网-1、商城-2、app-3、小程序-4、呼叫中心-5、销服系统-6、车联网-7
        /// </summary>
        public int SourceSystem { get; set; }
        public string Description { get; set; }
        public string TransactionTime { get; set; }
    }
}
