using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 父日志信息
    /// 服务间传递使用
    /// </summary>
    [DataContract]
    public class ParentLogInfo
    {
        /// <summary>
        /// 父日志ID
        /// </summary>
        [DataMember]
        public Guid ParentID { get; set; }
        /// <summary>
        /// 父日志动作名称
        /// </summary>
        [DataMember]
        public string ParentActionName { get; set; }
        /// <summary>
        /// 父日志上下文信息
        /// </summary>
        [DataMember]
        public string ContextInfo { get; set; }
        /// <summary>
        /// 前一层级ID
        /// </summary>
        [DataMember]
        public Guid PreLevelID { get; set; }
    }
}
