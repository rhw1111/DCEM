using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using System;
using System.Collections.Generic;
using System.Text;
using DCEM.UserCenterService.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System.Threading.Tasks;

namespace DCEM.UserCenterService.Main.Application.App
{
    public class AppTestDrive: IAppTestDrive
    {

        public ITestDriveService _testDriveService;

        public AppTestDrive(ITestDriveService driveService)
        {
            _testDriveService = driveService;
        }

        /// <summary>
        /// 创建试乘试驾预约
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveRequest request)
        {
            return await _testDriveService.CreateTestDrive(request);
        }


    }
}
