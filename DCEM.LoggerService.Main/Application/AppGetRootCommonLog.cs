using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Logger;
using MSLibrary.DI;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppGetRootCommonLog), Scope = InjectionScope.Singleton)]
    public class AppGetRootCommonLog : IAppGetRootCommonLog
    {
        private ICommonLogRepository _commonLogRepository;

        public AppGetRootCommonLog(ICommonLogRepository commonLogRepository)
        {
            _commonLogRepository = commonLogRepository;
        }

        public async Task<List<CommonLogModel>> Do(string parentAction, int? level, int top)
        {
            List<CommonLogModel> result = new List<CommonLogModel>();
            var logs = await _commonLogRepository.QueryRootByConditionTop(parentAction, level, top);
            foreach(var item in logs)
            {
                result.Add(new CommonLogModel()
                {
                    ID = item.ID,
                    ActionName = item.ActionName,
                    ContextInfo = item.ContextInfo,
                    CurrentLevelID = item.CurrentLevelID,
                    Level = item.Level,
                    Message = item.Message,
                    ParentActionName = item.ParentActionName,
                    ParentContextInfo = item.ParentContextInfo,
                    ParentID = item.ParentID,
                    PreLevelID = item.PreLevelID,
                    RequestBody = item.RequestBody,
                    ResponseBody = item.ResponseBody,
                    RequestUri = item.RequestUri,
                    Root = item.Root
                });
            }

            return result;

        }
    }
}
