/*
    文件名：DriveRecordFactory.cs
    功能描述：试乘试驾工厂类  
    创建时间：2019年11月19日
    作者：黄贤顺
*/
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Services;
using MSLibrary;
using System;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Factory
{
    public class DriveRecordFactory : IFactory<Task<IAppDriveRecord>>
    {
        public async Task<IAppDriveRecord> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IDriveRecordRepository driveRecordRepository = new DriveRecordRepository();
                IDriveRecordService driveRecordService = new DriveRecordService(crmService, driveRecordRepository);
                IAppDriveRecord app = new AppDriveRecord(driveRecordService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
