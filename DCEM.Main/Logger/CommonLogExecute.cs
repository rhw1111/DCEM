using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Logger;
using MSLibrary.DI;
using DCEM.Main.RemoteService;

namespace DCEM.Main.Logger
{
    /// <summary>
    /// 通用日志处理实现
    /// 调用日志服务的远程方法
    /// </summary>
    public class CommonLogExecute : ICommonLogExecute
    {
        private IFactory<IAddCommonLogService> _addCommonLogServiceFactory;

        public CommonLogExecute(IFactory<IAddCommonLogService> addCommonLogServiceFactory)
        {
            _addCommonLogServiceFactory = addCommonLogServiceFactory;
        }
        public async Task Execute(CommonLog log)
        {
            CommonLogModel model = new CommonLogModel()
            {
                ActionName = log.ActionName,
                ContextInfo = log.ContextInfo,
                CurrentLevelID = log.CurrentLevelID,
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

            await _addCommonLogServiceFactory.Create().Add(model);
        }
    }
}
