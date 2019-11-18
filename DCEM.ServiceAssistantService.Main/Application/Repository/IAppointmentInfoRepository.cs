using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public interface IAppointmentInfoRepository
    {
        /// <summary>
        /// 预约跟进列表查询
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        string QueryListByPage(AppointmentInfoRequest filterstr);

        /// <summary>
        /// 预约记录详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        string QueryDetail(string entityid);

        /// <summary>
        /// 预约单跟进记录
        /// </summary>
        /// <param name="logRequest"></param>
        /// <returns></returns>
        string Querylog(AppointmentInfoLogRequest logRequest);

        /// <summary>
        /// 预约时段配置
        /// </summary>
        /// <param name="appointmentConfiggRequest"></param>
        /// <returns></returns>
        string GetConfig(AppointmentConfigRequest appointmentConfiggRequest);

        /// <summary>
        /// 查询各个状态统计条数
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        string QueryListByCount(AppointmentInfoRequest filterstr, int status);
    }
}
