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
        /// 分页查询技术支持
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum);
    }
}
