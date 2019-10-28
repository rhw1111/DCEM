using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public interface IAppointmentInfoService
    {
        /// <summary>
        /// 分页查询
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr);
        
        /// <summary>
        /// 预约记录查询
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryDetail(string entityid);

        /// <summary>
        /// 预约单跟进记录
        /// </summary>
        /// <param name="appointmentInfoLogRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetLog(AppointmentInfoLogRequest appointmentInfoLogRequest);
    }
}
