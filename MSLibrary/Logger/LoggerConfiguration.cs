﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 日志配置
    /// 表示系统所有日志管理的配置信息
    /// </summary>
    [DataContract]
    public class LoggerConfiguration
    {
        /// <summary>
        /// 全局日志级别设置
        /// </summary>
        [DataMember]
        public Dictionary<string,LogLevel> GlobalLogLevels
        {
            get;set;
        }
        /// <summary>
        /// 日志提供方列表
        /// </summary>
        [DataMember]
        public Dictionary<string, LoggerItemConfiguration> Providers
        {
            get;set;
        }

    }

    /// <summary>
    /// 日志项配置
    /// </summary>
    [DataContract]
    public class LoggerItemConfiguration
    {
        /// <summary>
        /// 日志提供方类型
        /// </summary>
        [DataMember]
        public string Type { get; set; }
        /// <summary>
        /// 配置信息
        /// </summary>
        [DataMember]
        public JObject Configuration { get; set; }
        /// <summary>
        /// 日志级别设置
        /// </summary>
        [DataMember]
        public Dictionary<string, LogLevel> LogLevels { get; set; }
    }
}
