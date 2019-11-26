using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Logger;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppGetLocalCommonLog), Scope = InjectionScope.Singleton)]
    public class AppGetLocalCommonLog : IAppGetLocalCommonLog
    {
        private ICommonLogRepository _commonLogRepository;
        public AppGetLocalCommonLog(ICommonLogRepository commonLogRepository)
        {
            _commonLogRepository = commonLogRepository;
        }
        public async Task<CommonLogModel> Do(Guid id)
        {
            var log= await _commonLogRepository.QueryLocalByID(id);
            return new CommonLogModel()
            {
                ActionName = log.ActionName,
                ContextInfo = log.ContextInfo,
                CurrentLevelID = log.CurrentLevelID,
                ID = log.ID,
                Level = log.Level,
                Message = log.Message,
                ParentActionName = log.ParentActionName,
                ParentContextInfo = log.ParentContextInfo,
                ParentID = log.ParentID,
                PreLevelID = log.PreLevelID,
                RequestBody = log.RequestBody,
                RequestUri = log.RequestUri,
                ResponseBody = log.ResponseBody,
                Root = log.Root
            };
        }
    }
}
