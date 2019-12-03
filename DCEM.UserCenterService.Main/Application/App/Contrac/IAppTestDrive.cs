﻿using DCEM.UserCenterService.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.UserCenterService.Main.Application.App.Contrac
{
    public interface IAppTestDrive
    {
        /// <summary>
        /// 创建试乘试驾预约
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveViewModel request);

        /// <summary>
        /// 我的试乘试驾预约查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetDriveRecordList(TestDriveRequest request);
     
    }
}
