using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class SmallOrderListRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 小订订单Id
        /// </summary>
        public string mcs_smallorderid { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_mobilephone { get; set; }

        /// <summary>
        /// 小订单号
        /// </summary>
        public string mcs_name { get; set; }
    }
}
