using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using MSLibrary.AspNet.Middleware.Application;
using Microsoft.AspNetCore.Http.Extensions;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.AspNet.Middleware;
using MSLibrary.Logger;

namespace DCEM.Main.AspNet.Middleware.Application
{
    /// <summary>
    /// Http上下文转换成日志对象
    /// 本系统中转换为CommonLogLogger
    /// </summary>
    [Injection(InterfaceType = typeof(IAppHttpContextLogConvert), Scope = InjectionScope.Singleton)]
    public class AppHttpContextLogConvert : IAppHttpContextLogConvert
    {
        /// <summary>
        /// 记录的最大请求内容长度
        /// 超过长度的，将截取请求内容
        /// </summary>
        private const long _maxRequestLength = 102400;

        public async Task<object> Convert(HttpContextData data)
        {
            CommonLogContent content = new CommonLogContent();
            content.ParentID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
            content.ParentActionName = ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);
            content.ActionName = data.RequestPath;
            content.Message = string.Empty;

            byte[] bufferBytes = new byte[1024];
            string strRequestBody = string.Empty;
            string strResponseBody = string.Empty;
            //尝试获取请求内容和响应内容
            if (data.Request!=null)
            {
                using (data.Request)
                {
                    List<byte> requestBytes = new List<byte>();

                    while (true)
                    {
                        var length = await data.Request.ReadAsync(bufferBytes, 0, 1024);
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
                    
                    while (true)
                    {
                        var length = await data.Response.ReadAsync(bufferBytes, 0, 1024);
                        responseBytes.AddRange(bufferBytes.Take(length));
                        if (length != 1024)
                        {
                            break;
                        }
                    }

                    strResponseBody = UTF8Encoding.UTF8.GetString(responseBytes.ToArray());
            
                }
            }

            content.RequestBody = strRequestBody;
            content.ResponseBody = strResponseBody;
            content.RequestUri = data.RequestUri;
            content.Message = string.Empty;

            return await Task.FromResult(content);
        }
    }
}
