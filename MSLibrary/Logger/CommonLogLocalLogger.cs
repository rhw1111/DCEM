using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using System.Runtime.Serialization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using MSLibrary;
using MSLibrary.Transaction;
using MSLibrary.DI;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 基于通用日志本地记录的日志
    /// 供日志服务使用
    /// </summary>
    public class CommonLogLocalLogger : ILogger
    {

        private ICommonLogLoclEnvInfoGeneratorService _commonLogLoclEnvInfoGeneratorService;

        public CommonLogLocalLogger(ICommonLogLoclEnvInfoGeneratorService commonLogLoclEnvInfoGeneratorService)
        {
            _commonLogLoclEnvInfoGeneratorService = commonLogLoclEnvInfoGeneratorService;
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return ConsoleLogScope.Push("", state);
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            var strUserInfo = _commonLogLoclEnvInfoGeneratorService.GenerateUserInfo();

            if (strUserInfo == null)
            {
                strUserInfo = string.Empty;
            }

            if (state is string)
            {

                CommonLog log = null;
                try
                {
                    log = new CommonLog()
                    {
                        ID = Guid.NewGuid(),
                        Level = (int)logLevel,
                        ParentID = Guid.Empty,
                        ParentActionName = string.Empty,
                        PreviousID = Guid.Empty,
                        ActionName = string.Empty,
                        RequestBody = string.Empty,
                        RequestUri = string.Empty,
                        ContextInfo = strUserInfo,
                        Root = true,
                        Message = state as string
                    };
                }
                catch
                {

                }

                Task.Run(async () =>
                {
                    if (log != null)
                    {
                        await log.AddLocal();
                    }
                });


            }
            else if (state is CommonLogLocalContent)
            {

                var logContent = state as CommonLogLocalContent;

                CommonLog log = null;
                try
                {
                    log = new CommonLog()
                    {
                        ID = Guid.NewGuid(),
                        Level = (int)logLevel,
                        ParentID = Guid.Empty,
                        ParentActionName = string.Empty,
                        PreviousID = Guid.Empty,
                        ActionName = logContent.ActionName,
                        RequestBody = logContent.RequestBody,
                        RequestUri = logContent.RequestUri,
                        ContextInfo = strUserInfo,
                        Root = true,
                        Message = logContent.Message
                    };
                }
                catch
                {

                }

                Task.Run(async () =>
                {
                    if (log != null)
                    {
                        await log.AddLocal();
                    }
                });


            }
            else
            {
                if (formatter != null)
                {

                    CommonLog log = null;
                    try
                    {

                        log = new CommonLog()
                        {
                            ID = Guid.NewGuid(),
                            Level = (int)logLevel,
                            ParentID = Guid.Empty,
                            ParentActionName = string.Empty,
                            PreviousID = Guid.Empty,
                            ActionName = string.Empty,
                            RequestBody = string.Empty,
                            RequestUri = string.Empty,
                            ContextInfo = strUserInfo,
                            Root = true,
                            Message = formatter(state, exception)
                        };

                    }
                    catch
                    {

                    }

                    Task.Run(async () =>
                    {
                        if (log != null)
                        {
                            await log.AddLocal();
                        }
                    });



                }
            }

        }
    }


    /// <summary>
    /// 本地通用日志环境信息生成服务
    /// </summary>
    public interface ICommonLogLoclEnvInfoGeneratorService
    {
        /// <summary>
        /// 生成用户信息
        /// </summary>
        /// <returns></returns>
        string GenerateUserInfo();
    }


    /// <summary>
    /// 本地通用日志内容
    /// </summary>
    [DataContract]
    public class CommonLogLocalContent
    {
        /// <summary>
        /// 动作名称
        /// </summary>
        [DataMember]
        public string ActionName { get; set; }

        /// <summary>
        /// 请求内容
        /// </summary>
        [DataMember]
        public string RequestBody
        {
            get; set;
        }

        /// <summary>
        /// 请求路径
        /// </summary>
        [DataMember]
        public string RequestUri
        {
            get; set;
        }


        /// <summary>
        /// 内容
        /// </summary>
        [DataMember]
        public string Message
        {
            get; set;
        }

    }


}
