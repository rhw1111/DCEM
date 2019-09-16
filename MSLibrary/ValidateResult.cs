using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace MSLibrary
{
    /// <summary>
    /// 检查结果
    /// 适用于返回结果是正确或错误的操作
    /// </summary>
    [DataContract]
    public class ValidateResult
    {
        /// <summary>
        /// 是否正确
        /// </summary>
        [DataMember]
        public bool Result { get; set; }
        /// <summary>
        /// 结果描述
        /// </summary>
        [DataMember]
        public string Description { get; set; }
    }
}
