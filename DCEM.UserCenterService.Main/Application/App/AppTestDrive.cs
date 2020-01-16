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
        public async Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveViewModel request)
        {
            return await _testDriveService.CreateTestDrive(request);
        }


        /// <summary>
        /// 我的试乘试驾查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetDriveRecordList(TestDriveRequest request)
        {
            return await _testDriveService.GetDriveRecordList(request);
        }



        /// <summary>
        /// 我的试乘试驾反馈报告
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetDriveFeedbackList(TestDriveFeedbackRequest request)
        {
            return await _testDriveService.GetDriveFeedbackList(request);
        }

        /// <summary>
        /// 试乘试驾反馈报告详情
        /// </summary>
        /// <param name="testdriveid"></param>
        /// <returns></returns>
        public async Task<TestDriveFeedbackDetailModel> GetDriveFeedbackDetail(string testdriveid)
        {
            return await _testDriveService.GetDriveFeedbackDetail(testdriveid);
        }

    }
}
