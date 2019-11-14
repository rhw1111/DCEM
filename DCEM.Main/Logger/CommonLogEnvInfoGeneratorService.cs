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
using DCEM.Main.Context;

namespace DCEM.Main.Logger
{
    [Injection(InterfaceType = typeof(ICommonLogEnvInfoGeneratorService), Scope = InjectionScope.Singleton)]
    public class CommonLogEnvInfoGeneratorService : ICommonLogEnvInfoGeneratorService
    {
        public string GenerateUserInfo()
        {
            return ContextContainer.GetValue<Guid>(ContextTypes.CurrentUserId).ToString();
        }

        public Guid? GetCurrentLevelID()
        {
            return ContextContainer.GetValue<Guid>(ContextExtensionTypes.CurrentCommonLogLevelID);
        }

        public string GetParentActionName()
        {
            return ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogActionName);
        }

        public Guid? GetParentID()
        {
            return ContextContainer.GetValue<Guid>(ContextExtensionTypes.ParentCommonLogID);
        }

        public string GetParentUserInfo()
        {
            return ContextContainer.GetValue<string>(ContextExtensionTypes.ParentCommonLogContextInfo);
        }

        public Guid? GetPreLevelID()
        {
            return ContextContainer.GetValue<Guid>(ContextExtensionTypes.PreCommonLogLevelID);
        }
    }
}
