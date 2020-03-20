using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.DI;
using MSLibrary.AspNet.Middleware;
using MSLibrary.Logger;

namespace DCEM.LoggerService.Main.AspNet.Middleware.Application
{
    /// <summary>
    /// Http上下文转换成日志
    /// 本服务需要转换为CommonLogLocalContent
    /// </summary>
    [Injection(InterfaceType = typeof(IAppHttpContextLogConvert), Scope = InjectionScope.Singleton)]
    public class AppHttpContextLogConvert : IAppHttpContextLogConvert
    {
        /// <summary>
        /// 记录的最大请求内容长度
        /// 超过长度的，将截取请求内容
        /// </summary>
        private const long _maxRequestLength=102400;
        /// <summary>
        /// 记录的最大响应内容长度
        /// 超过长度的，将截取响应内容
        /// </summary>
        private const long _maxResponseLength = 102400;
        public async Task<object> Convert(HttpContextData data)
        {
            byte[] bufferBytes = new byte[1024];
            string strRequestBody = null;
            string strResponseBody = null;
            //尝试获取请求内容和响应内容
            if (data.Request != null )
            {
                using (data.Request)
                {
                    List<byte> requestBytes = new List<byte>();


                    long totalLength = 0;
                    while (true)
                    {
                        int bufSize = 1024;
                        if (totalLength+1024>_maxRequestLength)
                        {
                            bufSize = (int)(_maxRequestLength - totalLength);
                        }
                        var length = await data.Request.ReadAsync(bufferBytes, 0, bufSize);
                        totalLength = totalLength + length;
                        requestBytes.AddRange(bufferBytes.Take(length));
                        if (length != 1024)
                        {
                            break;
                        }
                    }

                    strRequestBody = UTF8Encoding.UTF8.GetString(requestBytes.ToArray());
                }
            }

            if (data.Response!=null)
            {
                using (data.Response)
                {
                    List<byte> responseBytes = new List<byte>();

                    long totalLength = 0;
                    while (true)
                    {
                        int bufSize = 1024;
                        if (totalLength + 1024 > _maxResponseLength)
                        {
                            bufSize = (int)(_maxResponseLength - totalLength);
                        }

                        var length = await data.Response.ReadAsync(bufferBytes, 0, bufSize);
                        totalLength = totalLength + length;
                        responseBytes.AddRange(bufferBytes.Take(length));
                        if (length != 1024)
                        {
                            break;
                        }
                    }

                    strResponseBody = UTF8Encoding.UTF8.GetString(responseBytes.ToArray());
                }
            }

            string strActionName = string.Empty;


            CommonLogLocalContent content = new CommonLogLocalContent() { RequestUri ="", ActionName = strActionName, RequestBody = strRequestBody, ResponseBody = strResponseBody, Message = "" };
            return await Task.FromResult(content);
        }
    }
}
