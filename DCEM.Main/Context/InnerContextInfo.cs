using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace DCEM.Main.Context
{
    /// <summary>
    /// 内部服务使用的上下文信息
    /// 在内部服务请求过程中传递
    /// </summary>
    [DataContract]
    public class InnerContextInfo
    {
        [DataMember]
        public Guid UserID { get; set; }

        [DataMember]
        public int Lcid { get; set; }

        [DataMember]
        public int TimezoneOffset { get; set; }
    }
}
