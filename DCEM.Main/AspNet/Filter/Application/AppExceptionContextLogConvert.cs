using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MSLibrary.DI;
using MSLibrary.AspNet.Filter.Application;
using MSLibrary.Logger;

namespace DCEM.Main.AspNet.Filter.Application
{
    /// <summary>
    /// 将Exception过滤器上下文转换为日志
    /// 本系统中转换为CommonLogLogger
    /// </summary>
    [Injection(InterfaceType = typeof(IAppExceptionContextLogConvert), Scope = InjectionScope.Singleton)]
    public class AppExceptionContextLogConvert : IAppExceptionContextLogConvert
    {
        /// <summary>
        /// 记录的最大请求内容长度
        /// 超过长度的，将截取请求内容
        /// </summary>
        private const long _maxRequestLength = 102400;

        public async Task<object> Do(ExceptionContext context)
        {
            byte[] bufferBytes = new byte[1024];
            string strRequestBody = null;
            //尝试获取请求内容和响应内容
            if (context.HttpContext.Request != null && context.HttpContext.Request.Body != null && context.HttpContext.Request.Body.CanRead && context.HttpContext.Request.Body.CanSeek)
            {
                using (MemoryStream requestStream = new MemoryStream())
                {
                    List<byte> requestBytes = new List<byte>();
                    context.HttpContext.Request.Body.Position = 0;
                    await context.HttpContext.Request.Body.CopyToAsync(requestStream);
                    requestStream.Position = 0;
                    long totalLength = 0;

                    while (true)
                    {
                        int bufSize = 1024;
                        if (totalLength + 1024 > _maxRequestLength)
                        {
                            bufSize = (int)(_maxRequestLength - totalLength);
                        }

                        var length = await requestStream.ReadAsync(bufferBytes, 0, bufSize);
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


            
            CommonLogContent content = new CommonLogContent() { RequestUri = context.HttpContext.Request.Path.Value, ActionName = context.ActionDescriptor.DisplayName.Split("(")[0].Trim(), Message = $"Unhandle Error,\nmessage:{context.Exception.Message},\nstacktrace:{context.Exception.StackTrace}", RequestBody = strRequestBody, ResponseBody = "" };
            return await Task.FromResult(content);
        }
    }
}
