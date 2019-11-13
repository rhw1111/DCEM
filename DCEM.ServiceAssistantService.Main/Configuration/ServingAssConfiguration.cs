using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using MSLibrary.Configuration;

namespace DCEM.ServiceAssistantService.Main
{
    /// <summary>
    /// 服务助手配置信息
    /// </summary>
    [DataContract]
    public class ServingAssConfiguration : CoreConfiguration
    {
        /// <summary>
        /// Dynamic CRM链接设置
        /// </summary>
        [DataMember]
        public DyCRMSetting DyCRMSetting { get; set; }

    }

    /// <summary>
    /// Dynamic CRM链接设置
    /// </summary>
    [DataContract]
    public class DyCRMSetting
    {
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public int CrmApiMaxRetry { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string CrmApiVersion { get; set; }
        /// <summary>
        /// 认证方式
        /// </summary>
        [DataMember]
        public string TokenServiceType { get; set; }
        
        /// <summary>
        /// adfs请求地址
        /// </summary>
        [DataMember]
        public string AdfsUrl { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string CrmUrl { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string ClientId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string ClientSecret { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string UserName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string Password { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember]
        public string RedirectUri { get; set; }
    }
}
