using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using MSLibrary.Serializer;
using System.Text;
using System.Net;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/TestDrive")]
    [ApiController]
    public class ITestDriveController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Route("Get")]
        public ActionResult<TestDriveResponse> Get(int status)
        {
            var res = new TestDriveResponse()
            {
                Datas = new List<TestDriveModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }
            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_app_testdrives?$select=mcs_name,mcs_carmodel,mcs_ordertime,mcs_status,mcs_time,mcs_userphone";//模拟登陆的资源地址
            if (status != 0)
            {
                crmurl += @$"&$filter=mcs_status%20eq%20{status}";
            }
            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var testdrive = new TestDriveModel()
                    {
                        ID = item["mcs_app_testdriveid"].ToString(),
                        UserName = item["mcs_name"].ToString(),
                        UserPhone = item["mcs_userphone"].ToString(),
                        CarModel = item["mcs_carmodel"].ToString(),
                        OrderTime = item["mcs_ordertime"].ToString(),
                        TestDriveTimeId = item["mcs_time"].ToString(),
                        Status = int.Parse(item["mcs_status"].ToString())
                    };
                    res.Datas.Add(testdrive);
                }
            }

            return res;
            //foreach (var item in datas)
            //{
            //    var testdrive1 = new TestDriveModel()
            //    {
            //        ID = item.Attributes.Contains("") ? "" : item.GetAttributeValue<string>(""),
            //        UserName = item.Attributes.Contains("mcs_status") ? string.Empty : item.GetAttributeValue<string>("mcs_status"),
            //        UserPhone = item.Attributes.Contains("mcs_userphone") ? string.Empty : item.GetAttributeValue<string>("mcs_userphone"),
            //        CarModel = item.Attributes.Contains("mcs_carmodel") ? string.Empty : item.GetAttributeValue<string>("mcs_carmodel"),
            //        OrderTime = item.Attributes.Contains("mcs_ordertime") ? string.Empty : item.GetAttributeValue<DateTime>("mcs_ordertime").ToString(),
            //        TestDriveTimeId = item.Attributes.Contains("mcs_carmodel") ? string.Empty : item.GetAttributeValue<string>("mcs_carmodel"),
            //        Status = item.Attributes.Contains("mcs_status") ? 0 : item.GetAttributeValue<OptionSetValue>("mcs_status").Value,
            //    };
            //    res.Datas.Add(testdrive1);
            //}

            var testdrive2 = new TestDriveModel()
            {
                ID = "2",
                UserName = "谢力海",
                UserPhone = "17618606527",
                CarModel = "S513RC",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "09:00-19:00",
                Status = 2
            };
            res.Datas.Add(testdrive2);
            var testdrive3 = new TestDriveModel()
            {
                ID = "3",
                UserName = "冯东波",
                UserPhone = "15548963989",
                CarModel = "S513CY",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "07:00-11:00",
                Status = 0
            };
            res.Datas.Add(testdrive3);
            var testdrive4 = new TestDriveModel()
            {
                ID = "4",
                UserName = "Jeremy",
                UserPhone = "13661677925",
                CarModel = "S513CY",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "07:00-11:00",
                Status = 2
            };
            res.Datas.Add(testdrive4);
            var testdrive5 = new TestDriveModel()
            {
                ID = "5",
                UserName = "马小健",
                UserPhone = "18782938789",
                CarModel = "S513RC",
                OrderTime = "2019-09-20",
                TestDriveTimeId = "08:00-17:00",
                Status = 1
            };
            res.Datas.Add(testdrive5);
            var testdrive6 = new TestDriveModel()
            {
                ID = "6",
                UserName = "周鑫",
                UserPhone = "18782945789",
                CarModel = "S513RC",
                OrderTime = "2019-09-28",
                TestDriveTimeId = "08:00-17:00",
                Status = 1
            };
            res.Datas.Add(testdrive6);

            return res;
        }
        
        [HttpPost]
        [Route("Add")]
        public ActionResult<TestDriveResponse> Add([FromQuery]TestDriveModel testdrive)
        {

            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }
            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_app_testdrives";//模拟登陆的资源地址
            var reqdata = JsonSerializerHelper.Serializer(new { mcs_name = testdrive.UserName, mcs_userphone = testdrive.UserPhone, mcs_carmodel = testdrive.CarModel, mcs_ordertime = testdrive.OrderTime, mcs_status = testdrive.Status, mcs_time = testdrive.TestDriveTimeId });
            var resbool = AddCrmData(crmurl, token, reqdata);
            if (resbool)
            {
                var res = new TestDriveResponse()
                {
                    Success = true,
                    Mssage = "添加成功"
                };
                return res;
            }
            else
            {
                var res = new TestDriveResponse()
                {
                    Success = false,
                    Mssage = "添加失败"
                };
                return res;
            }
        }


        public JObject QueryCrmData(string crmurl, string token)
        {

            //验证合法
            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
            httpClient.DefaultRequestHeaders.Add("OData-Version", "4.0");
            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
            HttpResponseMessage response = httpClient.GetAsync(crmurl).Result;
            try
            {
                response.EnsureSuccessStatusCode();
                var ret = response.Content.ReadAsStringAsync().Result;
                var res = JsonSerializerHelper.Deserialize<JObject>(ret);
                return res;
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        public bool AddCrmData(string crmurl, string token, string jsonString)
        {
            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
            httpClient.DefaultRequestHeaders.Add("OData-Version", "4.0");
            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
            HttpResponseMessage response = httpClient.PostAsync(crmurl, new StringContent(jsonString, Encoding.UTF8, "application/json")).Result;
            try
            {
                response.EnsureSuccessStatusCode();
                if (response.StatusCode == HttpStatusCode.NoContent)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                return false;
            }

        }
    }

    /// <summary>
    /// 试乘试驾返回实体
    /// </summary>
    public class TestDriveModel
    {
        public string ID { get; set; }
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
        public int? Status { get; set; }
    }

    /// <summary>
    /// 试乘试驾返回实体
    /// </summary>
    public class TestDriveResponse
    {
        public List<TestDriveModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

}

