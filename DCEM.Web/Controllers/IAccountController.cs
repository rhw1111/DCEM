using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Serializer;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Web.Controllers
{
    [Route("api/account")]
    [EnableCors("any")]
    [ApiController]
    public class IAccountController : ControllerBase
    {
        string oauthurl = "https://subcrmadfs.sokon.com/adfs/oauth2/token";//adfs oauth2 认证地址
        string client_id = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";//客户端明文id
        string client_secret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";//客户端密文
        string state = "bill";//状态，用于传输到adfs端进行认证后，会原样返回
        string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2";//模拟登陆的资源地址
        [HttpGet]
        [Route("GetAuthToken")]
        public ActionResult<LoginModel> GetAuthToken(string username, string password)
        {
            LoginModel result = new LoginModel();

            try
            {
                var data = GetToken(client_id, client_secret, username, password, crmurl, oauthurl);

                try
                {
                    string geturl = crmurl + GetUserFetchXml(@"sfmotors\" + username);
                    var datauser = QueryCrmData(geturl, data["access_token"].ToString());
                    if (datauser != null)
                    {
                        if (datauser["value"][0]["systemuserid"] != null)
                            result.systemuserid = datauser["value"][0]["systemuserid"].ToString();
                        if (datauser["value"][0]["domainname"] != null)
                            result.domainname = datauser["value"][0]["domainname"].ToString();
                        if (datauser["value"][0]["lastname"] != null)
                            result.lastname = datauser["value"][0]["lastname"].ToString();
                        if (datauser["value"][0]["firstname"] != null)
                            result.firstname = datauser["value"][0]["firstname"].ToString();
                        if (datauser["value"][0]["mcs_staffid"] != null)
                            result.mcs_staffid = datauser["value"][0]["mcs_staffid"].ToString();
                        if (datauser["value"][0]["_mcs_dealer_value"] != null)
                            result.mcs_dealerid = datauser["value"][0]["_mcs_dealer_value"].ToString();
                        if (datauser["value"][0]["dealer_x002e_mcs_name"] != null)
                            result.mcs_dealername = datauser["value"][0]["dealer_x002e_mcs_name"].ToString();
                        result.access_token = data["access_token"].ToString();
                        // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFXX2tmMjE3bVlVSkpIWDZXZ0M3cTZENXdHcyJ9.eyJhdWQiOiJ1cm46bWljcm9zb2Z0OnVzZXJpbmZvIiwiaXNzIjoiaHR0cDovL3N1YmNybWFkZnMuc29rb24uY29tL2FkZnMvc2VydmljZXMvdHJ1c3QiLCJpYXQiOjE1NzA2OTcyNjgsImV4cCI6MTU3MDcwMDg2OCwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTVlMDE0YzctYjFmZi00NWEzLThjMGEtOTkxZjVhYTdjZThmIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMC0xMFQwODo0Nzo0OC40NjJaIiwidmVyIjoiMS4wIiwic3ViIjoieGxiUytucnpma05DRkROR3IzSFRqMWp0WElub1pMZnhwZlJteGxTUnVJTT0ifQ.MxGLdCBE3lI1jpcyZAwHPpnTf5wYyEUTgAJboAPUtmQRkB-PBJUUWL4AHxk2v50W8dlYNR0YywIfeEdHq7EXriBpb7m8X6L89fYkr1jUn-B4Ke7CyCFgX-5atOfm8uCTFWLt0f5JgEVQDE36cRGJ1QAUiSoVoPKUBEie9wEQAT0-XmHSXN7fmroH3JyGEQ7n3ZzxDZFWpjsM5Q31CQWYGww6vyB44Q3RSmc3KxPv9uvucE8OZBjGD_Vv7cGfGByiwEgL-YTA52X-ImHJOPmieVCpFl04BiAsD2sgutK4cvIeSHryjGNqGn1vMLa0yKPvHD0Mvm3Ixt0kPiIbc0Li_Q";

                    }
                    return result;
                }
                catch (Exception ex)
                {
                    return result;
                }
            }
            catch (Exception ex)
            {
                return result;
            }
        }



        /// <summary>
        /// 验证token获取
        /// </summary>
        /// <param name="clientid"></param>
        /// <param name="clientsecret"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="crmurl"></param>
        /// <param name="oauturl"></param>
        /// <returns></returns>
        public JObject GetToken(string clientid, string clientsecret, string username, string password, string crmurl, string oauturl)
        {
            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Clear();
            StringContent content = new StringContent(@$"grant_type=password&client_id={clientid}&client_secret={clientsecret}&username=sfmotors\{username}&password={password}&resource={crmurl}", Encoding.UTF8, "application/json");
            HttpResponseMessage response = httpClient.PostAsync(oauturl, content).Result;
            response.EnsureSuccessStatusCode();
            var ret = response.Content.ReadAsStringAsync().Result;
            return JsonSerializerHelper.Deserialize<JObject>(ret);
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

        public string GetUserFetchXml(string name)
        {
            var strFetch = "/systemusers?fetchXml=<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
            "<entity name='systemuser'>" +
              "<attribute name='systemuserid' />" +
              "<attribute name='domainname' />" +
              "<attribute name='lastname' />" +
              "<attribute name='firstname' />" +
              "<attribute name='mcs_staffid' />" +
              "<attribute name='mcs_dealer' />" +
              "<order attribute='createdon' descending='true' />" +
              "<filter type='and'>" +
              "<condition attribute='domainname' operator='eq' value='" + name + "' />" +
              "</filter>" +
              "<link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealer' visible='false' link-type='outer' alias='dealer'>" +
                "<attribute name='mcs_name' />" +
              "</link-entity>" +
            "</entity>" +
          "</fetch>";
            return strFetch;
        }
    }


    public class LoginModel
    {
        public LoginModel()
        {
            access_token = string.Empty;
        }
        public string access_token { get; set; }
        public string systemuserid { get; set; }
        public string domainname { get; set; }
        public string lastname { get; set; }
        public string firstname { get; set; }
        public string mcs_staffid { get; set; }
        public string mcs_dealerid { get; set; }
        public string mcs_dealername { get; set; }
    }



}
