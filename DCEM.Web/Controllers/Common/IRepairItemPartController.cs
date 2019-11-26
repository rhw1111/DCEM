/*
    文件名：IRepairItemPartController.cs
    功能描述：维修配件基础表接口类  
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
    [Route("api/RepairItemPart")]
    [ApiController]
    public class IRepairItemPartController: ApiController
    {
        /// <summary>
        /// 维修配件查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public ActionResult<RepairItemPartResponse> Get()
        {
            var res = new RepairItemPartResponse()
            {
                Datas = new List<RepairItemPartModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }

            var strFetch = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='mcs_repairitempart'>" +
                "<attribute name='mcs_name' />" +
                "<attribute name='createdon' />" +
                "<attribute name='mcs_repairitemid' />" +
                "<attribute name='mcs_remark' />" +
                "<attribute name='mcs_price' />" +
                "<attribute name='mcs_partsid' />" +
                "<attribute name='mcs_pinyincode' />" +
                "<attribute name='mcs_repairitempartid' />" +
                "<order attribute='mcs_name' descending='true' />" +
                "<filter type='and'>" +
                  "<condition attribute='statecode' operator='eq' value='0' />" +
                "</filter>" +
                "<link-entity name='mcs_repairiteminfo' from='mcs_repairiteminfoid' to='mcs_repairitemid' visible='false' link-type='outer' alias='repairitem'>" +
                  "<attribute name='mcs_name' />" +
                "</link-entity>" +
                "<link-entity name='mcs_parts' from='mcs_partsid' to='mcs_partsid' visible='false' link-type='outer' alias='part'>" +
                  "<attribute name='mcs_name' />" +
                "</link-entity>" +
              "</entity>" +
            "</fetch>";

            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_repairitemparts?fetchXml=" + strFetch;//模拟登陆的资源地址

            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var repairitem = new RepairItemPartModel()
                    {
                        ID = item["mcs_repairitempartid"]!=null? item["mcs_repairitempartid"].ToString():null,
                        Name = item["mcs_name"] != null? item["mcs_name"].ToString():null,
                        PartCode = item["part_x002e_mcs_name"] != null?item["part_x002e_mcs_name"].ToString():null,
                        PinyinCode = item["mcs_pinyincode"] != null? item["mcs_pinyincode"].ToString():null,
                        Price = item["mcs_price"] != null? item["mcs_price"].ToString():null,
                        RepairItem = item["repairitem_x002e_mcs_name"] != null? item["repairitem_x002e_mcs_name"].ToString():null,
                    };
                    res.Datas.Add(repairitem);
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
    /// 维修配件返回实体类
    /// </summary>
    public class RepairItemPartResponse 
    {
        public List<RepairItemPartModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

    /// <summary>
    /// 维修配件返回实体类
    /// </summary>
    public class RepairItemPartModel 
    {
        /// <summary>
        /// 维修配件ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 零件代码
        /// </summary>
        public string PartCode { get; set; }

        /// <summary>
        /// 维修项目代码
        /// </summary>
        public string RepairItem { get; set; }

        /// <summary>
        /// 拼音简码
        /// </summary>
        public string PinyinCode { get; set; }

        /// <summary>
        /// 零件名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 单价
        /// </summary>
        public string Price { get; set; }


    }

}
