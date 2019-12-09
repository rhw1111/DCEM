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
    public class TCenterConfiguration : CoreConfiguration
    {
        /// <summary>
        /// 商品交易中心设置
        /// </summary>
        [DataMember]
        public TCenterSetting TCenterSetting { get; set; }

    }

    /// <summary>
    /// 商品交易中心设置
    /// </summary>
    [DataContract]
    public class TCenterSetting
    {
        /// <summary>
        /// 请求地址
        /// </summary>
        [DataMember]
        public string Url { get; set; }
        /// <summary>
        /// 应用ID
        /// </summary>
        [DataMember]
        public string AppId { get; set; }
    }
}
