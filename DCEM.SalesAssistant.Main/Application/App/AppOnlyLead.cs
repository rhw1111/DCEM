using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppOnlyLead : IAppOnlyLead
    {
        private IOnlyLeadService _onlyLeadService;

        public AppOnlyLead(IOnlyLeadService onlyLeadService)
        {
            _onlyLeadService = onlyLeadService;
        }

        /// <summary>
        /// 唯一线索列表查询接口
        /// </summary>
        /// <param name="onlyLeadRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(OnlyLeadRequest onlyLeadRequest)
        {
            return await _onlyLeadService.QueryList(onlyLeadRequest);
        }

        /// <summary>
        /// 唯一线索详情查询接口
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetOnlyLeadDetail(string entityid)
        {
            return await _onlyLeadService.GetOnlyLeadDetail(entityid);
        }

        /// <summary>
        /// 查询与唯一线索关联的跟进记录（logcall）
        /// </summary>
        /// <param name="logcallrequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetLogCallList(LogCallRequest logcallrequest)
        {
            return await _onlyLeadService.GetLogCallList(logcallrequest);
        }

        /// <summary>
        /// 查询与唯一线索关联的培育任务
        /// </summary>
        /// <param name="activityrequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetActivityList(ActivityRequest activityrequest)
        {
            return await _onlyLeadService.GetActivityList(activityrequest);
        }

        /// <summary>
        /// 唯一线索编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> Edit(OnlyLeadEditRequest request)
        {
            return await _onlyLeadService.Edit(request);
        }
    }
}
