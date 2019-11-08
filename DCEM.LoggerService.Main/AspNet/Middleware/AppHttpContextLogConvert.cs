using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.DI;
using Microsoft.AspNetCore.Http;

namespace DCEM.LoggerService.Main.AspNet.Middleware
{
    /// <summary>
    /// Http上下文转换成日志
    /// 本服务需要转换为CommonLogLocalContent
    /// </summary>
    public class AppHttpContextLogConvert : IAppHttpContextLogConvert
    {
        public Task<object> Convert(HttpContext context)
        {
            throw new NotImplementedException();
        }
    }
}
