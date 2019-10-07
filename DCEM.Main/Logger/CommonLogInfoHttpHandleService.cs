using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using MSLibrary.Logger;
using MSLibrary.DI;
using MSLibrary.Serializer;
using MSLibrary;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 实现ICommonLogInfoHttpHandleService
    /// 从Http上下文的请求头中获取名称为LogInfo的头信息，
    /// 解析该信息，获取ParentID、ParentActionName、ParentContextInfo，PreLevelID,CurrentLevelID，存储到上下文中
    /// </summary>
    [Injection(InterfaceType = typeof(ICommonLogInfoHttpHandleService), Scope = InjectionScope.Singleton)]
    public class CommonLogInfoHttpHandleService : ICommonLogInfoHttpHandleService
    {
        public async Task<bool> Execute(HttpContext context)
        {
            bool result = true;
            Guid parentID = Guid.NewGuid();
            Guid preLevelID = Guid.Empty;
            Guid currentLevelID = Guid.NewGuid();
            string parentActionName = context.Request.Path;
            string parentContextInfo = string.Empty;
            if (context.Request.Headers.TryGetValue(HttpHeaderNames.LogInfo,out StringValues strLogInfo))
            {
                var parentLogInfo=JsonSerializerHelper.Deserialize<ParentLogInfo>(strLogInfo[0]);
                if (parentLogInfo!=null && parentLogInfo.ParentID!=Guid.Empty)
                {
                    result = false;
                    parentID = parentLogInfo.ParentID;
                    preLevelID = parentLogInfo.PreLevelID;

                    if (!string.IsNullOrEmpty(parentLogInfo.ParentActionName))
                    {
                        parentActionName = parentLogInfo.ParentActionName;
                    }

                    if (!string.IsNullOrEmpty(parentLogInfo.ContextInfo))
                    {
                        parentContextInfo = parentLogInfo.ContextInfo;
                    }
                }
            }

            ContextContainer.SetValue(ContextExtensionTypes.ParentCommonLogID, parentID);
            ContextContainer.SetValue(ContextExtensionTypes.ParentCommonLogActionName,parentActionName);
            ContextContainer.SetValue(ContextExtensionTypes.ParentCommonLogContextInfo, parentContextInfo);
            ContextContainer.SetValue(ContextExtensionTypes.PreCommonLogLevelID, preLevelID);
            ContextContainer.SetValue(ContextExtensionTypes.CurrentCommonLogLevelID, currentLevelID);

            return await Task.FromResult(result);
        }
    }
}
