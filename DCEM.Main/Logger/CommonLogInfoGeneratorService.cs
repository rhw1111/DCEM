using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Logger;
using MSLibrary.Serializer;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 实现日志信息的生成
    /// 从当前上下文中获取ParentID、ParentActionName，生成LogInfo的头
    /// </summary>
    [Injection(InterfaceType = typeof(ICommonLogInfoGeneratorService), Scope = InjectionScope.Singleton)]
    public class CommonLogInfoGeneratorService : ICommonLogInfoGeneratorService
    {
        private ICommonLogEnvInfoGeneratorService _commonLogEnvInfoGeneratorService;

        public CommonLogInfoGeneratorService(ICommonLogEnvInfoGeneratorService commonLogEnvInfoGeneratorService)
        {
            _commonLogEnvInfoGeneratorService = commonLogEnvInfoGeneratorService;
        }

        public async Task<Dictionary<string, string>> Generate()
        {
            var parentID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
            var parentActionName= ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);
            var preLevelID = ContextContainer.GetValue<Guid>(ContextExtensionTypes.CurrentCommonLogLevelID);
            var parentContextInfo= _commonLogEnvInfoGeneratorService.GenerateUserInfo();

            ParentLogInfo info = new ParentLogInfo()
            {
                ParentID = parentID,
                PreLevelID = preLevelID,
                ParentActionName = parentActionName,
                ContextInfo = parentContextInfo
            };

            Dictionary<string, string> result = new Dictionary<string, string>()
            {
                { HttpHeaderNames.LogInfo,JsonSerializerHelper.Serializer(info)}
            };

            return await Task.FromResult(result);
        }
    }
}
