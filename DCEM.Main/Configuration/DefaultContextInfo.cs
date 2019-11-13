using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace DCEM.Main.Configuration
{
    /// <summary>
    /// 默认上下文信息
    /// </summary>
    [DataContract]
    public class DefaultContextInfo
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        [DataMember]
        public string UserID { get; set; }
        /// <summary>
        /// 语言Id
        /// </summary>
        [DataMember]
        public int Lcid { get; set; }
        /// <summary>
        /// 时区偏移
        /// </summary>
        [DataMember]
        public int TimezoneOffset { get; set; }
    }
}
