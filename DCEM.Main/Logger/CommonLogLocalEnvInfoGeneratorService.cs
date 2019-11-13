using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.Logger;
using MSLibrary.DI;
using DCEM.Main.Context;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 本地通用日志环境信息生成服务
    /// </summary>
    [Injection(InterfaceType = typeof(ICommonLogLocalEnvInfoGeneratorService), Scope = InjectionScope.Singleton)]
    public class CommonLogLocalEnvInfoGeneratorService : ICommonLogLocalEnvInfoGeneratorService
    {
        public string GenerateParentUserInfo()
        {
            return string.Empty;
        }

        public string GenerateUserInfo()
        {
            //获取用户Id上下文信息
            var userID=ContextContainer.GetValue<string>(ContextTypes.CurrentUserId);
            if (userID==null)
            {
                return string.Empty;
            }

            return userID;
        }
    }
}
