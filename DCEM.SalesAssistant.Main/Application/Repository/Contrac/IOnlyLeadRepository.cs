using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IOnlyLeadRepository
    {
        string QueryList(OnlyLeadRequest onlyLeadRequest);


        /// <summary>
        /// 唯一线索详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        string GetOnlyLeadDetail(string entityid);

        /// <summary>
        /// 唯一线索关联的跟进记录（logcall） 的查询fetchString
        /// </summary>
        /// <param name="activityrequest"></param>
        /// <returns></returns>
        string GetLogCallList(LogCallRequest logcallrequest);

        /// <summary>
        /// 唯一线索关联的培育任务 的查询fetchString
        /// </summary>
        /// <param name="activityrequest"></param>
        /// <returns></returns>
        string GetActivityList(ActivityRequest activityrequest);

    }
}
