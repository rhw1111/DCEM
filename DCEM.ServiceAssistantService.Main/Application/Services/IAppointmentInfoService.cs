using DCEM.ServiceAssistantService.Main.DTOModel;
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
        Task<IList<AppointmentInfoModel>> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum, string sort, string token = "");
    }
}
