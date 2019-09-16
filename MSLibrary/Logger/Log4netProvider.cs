using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using Microsoft.Extensions.Logging;
using MSLibrary.Configuration;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 基于Log4net的Provider
    /// </summary>
    public class Log4netProvider : ILoggerProvider
    {
        private static ConcurrentDictionary<string, Log4netLogger> _loggers = new ConcurrentDictionary<string, Log4netLogger>();

        private string _configUrl;
        private string _defaultCategory;
        public Log4netProvider(string configUrl, params Log4netNameItem[] categoryNames)
        {
            _configUrl = configUrl;
            foreach (var nameItem in categoryNames)
            {
                var logger = new Log4netLogger(_configUrl, nameItem.Name,nameItem.AcceptTypeName);

                _loggers[nameItem.Name] = logger;
            }

            _defaultCategory = categoryNames[0].Name;
        }
        public ILogger CreateLogger(string categoryName)
        {
            if (_loggers.TryGetValue(categoryName,out Log4netLogger logger))
            {
                return logger;
            }

            logger= _loggers[_defaultCategory];
            return logger;
        }



        public void Dispose()
        {
        }
    }
}
