/*
    文件名：ISystemUserController.cs
    功能描述：用户实体接口类  
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
    [Route("api/SystemUser")]
    [ApiController]
    public class ISystemUserController : ControllerBase
    {
        /// <summary>
        /// 用户信息查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetInfo")]
        public ActionResult<SystemUserResponse> GetInfo()
        {
            var res = new SystemUserResponse()
            {
                Datas = new List<SystemUserModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            var token = string.Empty;
            if (Request.Headers.TryGetValue("token", out var traceValue))
            {
                token = traceValue;
            }

            var strFetch = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='systemuser'>" +
                "<attribute name='fullname' />" +
                "<attribute name='governmentid' />" +
                "<attribute name='internalemailaddress' />" +
                "<attribute name='mcs_post' />" +
                "<attribute name='mcs_userid' />" +
                "<attribute name='systemuserid' />" +
                "<attribute name='mobilephone' />" +
                "<order attribute='createdon' descending='true' />" +
                "<filter type='and'>" +
                  "<condition attribute='isdisabled' operator='eq' value='0' />" +
                "</filter>" +
                "<link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealer' visible='false' link-type='outer' alias='dealer'>" +
                  "<attribute name='mcs_name' />" +
                "</link-entity>" +
              "</entity>" +
            "</fetch>";

            string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2/systemusers?fetchXml=" + strFetch;//模拟登陆的资源地址

            var datas = QueryCrmData(crmurl, token);
            if (datas != null)
            {
                var entitydata = datas["value"] as JArray;
                foreach (var item in entitydata)
                {
                    var repairitemtype = new SystemUserModel()
                    {
                        ID = item["systemuserid"] != null ? item["systemuserid"].ToString() : null,
                        FullName = item["fullname"] != null ? item["fullname"].ToString() : null,
                        DealerName = item["dealer_x002e_mcs_name"] != null ? item["dealer_x002e_mcs_name"].ToString() : null,
                        GovernmentId = item["governmentid"] != null ? item["governmentid"].ToString() : null,
                        InternalEmailAddress = item["internalemailaddress"] != null ? item["internalemailaddress"].ToString() : null,
                        MobilePhone = item["mobilephone"] != null ? item["mobilephone"].ToString() : null,
                        Post = item["mcs_post"] != null ? item["mcs_post"].ToString() : null,
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
    /// 用户信息查询接口返回实体类
    /// </summary>
    public class SystemUserResponse 
    {
        public List<SystemUserModel> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }

    /// <summary>
    /// 用户信息查询接口返回实体类
    /// </summary>
    public class SystemUserModel
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 真实姓名
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string MobilePhone { get; set; }

        /// <summary>
        /// 邮箱地址
        /// </summary>
        public string InternalEmailAddress { get; set; }

        /// <summary>
        /// 身份证
        /// </summary>
        public string GovernmentId { get; set; }

        /// <summary>
        /// 所属厅店
        /// </summary>
        public string DealerName { get; set; }

        /// <summary>
        /// 岗位
        /// </summary>
        public string Post { get; set; }
    }

}
