using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;
using MSLibrary.DI;

namespace MSLibrary.Logger.LoggerFactoryExtensionHandlers
{
    /// <summary>
    /// 针对windows事件的日志工厂扩展处理
    /// </summary>
    [Injection(InterfaceType = typeof(LoggerFactoryExtensionHandlerForEvent), Scope = InjectionScope.Singleton)]
    public class LoggerFactoryExtensionHandlerForEvent: ILoggerFactoryExtensionHandler
    {
        public void Execute(ILoggerFactory factory, string loggerName, LoggerSetting setting)
        {
            EventProvider logProvider = new EventProvider();
            factory.AddProvider(logProvider);
        }
    }
}
