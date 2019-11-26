/*
    文件名：IRepairItemTypeDetailController.cs
    功能描述：维修类型基础表接口类  
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
    [Route("api/RepairItemTypeDetail")]
    [ApiController]
    public class IRepairItemTypeDetailController : ApiController
    {
        /// <summary>
        /// 维修类型基础查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public ActionResult<RepairItemTypeDetailResponse> Get()
        {
            var res = new RepairItemTypeDetailResponse()
            {
                Datas = new List<RepairItemTypeDetailModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }

            var strFetch = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='mcs_repairitemtypedetail'>" +
                "<attribute name='mcs_name' />" +
                "<attribute name='createdon' />" +
                "<attribute name='mcs_repairitemtypeid' />" +
                "<attribute name='mcs_ismaintenance' />" +
                "<attribute name='mcs_repairitemtypedetailid' />" +
                "<order attribute='createdon' descending='true' />" +
                "<filter type='and'>" +
                  "<condition attribute='statecode' operator='eq' value='0' />" +
                "</filter>" +
                "<link-entity name='mcs_repairitemtype' from='mcs_repairitemtypeid' to='mcs_repairitemtypeid' visible='false' link-type='outer' alias='repairitemtype'>" +
                  "<attribute name='mcs_name' />" +
                "</link-entity>" +
              "</entity>" +
            "</fetch>";

            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_repairitemtypedetails?fetchXml=" + strFetch;//模拟登陆的资源地址

            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var repairitemtype = new RepairItemTypeDetailModel()
                    {
                        ID = item["mcs_repairitemtypedetailid"] != null ? item["mcs_repairitemtypedetailid"].ToString() : null,
                        Name = item["mcs_name"] != null ? item["mcs_name"].ToString() : null,
                        IsMaintenance = item["mcs_ismaintenance"] != null ? item["mcs_ismaintenance"].ToString() : null,
                        RepairItemType = item["repairitemtype_x002e_mcs_name"] != null ? item["repairitemtype_x002e_mcs_name"].ToString() : null,
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
    /// 维修类型返回实体类
    /// </summary>
    public class RepairItemTypeDetailResponse 
    {
        public List<RepairItemTypeDetailModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

    /// <summary>
    /// 维修类型返回实体类
    /// </summary>
    public class RepairItemTypeDetailModel
    {
        /// <summary>
        /// 维修类型ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 维修类型名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 是否常规保养
        /// </summary>
        public string IsMaintenance { get; set; }

        /// <summary>
        /// 维修类别
        /// </summary>
        public string RepairItemType { get; set; }
    }
}
