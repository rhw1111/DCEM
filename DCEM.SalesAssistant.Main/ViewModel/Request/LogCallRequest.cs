using System;
using System.Collections.Generic;
using System.Text;
/// <summary>
/// logcall 请求参数model
/// </summary>
namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class LogCallRequest: PageBaseRequestModel
    {

        /// <summary>
        /// 唯一线索主键ID
        /// </summary>
        public string entityid { get; set; }


        /// <summary>
        /// logcall主键ID
        /// </summary>
        public string mcs_logcallid { get; set; }

        /// <summary>
        /// 回访内容
        /// </summary>
        public string mcs_content { get; set; }

        /// <summary>
        /// 回访结果备注
        /// </summary>
        public string mcs_results { get; set; }

        /// <summary>
        /// 回访时间
        /// </summary>
        public DateTime? mcs_visittime { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_fullname { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_mobilephone { get; set; }

    }
}
