using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main.Entities.TCenter.Response.Payment
{
    public class BaseRefundResponse
    {
        /// <summary>
        /// 返回状态码  SUCCESS/FAIL
        /// </summary>
        public string return_code { get; set; }
        /// <summary>
        /// 返回信息
        /// </summary>
        public string return_msg { get; set; }
    }
}
