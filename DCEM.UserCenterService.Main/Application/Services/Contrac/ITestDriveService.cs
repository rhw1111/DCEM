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
        Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveViewModel request);


        /// <summary>
        /// 我的试乘试驾预约查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetDriveRecordList(TestDriveRequest request);



        /// <summary>
        /// 我的试乘试驾反馈报告
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetDriveFeedbackList(TestDriveFeedbackRequest request);


        /// <summary>
        /// 试乘试驾反馈报告详情
        /// </summary>
        /// <param name="testdriveid"></param>
        /// <returns></returns>
        Task<TestDriveFeedbackDetailModel> GetDriveFeedbackDetail(string testdriveid);
    }
}
