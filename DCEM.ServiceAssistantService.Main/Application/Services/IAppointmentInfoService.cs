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
    }
}
