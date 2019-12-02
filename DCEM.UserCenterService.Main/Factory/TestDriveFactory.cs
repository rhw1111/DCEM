using DCEM.UserCenterService.Main.Application.App;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Application.Repository;
using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.Application.Services;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using MSLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.UserCenterService.Main.Factory
{
    public class TestDriveFactory : IFactory<Task<IAppTestDrive>>
    {
        public virtual Task<IAppTestDrive> Create()
        {
            var crmService = StartupHelper.CreateCrmService();
            ITestDriveRepository repository = new TestDriveRepository();
            ITestDriveService service = new TestDriveService(crmService, repository);
            IAppTestDrive app = new AppTestDrive(service);
            return Task.FromResult(app);

        }
    }
}
