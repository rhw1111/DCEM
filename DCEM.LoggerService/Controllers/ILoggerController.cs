using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Context.Filter;
using DCEM.Main;
using DCEM.Main.RemoteService;
using DCEM.LoggerService.Main.Application;

namespace DCEM.LoggerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ILoggerController : ControllerBase
    {
        private IAppAddCommonLog _appAddCommonLog;
        private IAppGetCommonLog _appGetCommonLog;
        private IAppGetCommonLogByParent _appGetCommonLogByParent;
        private IAppGetLocalCommonLog _appGetLocalCommonLog;
        private IAppGetLocalCommonLogByPage _appGetLocalCommonLogByPage;
        private IAppGetRootCommonLog _appGetRootCommonLog;

        public ILoggerController(IAppAddCommonLog appAddCommonLog, IAppGetCommonLog appGetCommonLog, IAppGetCommonLogByParent appGetCommonLogByParent,
            IAppGetLocalCommonLog appGetLocalCommonLog, IAppGetLocalCommonLogByPage appGetLocalCommonLogByPage, IAppGetRootCommonLog appGetRootCommonLog
            )
        {
            _appAddCommonLog = appAddCommonLog;
            _appGetCommonLog = appGetCommonLog;
            _appGetCommonLogByParent = appGetCommonLogByParent;
            _appGetLocalCommonLog = appGetLocalCommonLog;
            _appGetLocalCommonLogByPage = appGetLocalCommonLogByPage;
            _appGetRootCommonLog = appGetRootCommonLog;
        }

        [HttpPost("add")]
        [TypeFilter(typeof(UserAuthorizeFilter),Arguments = new object[] { false,null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task Add(CommonLogModel logModel)
        {
            await _appAddCommonLog.Do(logModel);
        }

        [HttpGet("get")]
        [TypeFilter(typeof(UserAuthorizeFilter), Arguments = new object[] { false, null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task<CommonLogModel> Get(Guid id,Guid parentId,string parentAction)
        {
            return await _appGetCommonLog.Do(id, parentId, parentAction);
        }

        [HttpGet("get")]
        [TypeFilter(typeof(UserAuthorizeFilter), Arguments = new object[] { false, null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task<QueryResult<CommonLogModel>> GetByParent(Guid parentID, string parentAction, int page, int pageSize)
        {
            return await _appGetCommonLogByParent.Do(parentID, parentAction, page, pageSize);
        }

        [HttpGet("getlocal")]
        [TypeFilter(typeof(UserAuthorizeFilter), Arguments = new object[] { false, null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task<CommonLogModel> GetLocal(Guid id)
        {
            return await _appGetLocalCommonLog.Do(id);
        }

        [HttpGet("getlocalpage")]
        [TypeFilter(typeof(UserAuthorizeFilter), Arguments = new object[] { false, null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task<QueryResult<CommonLogModel>> GetLocalPage(string message, int page, int pageSize)
        {
            return await _appGetLocalCommonLogByPage.Do(message, page, pageSize);
        }

        [HttpGet("getroot")]
        [TypeFilter(typeof(UserAuthorizeFilter), Arguments = new object[] { false, null, ClaimContextGeneratorServiceTypes.Inner, null, null })]
        public async Task<List<CommonLogModel>> GetRoot(string parentAction, int? level, int top)
        {
            return await _appGetRootCommonLog.Do(parentAction,level,top);
        }

    }
}