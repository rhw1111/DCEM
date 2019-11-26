using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Logger;

namespace DCEM.LoggerService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppGetCommonLogByParent), Scope = InjectionScope.Singleton)]
    public class AppGetCommonLogByParent : IAppGetCommonLogByParent
    {
        private ICommonLogRepository _commonLogRepository;

        public AppGetCommonLogByParent(ICommonLogRepository commonLogRepository)
        {
            _commonLogRepository = commonLogRepository;
        }

        public async Task<QueryResult<CommonLogModel>> Do(Guid parentID, string parentAction, int page, int pageSize)
        {
            QueryResult<CommonLogModel> result = new QueryResult<CommonLogModel>();
            var logs = await _commonLogRepository.QueryByParentId(parentID, parentAction, page, pageSize);
            result.CurrentPage = logs.CurrentPage;
            result.TotalCount = logs.TotalCount;
            foreach (var item in logs.Results)
            {
                result.Results.Add(new CommonLogModel()
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
                    RequestUri = item.RequestUri,
                    ResponseBody = item.ResponseBody,
                    Root = item.Root

                });
            }

            return result;
        }
    }
}
