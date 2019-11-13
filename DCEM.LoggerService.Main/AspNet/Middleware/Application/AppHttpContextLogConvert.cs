using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.DI;
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
        public async Task<object> Convert(HttpContext context)
        {
            byte[] bufferBytes = new byte[1024];
            string strRequestBody = null;
            string strResponseBody = null;
            //尝试获取请求内容和响应内容
            if (context.Request != null && context.Request.Body != null && context.Request.Body.CanRead && context.Request.Body.CanSeek)
            {
                using (MemoryStream requestStream = new MemoryStream())
                {
                    List<byte> requestBytes = new List<byte>();
                    context.Request.Body.Position = 0;
                    await context.Request.Body.CopyToAsync(requestStream);
                    requestStream.Position = 0;

                    while (true)
                    {
                        var length = await requestStream.ReadAsync(bufferBytes, 0, 1024);
                        requestBytes.AddRange(bufferBytes.Take(length));
                        if (length != 1024)
                        {
                            break;
                        }
                    }

                    strRequestBody = UTF8Encoding.UTF8.GetString(requestBytes.ToArray());
                }
            }

            if (context.Response != null && context.Response.Body != null && context.Response.Body.CanRead && context.Response.Body.CanSeek)
            {
                using (MemoryStream responseStream = new MemoryStream())
                {
                    List<byte> responseBytes = new List<byte>();
                    context.Response.Body.Position = 0;
                    await context.Response.Body.CopyToAsync(responseStream);
                    responseStream.Position = 0;

                    while (true)
                    {
                        var length = await responseStream.ReadAsync(bufferBytes, 0, 1024);
                        responseBytes.AddRange(bufferBytes.Take(length));
                        if (length != 1024)
                        {
                            break;
                        }
                    }

                    strResponseBody = UTF8Encoding.UTF8.GetString(responseBytes.ToArray());
                }
            }
            CommonLogContent content = new CommonLogContent() { RequestUri = context.Request.Path.Value, ActionName = "", RequestBody = strRequestBody, ResponseBody = strResponseBody, Message = "" };
            return await Task.FromResult(content);
        }
    }
}
