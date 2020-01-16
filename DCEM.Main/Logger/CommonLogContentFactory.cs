using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Logger;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 通用日志内容工厂实现
    /// </summary>
    [Injection(InterfaceType = typeof(ICommonLogContentFactory), Scope = InjectionScope.Singleton)]
    public class CommonLogContentFactory : ICommonLogContentFactory
    {
        public async Task<CommonLogContent> Create(string actionName,string message)
        {
            CommonLogContent content = new CommonLogContent();
            content.ParentID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
            content.ParentActionName= ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);          
            content.ActionName = actionName;
            content.Message = message;
            content.RequestBody = string.Empty;
            content.ResponseBody = string.Empty;
            content.RequestUri = string.Empty;
            return await Task.FromResult(content);
        }

        public async Task<CommonLogContent> CreateFromHttpContext(HttpContext context)
        {
            CommonLogContent content = new CommonLogContent();
            content.ParentID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
            content.ParentActionName = ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);        
            content.ActionName = context.Request.Path;
            content.Message = string.Empty;

            byte[] bufferBytes = new byte[1024];
            string strRequestBody = string.Empty;
            string strResponseBody = string.Empty;
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
                    context.Request.Body.Position = 0;
                }
            }

        /*    if (context.Response != null && context.Response.Body != null && context.Response.Body.CanRead && context.Response.Body.CanSeek)
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
                    context.Response.Body.Position = 0;
                }
            }
       */
            content.RequestBody = strRequestBody;
            content.ResponseBody = strResponseBody;
            content.RequestUri = context.Request.GetDisplayUrl();
            content.Message = string.Empty;

            return await Task.FromResult(content);
        }
    }
}
