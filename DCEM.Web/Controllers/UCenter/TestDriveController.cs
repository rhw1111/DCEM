using System;
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

        private IAppTestDrive app;
        public TestDriveController()
        {
            app = new TestDriveFactory().Create().Result;
        }

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


        #region 我的试乘试驾查询

        [HttpPost]
        [Route("GetVehorderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetVehorderList(TestDriveRequest request)
        {
            
            var list = await app.GetDriveRecordList(request);
            return list;
        }
        #endregion

    }
}