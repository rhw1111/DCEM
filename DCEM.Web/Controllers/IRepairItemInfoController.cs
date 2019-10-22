/*
    文件名：IRepairItemInfoController.cs
    功能描述：维修项目基础表接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using MSLibrary.Serializer;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/RepairItemInfo")]
    [ApiController]
    public class IRepairItemInfoController : ControllerBase
    {
        /// <summary>
        /// 维修项目基础查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public ActionResult<RepairItemInfoResponse> Get()
        {
            var res = new RepairItemInfoResponse()
            {
                Datas = new List<RepairItemInfoModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }

            var strFetch = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='mcs_repairiteminfo'>" +
                "<attribute name='mcs_name' />" +
                "<attribute name='createdon' />" +
                "<attribute name='mcs_pinyincode' />" +
                "<attribute name='mcs_price' />" +
                "<attribute name='mcs_workinghour' />" +
                "<attribute name='mcs_repairitemcode' />" +
                "<attribute name='mcs_isbatteryrepairitem' />" +
                "<attribute name='mcs_isdealeritem' />" +
                "<attribute name='mcs_dealerid' />" +
                "<attribute name='mcs_repairiteminfoid' />" +
                "<order attribute='createdon' descending='true' />" +
                "<filter type='and'>" +
                  "<condition attribute='statecode' operator='eq' value='0' />" +
                "</filter>" +
                "<link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealerid' visible='false' link-type='outer' alias='dealer'>" +
                  "<attribute name='mcs_name' />" +
                "</link-entity>" +
              "</entity>" +
            "</fetch>";

            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_repairiteminfos?fetchXml=" + strFetch;//模拟登陆的资源地址

            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var repairiteminfo = new RepairItemInfoModel()
                    {
                        ID = item["mcs_repairiteminfoid"] != null ? item["mcs_repairiteminfoid"].ToString() : null,
                        Name = item["mcs_name"] != null ? item["mcs_name"].ToString() : null,
                        PinyinCode = item["mcs_pinyincode"] != null ? item["mcs_pinyincode"].ToString() : null,
                        Price = item["mcs_price"] != null ? item["mcs_price"].ToString() : null,
                        DealerName = item["dealer_x002e_mcs_name"] != null ? item["dealer_x002e_mcs_name"].ToString() : null,
                        IsBatteryRepairItem = item["mcs_isbatteryrepairitem"] != null ? item["mcs_isbatteryrepairitem"].ToString() : null,
                        IsDealerItem = item["mcs_isdealeritem"] != null ? item["mcs_isdealeritem"].ToString() : null,
                        RepairItemCode = item["mcs_repairitemcode"] != null ? item["mcs_repairitemcode"].ToString() : null,
                        WorkingHour = item["mcs_workinghour"] != null ? item["mcs_workinghour"].ToString() : null,
                    };
                    res.Datas.Add(repairiteminfo);
                }
            }

            return res;

        }

        /// <summary>
        /// webapi请求
        /// </summary>
        /// <param name="crmurl"></param>
        /// <param name="token"></param>
        /// <returns></returns>
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
    }

    /// <summary>
    /// 维修项目返回实体类
    /// </summary>
    public class RepairItemInfoResponse 
    {
        public List<RepairItemInfoModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

    /// <summary>
    /// 维修项目返回实体类
    /// </summary>
    public class RepairItemInfoModel
    {
        /// <summary>
        /// 维修项目ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 维修项目代码
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 维修项目名称
        /// </summary>
        public string RepairItemCode { get; set; }

        /// <summary>
        /// 拼音简码
        /// </summary>
        public string PinyinCode { get; set; }

        /// <summary>
        /// 是否电池维修项目
        /// </summary>
        public string IsBatteryRepairItem { get; set; }

        /// <summary>
        /// 工时
        /// </summary>
        public string WorkingHour { get; set; }

        /// <summary>
        /// 工时单价
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// 厅店名称
        /// </summary>
        public string DealerName { get; set; }

        /// <summary>
        /// 是否是经销商项目    
        /// </summary>
        public string IsDealerItem { get; set; }
    }
}
