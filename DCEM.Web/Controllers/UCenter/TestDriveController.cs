﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.Web.Controllers.UCenter
{

    [Route("api/testdrive")]
    [EnableCors("any")]
    [ApiController]
    public class TestDriveController : ApiController
    {

        private IAppTestDrive app = null;
        public TestDriveController()
        {
            if (app == null)
            {
                app = new TestDriveFactory().Create().Result;
            }
        }

        #region 创建试乘试驾 预约单
        /// <summary>
        /// 创建试乘试驾 预约单
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("CreateTestDrive")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> CreateTestDrive(TestDriveViewModel request)
        {
            var result = await app.CreateTestDrive(request);
            return result;
        }
        #endregion

        #region 我的试乘试驾查询

        [HttpPost]
        [Route("GetDriveRecordList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetDriveRecordList(TestDriveRequest request)
        {         
            var list = await app.GetDriveRecordList(request);
            return list;
        }
        #endregion

        #region 我的试乘试驾反馈报告查询

        [HttpPost]
        [Route("GetDriveFeedbackList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetDriveFeedbackList(TestDriveFeedbackRequest request)
        {
            var list = await app.GetDriveFeedbackList(request);
            return list;
        }
        #endregion

        #region 我的试乘试驾反馈报告详情
        /// <summary>
        /// 16日修改，通过试驾报告查询试驾反馈
        /// </summary>
        /// <param name="testdriveid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetDriveFeedbackDetail")]
        public async Task<NewtonsoftJsonActionResult<TestDriveFeedbackDetailModel>> GetDriveFeedbackDetail(string testdriveid)
        {
            var list = await app.GetDriveFeedbackDetail(testdriveid);
            return list;
        }
        #endregion


    }
}