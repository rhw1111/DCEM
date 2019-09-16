using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;
using MSLibrary.DI;

namespace MSLibrary.Logger.LoggerFactoryExtensionHandlers
{
    /// <summary>
    /// 针对log4net的日志工厂扩展处理
    /// </summary>
    [Injection(InterfaceType = typeof(LoggerFactoryExtensionHandlerForLog4net), Scope = InjectionScope.Singleton)]
    public class LoggerFactoryExtensionHandlerForLog4net : ILoggerFactoryExtensionHandler
    {
        public void Execute(ILoggerFactory factory, string loggerName, LoggerSetting setting)
        {
            Log4netProvider logProvider = new Log4netProvider(setting.Log4netSetting.Log4netConfiguarationUrl, setting.Log4netSetting.Log4netNames);
            factory.AddProvider(logProvider);
        }
    }
}
