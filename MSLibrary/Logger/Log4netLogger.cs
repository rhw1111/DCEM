using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Logging;
using log4net;
using log4net.Config;
using log4net.Repository;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 基于log4net的Logger
    /// </summary>
    public class Log4netLogger : ILogger
    {
        /// <summary>
        /// log4net日志列表
        /// </summary>
        private ILog _log;

        private string _loggerName;
        /// <summary>
        /// 接受的自定义类型
        /// </summary>
        private string _acceptTypeName;

        public Log4netLogger(string configUrl, string loggerName, string acceptTypeName)
        {
            _loggerName = loggerName;
            _acceptTypeName = acceptTypeName;
            ILoggerRepository repository = null;
            repository = LogManager.CreateRepository(loggerName);

            XmlConfigurator.Configure(repository, new FileInfo(configUrl));

            _log = LogManager.GetLogger(repository.Name, loggerName);

        }


        public IDisposable BeginScope<TState>(TState state)
        {
            return (new LoggerExternalScopeProvider()).Push(state);
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            string strMessage=string.Empty;
            string strContent = null;

            if (_acceptTypeName!=typeof(string).FullName && state.GetType().FullName!=_acceptTypeName)
            {
                return;
            }

            if (_acceptTypeName == typeof(string).FullName)
            {
                if (exception != null)
                {
                    strContent = $@"Message:{exception.Message},StackTrace:{exception.StackTrace}";
                }
                else
                {
                    strContent = formatter(state, exception);
                }

                
                //if (ConsoleLogScope.Current != null)
                //{
                //    strMessage = $@"{_loggerName}[{eventId.Id}]
                //                    =>{ConsoleLogScope.Current.ToString()}
                //                    {strContent}              
                //               ";
                //}
                //else
                //{
                    strMessage = $@"{_loggerName}[{eventId.Id}]
                                    {strContent}              
                               ";
                //}
            }


            if (_log==null)
            {
                throw new Exception($"Notfound {_loggerName} ILog in Log4netLogger");
            }

            switch(logLevel)
            {
                case LogLevel.Critical:
                    if (_log.IsFatalEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Fatal($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Fatal(state);
                        }
                    }
                    break;
                case LogLevel.Debug:
                    if (_log.IsDebugEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Debug($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Debug(state);
                        }
                    }
                    break;
                case LogLevel.Error:
                    if (_log.IsErrorEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Error($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Error(state);
                        }
                    }
                    break;
                case LogLevel.Information:
                    if (_log.IsInfoEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Info($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Info(state);
                        }
                    }
                    break;
                case LogLevel.Trace:
                    if (_log.IsInfoEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Info($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Info(state);
                        }
                    }
                    break;
                case LogLevel.Warning:
                    if (_log.IsWarnEnabled)
                    {
                        if (_acceptTypeName == typeof(string).FullName)
                        {
                            _log.Warn($"{logLevel.ToString()}:{strMessage}");
                        }
                        else
                        {
                            _log.Warn(state);
                        }
                    }
                    break;
                default:
                    break;
            }
            

            

        }
    }


}
