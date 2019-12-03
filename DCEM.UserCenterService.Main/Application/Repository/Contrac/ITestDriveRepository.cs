using DCEM.UserCenterService.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.Application.Repository.Contrac
{
    public interface ITestDriveRepository
    {
        /// <summary>
        /// 我的试乘试驾预约xml
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        string GetDriveRecordList(TestDriveRequest Request);
    }
}
