using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 日志工厂扩展处理接口
    /// 用来封装不同的日志处理
    /// </summary>
    public interface ILoggerFactoryExtensionHandler
    {
        /// <summary>
        /// 执行处理
        /// </summary>
        /// <param name="factory">日志工厂</param>
        /// <param name="loggerName">日志名称</param>
        /// <param name="setting">日志设置</param>
        void Execute(ILoggerFactory factory,string loggerName,LoggerSetting setting);
    }
}
