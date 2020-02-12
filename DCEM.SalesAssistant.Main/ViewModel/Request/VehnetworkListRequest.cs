using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class VehnetworkListRequest : PageBaseRequestModel
    {
        public string SearchKey { get; set; }
        public string Status { get; set; }
        public string DealerId { get; set; }
    }
    /// <summary>
    /// 修改开票信息身份证和发票字段实体参数
    /// </summary>
    public class UpdateCardRequest { 
        /// <summary>
        /// 主键id
        /// </summary>
        public Guid id { get; set; }
        /// <summary>
        /// 开卡人姓名
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 性别
        /// </summary>
        public string sex { get; set; }
        /// <summary>
        /// 身份证号码
        /// </summary>
        public string idcard { get; set; }
        /// <summary>
        /// 身份证地址
        /// </summary>
        public string idaddress { get; set; }
        /// <summary>
        /// 开票名称
        /// </summary>
        public string fpname { get; set; }
        /// <summary>
        /// 发票号码
        /// </summary>
        public string fpnumber { get; set; }
        /// <summary>
        /// 开票时间
        /// </summary>
        public string time { get; set; }
    }

    public class VoiceRequest { 
        /// <summary>
        /// 手机号码
        /// </summary>
        public string phone { get; set; }
        /// <summary>
        /// 语音文本内容
        /// </summary>
        public string content { get; set; }
    }
}
