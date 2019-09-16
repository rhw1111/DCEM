using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace MSLibrary.Configuration
{
    /// <summary>
    /// 核心配置信息
    /// </summary>
    [DataContract]
    public class CoreConfiguration
    {
        /// <summary>
        /// 连接字符串列表
        /// </summary>
        [DataMember]
        public Dictionary<string, string> Connections { get; set; }
        /// <summary>
        /// DI容器设置
        /// </summary>
        [DataMember]
        public DISetting DISetting { get; set; }
        /// <summary>
        /// 日志设置
        /// </summary>
        [DataMember]
        public LoggerSetting LoggerSetting { get; set; }

    }
    /// <summary>
    /// DI容器设置
    /// </summary>
    [DataContract]
    public class DISetting
    {
        /// <summary>
        /// 自动加载要搜索的程序集名称集合
        /// </summary>
        [DataMember]
        public string[] SearchAssemblyNames { get; set; }
    }

    /// <summary>
    /// 日志设置
    /// </summary>
    [DataContract]
    public class LoggerSetting
    {
        /// <summary>
        /// 应用程序要添加的日志处理名称
        /// </summary>
        [DataMember]
        public string[] LoggerNames { get; set; }
        /// <summary>
        /// Log4net设置
        /// </summary>
        [DataMember]
        public Log4netSetting Log4netSetting { get; set; }
    }

    /// <summary>
    /// 针对Log4net的设置
    /// </summary>
    [DataContract]
    public class Log4netSetting
    {
        /// <summary>
        /// log4net配置文件路径
        /// </summary>
        [DataMember]
        public string Log4netConfiguarationUrl { get; set; }
        /// <summary>
        /// log4net日志集合
        /// </summary>
        [DataMember]
        public Log4netNameItem[] Log4netNames { get; set; }
    }

    /// <summary>
    /// 针对每个Log4net日志的配置
    /// </summary>
    [DataContract]
    public class Log4netNameItem
    {
        /// <summary>
        /// 名称
        /// </summary>
        [DataMember]
        public string Name { get; set; }
        /// <summary>
        /// 接受的类型名称
        /// </summary>
        [DataMember]
        public string AcceptTypeName { get; set; }
    }

}
