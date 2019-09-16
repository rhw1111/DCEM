﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace MSLibrary.Xrm
{
    /// <summary>
    /// Crm动作参数
    /// </summary>
    [DataContract]
    public class CrmActionParameter
    {
        /// <summary>
        /// 参数名称
        /// </summary>
        [DataMember]
        public string Name { get; set; }

        /// <summary>
        /// 参数值
        /// </summary>
        [DataMember]
        public object Value { get; set; }
    }
}
