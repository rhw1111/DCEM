using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;
using MSLibrary.DI;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 日志工厂扩展处理主处理
    /// 通过该主处理来分发不同名称的处理
    /// </summary>
    [Injection(InterfaceType =typeof(ILoggerFactoryExtensionHandler),Scope = InjectionScope.Singleton)]
    public class LoggerFactoryExtensionMainHandler : ILoggerFactoryExtensionHandler
    {
        private static Dictionary<string, ILoggerFactoryExtensionHandler> _handlerList = new Dictionary<string, ILoggerFactoryExtensionHandler>();
        /// <summary>
        /// 处理列表
        /// </summary>
        public static Dictionary<string, ILoggerFactoryExtensionHandler> HandlerList
        {
            get
            {
                return _handlerList;
            }
        }
        public void Execute(ILoggerFactory factory, string loggerName,LoggerSetting setting)
        {
            if (_handlerList.TryGetValue(loggerName,out ILoggerFactoryExtensionHandler handler))
            {
                handler.Execute(factory, loggerName, setting);
            }
        }
    }
}
