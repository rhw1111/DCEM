using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Logger;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppAddCommonLog), Scope = InjectionScope.Singleton)]
    public class AppAddCommonLog : IAppAddCommonLog
    {
        public async Task Do(CommonLogModel model)
        {       
            CommonLog log = new CommonLog()
            {
                ActionName = model.ActionName,
                ContextInfo = model.ContextInfo,
                CurrentLevelID = model.CurrentLevelID,
                Level = model.Level,
                Message = model.Message,
                ParentActionName = model.ParentActionName,
                ParentContextInfo = model.ParentContextInfo,
                ParentID = model.ParentID,
                PreLevelID = model.PreLevelID,
                RequestBody = model.RequestBody,
                RequestUri = model.RequestUri,
                ResponseBody = model.ResponseBody,
                Root = model.Root
            };
            await log.Add();
        }
    }
}
