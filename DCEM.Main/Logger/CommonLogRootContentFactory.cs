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
using Quartz.Impl.Triggers;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 通用日志根内容工厂实现
    /// </summary>
    [Injection(InterfaceType = typeof(ICommonLogRootContentFactory), Scope = InjectionScope.Singleton)]
    public class CommonLogRootContentFactory : ICommonLogRootContentFactory
    {
        public async Task<CommonLogRootContent> CreateFromHttpContext(HttpContext context)
        {
            CommonLogRootContent content = new CommonLogRootContent();
            content.ParentID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
            content.ParentActionName = ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);
            content.ActionName = context.Request.Path;
            content.RequestUri = context.Request.GetDisplayUrl();
            content.Message = string.Empty;
            content.RequestBody = string.Empty;
            content.ResponseBody = string.Empty;

            return await Task.FromResult(content);
        }
    }
}
