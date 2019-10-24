/*
    文件名：AppointmentInfoFactory.cs
    功能描述：预约跟进工厂类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.Application.Services;
using MSLibrary;
using System;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class AppointmentInfoFactory : IFactory<Task<IAppAppointmentInfo>>
    {
        public async Task<IAppAppointmentInfo> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IAppointmentInfoRepository appointmentInfoRepository = new AppointmentInfoRepository();
                IAppointmentInfoService appointmentInfoService = new AppointmentInfoService(crmService, appointmentInfoRepository);
                IAppAppointmentInfo app = new AppAppointmentInfo(appointmentInfoService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
