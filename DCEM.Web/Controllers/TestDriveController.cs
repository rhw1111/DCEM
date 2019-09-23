using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.Web.Controllers
{
    [Route("api/TestDrive")]
    [ApiController]
    public class TestDriveController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Route("Get")]
        public ActionResult<List<TestDriveResponse>> Get()
        {
            var testdrivelist = new List<TestDriveResponse>();

            var testdrive1 = new TestDriveResponse()
            {
                UserName = "小黄人",
                UserPhone = "13580373362",
                CarModel = "S513RC",
                OrderTime = "2019-09-21",
                TestDriveTimeId = "09:00-19:00",
                Status = 1
            };
            testdrivelist.Add(testdrive1);
            var testdrive2 = new TestDriveResponse()
            {
                UserName = "谢力海",
                UserPhone = "17618606527",
                CarModel = "S513RC",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "09:00-19:00",
                Status = 2
            };
            testdrivelist.Add(testdrive2);
            var testdrive3 = new TestDriveResponse()
            {
                UserName = "冯东波",
                UserPhone = "15548963989",
                CarModel = "S513CY",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "07:00-11:00",
                Status = 0
            };
            testdrivelist.Add(testdrive3);
            var testdrive4 = new TestDriveResponse()
            {
                UserName = "Jeremy",
                UserPhone = "13661677925",
                CarModel = "S513CY",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "07:00-11:00",
                Status = 2
            };
            testdrivelist.Add(testdrive4);
            var testdrive5 = new TestDriveResponse()
            {
                UserName = "马小健",
                UserPhone = "18782938789",
                CarModel = "S513RC",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "08:00-17:00",
                Status = 1
            };
            testdrivelist.Add(testdrive5);
            var testdrive6 = new TestDriveResponse()
            {
                UserName = "周鑫",
                UserPhone = "18782945789",
                CarModel = "S513RC",
                OrderTime = "2019-09-28",
                TestDriveTimeId = "08:00-17:00",
                Status = 1
            };
            testdrivelist.Add(testdrive6);

            return testdrivelist;
        }
    }

    /// <summary>
    /// 试乘试驾返回实体
    /// </summary>
    public class TestDriveResponse
    {
        /// <summary>
        /// 姓名
        /// </summary>        
        public string UserName { get; set; }

        /// <summary>
        /// 手机号码
        /// </summary>
        public string UserPhone { get; set; }

        /// <summary>
        /// 试乘试驾车型
        /// </summary>        
        public string CarModel { get; set; }

        /// <summary>
        /// 试乘试驾时段
        /// </summary>        
        public string TestDriveTimeId { get; set; }

        /// <summary>
        /// 预约日期  DateTime(日期格式：yyyy-MM-dd)
        /// </summary>        
        public string OrderTime { get; set; }

        /// <summary>
        /// 状态试驾状态（待确认-0、试驾中-1、已试驾-2）
        /// </summary>        
        public int Status { get; set; }
    }
}
