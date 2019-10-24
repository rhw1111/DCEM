using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.Application.Services;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class AppAppointmentInfo : IAppAppointmentInfo
    {
        private IAppointmentInfoService _appointmentInfoService;

        public AppAppointmentInfo(IAppointmentInfoService appointmentInfoService)
        {
            _appointmentInfoService = appointmentInfoService;
        }

        public IList<AppointmentInfoModel> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum, string sort, string token = "")
        {
            return _appointmentInfoService.QueryListByPage(filterstr, pageSize, pageNum, sort, token);
        }
    }
}
