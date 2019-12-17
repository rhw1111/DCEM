using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MSLibrary.Configuration;

namespace DCEM.ServiceAssistantService.Main
{
    /// <summary>
    /// 商品交易中心配置信息
    /// </summary>
    [DataContract]
    public class TCenterConfiguration
    {
        /// <summary>
        /// 请求地址
        /// </summary>
        [DataMember]
        public string Url { get; set; }
        /// <summary>
        /// 鉴权配置
        /// </summary>
        [DataMember]
        public Dictionary<string, string> AuthInfos { get; set; }

    }
}
