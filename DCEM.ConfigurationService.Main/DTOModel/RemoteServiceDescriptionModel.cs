using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace DCEM.ConfigurationService.Main.DTOModel
{
    /// <summary>
    /// 服务描述模型
    /// </summary>
    [DataContract]
    public class RemoteServiceDescriptionModel
    {
        [DataMember]
        public Guid ID { get; set; }
        /// <summary>
        /// 服务名称
        /// </summary>
        [DataMember]
        public string ServiceName { get; set; }
        /// <summary>
        /// 服务地址
        /// </summary>
        [DataMember]
        public string ServiceAddress { get; set; }
        /// <summary>
        /// 服务http头中身份信息生成类型
        /// </summary>
        [DataMember]
        public string AuthInfoHttpHeaderType { get; set; }
    }
}
