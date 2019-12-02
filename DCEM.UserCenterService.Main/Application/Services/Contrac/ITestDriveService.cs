using System;
using System.Collections.Generic;
using System.Text;
using DCEM.UserCenterService.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System.Threading.Tasks;

namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    public interface  ITestDriveService
    {

        /// <summary>
        /// 创建试乘试驾预约
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveRequest request);
    }
}
