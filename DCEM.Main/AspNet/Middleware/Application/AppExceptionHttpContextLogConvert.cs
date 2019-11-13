using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.DI;
using MSLibrary.Logger;

namespace DCEM.Main.AspNet.Middleware.Application
{
    /// <summary>
    /// Http上下文转换成日志对象
    /// 本系统中转换为CommonLogLogger
    /// </summary>
    [Injection(InterfaceType = typeof(IAppExceptionHttpContextLogConvert), Scope = InjectionScope.Singleton)]
    public class AppExceptionHttpContextLogConvert : IAppExceptionHttpContextLogConvert
    {
        /// <summary>
        /// 记录的最大请求内容长度
        /// 超过长度的，将截取请求内容
        /// </summary>
        private const long _maxRequestLength = 102400;

        public async Task<object> Convert(HttpContext context)
        {
            byte[] bufferBytes = new byte[1024];
            string strRequestBody = null;
            //尝试获取请求内容和响应内容
            if (context.Request != null && context.Request.Body != null && context.Request.Body.CanRead && context.Request.Body.CanSeek)
            {
                using (MemoryStream requestStream = new MemoryStream())
                {
                    List<byte> requestBytes = new List<byte>();
                    context.Request.Body.Position = 0;
                    await context.Request.Body.CopyToAsync(requestStream);
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



            //取出存储在上下文Item中的异常
            var ex = (Exception)context.Items["ExecuteException"];

            CommonLogContent content = new CommonLogContent() {  RequestUri = context.Request.Path.Value, ActionName = "", Message = $"Unhandle Error,\nmessage:{ex.Message},\nstacktrace:{ex.StackTrace}", RequestBody= strRequestBody, ResponseBody="" };
            return await Task.FromResult(content);
        }
    }
}
