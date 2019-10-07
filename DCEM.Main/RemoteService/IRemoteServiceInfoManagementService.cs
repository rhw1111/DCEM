using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
    /// <summary>
    /// 远程服务信息管理服务
    /// </summary>
    public interface IRemoteServiceInfoManagementService
    {
        /// <summary>
        /// 获取指定名称的远程服务信息
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<RemoteServiceDescriptionInfo> GetServiceInfo(string name);
    }

    /// <summary>
    /// 远程服务信息
    /// </summary>
    [DataContract]
    public class RemoteServiceDescriptionInfo
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
        /// 身份信息生成类型
        /// </summary>
       [DataMember]

        public string AuthInfoType { get; set; }
    }
}
