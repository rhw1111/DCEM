/*
    文件名：IRepairItemTypeController.cs
    功能描述：维修类别基础表接口类  
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
    [Route("api/RepairItemType")]
    [ApiController]
    public class IRepairItemTypeController : ApiController
    {
        /// <summary>
        /// 维修类别基础查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public ActionResult<RepairItemTypeResponse> Get()
        {
            var res = new RepairItemTypeResponse()
            {
                Datas = new List<RepairItemTypeModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }

            var strFetch = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='mcs_repairitemtype'>" +
                "<attribute name='mcs_name' />" +
                "<attribute name='createdon' />" +
                "<attribute name='mcs_remark' />" +
                "<attribute name='mcs_type' />" +
                "<attribute name='mcs_repairitemtypeid' />" +
                "<order attribute='createdon' descending='true' />" +
                "<filter type='and'>" +
                  "<condition attribute='statecode' operator='eq' value='0' />" +
                "</filter>" +
              "</entity>" +
            "</fetch>";

            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_repairitemtypes?fetchXml=" + strFetch;//模拟登陆的资源地址

            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var repairitemtype = new RepairItemTypeModel()
                    {
                        ID = item["mcs_repairitemtypeid"] != null ? item["mcs_repairitemtypeid"].ToString() : null,
                        Name = item["mcs_name"] != null ? item["mcs_name"].ToString() : null,
                        ItemType = item["mcs_type"] != null ? item["mcs_type"].ToString() : null,
                    };
                    res.Datas.Add(repairitemtype);
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
    /// 维修类别返回实体类
    /// </summary>
    public class RepairItemTypeModel
    {
        /// <summary>
        /// 维修类别ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 维修类别名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 维修类别 10-自费，20-索赔
        /// </summary>
        public string ItemType { get; set; }
    }

    /// <summary>
    /// 维修类别返回实体类
    /// </summary>
    public class RepairItemTypeResponse 
    {
        public List<RepairItemTypeModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

}
