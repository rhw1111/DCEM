using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Logger;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppGetCommonLog), Scope = InjectionScope.Singleton)]
    public class AppGetCommonLog : IAppGetCommonLog
    {
        private ICommonLogRepository _commonLogRepository;

        public AppGetCommonLog(ICommonLogRepository commonLogRepository)
        {
            _commonLogRepository = commonLogRepository;
        }
        public async Task<CommonLogModel> Do(Guid id, Guid parentID, string parentAction)
        {
            var log= await _commonLogRepository.QueryByID(id, parentID, parentAction);
            return new CommonLogModel()
            {
                ID=log.ID,
                ActionName = log.ActionName,
                ContextInfo = log.ContextInfo,
                CurrentLevelID = log.CurrentLevelID,
                Level = log.Level,
                Message = log.Message,
                ParentActionName = log.ParentActionName,
                ParentContextInfo = log.ParentContextInfo,
                ParentID = log.ParentID,
                PreLevelID = log.PreLevelID,
                RequestBody = log.RequestBody,
                ResponseBody = log.ResponseBody,
                RequestUri = log.RequestUri,
                Root = log.Root
            };
        }
    }
}
