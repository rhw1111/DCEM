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
    [EnableCors("_myAllowSpecificOrigins")]
    [ApiController]
    public class IAccountController : ControllerBase
    {
        string oauthurl = "https://subcrmadfs.sokon.com/adfs/oauth2/token";//adfs oauth2 认证地址
        string client_id = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";//客户端明文id
        string client_secret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";//客户端密文
        string state = "bill";//状态，用于传输到adfs端进行认证后，会原样返回
        string crmurl = "https://subcrmuat.sokon.com/api/data/v8.2";//模拟登陆的资源地址
        [HttpGet]
        [Route("GetAuthToken")]
        public ActionResult<TokenModel> GetAuthToken(string username, string password)
        {

            string url = oauthurl;
            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Clear();

            StringContent content = new StringContent(@$"grant_type=password&client_id={client_id}&client_secret={client_secret}&username=sfmotors\{username}&password={password}&resource={crmurl}", Encoding.UTF8, "application/json");
            HttpResponseMessage response = httpClient.PostAsync(url, content).Result;
            try
            {
                response.EnsureSuccessStatusCode();
                var ret = response.Content.ReadAsStringAsync().Result;
                var data = JsonSerializerHelper.Deserialize<JObject>(ret);
                //验证合法
                HttpClient httpClient2 = new HttpClient();
                httpClient2.DefaultRequestHeaders.Accept.Clear();
                httpClient2.DefaultRequestHeaders.Add("Accept", "application/json");
                httpClient2.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
                httpClient2.DefaultRequestHeaders.Add("OData-Version", "4.0");
                httpClient2.DefaultRequestHeaders.Add("Authorization", $"Bearer {data["access_token"].ToString()}");
                HttpResponseMessage response2 = httpClient2.GetAsync(crmurl).Result;
                try
                {
                    response2.EnsureSuccessStatusCode();
                    var ret2 = response2.Content.ReadAsStringAsync().Result;
                    string token = data["access_token"].ToString();// "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFXX2tmMjE3bVlVSkpIWDZXZ0M3cTZENXdHcyJ9.eyJhdWQiOiJ1cm46bWljcm9zb2Z0OnVzZXJpbmZvIiwiaXNzIjoiaHR0cDovL3N1YmNybWFkZnMuc29rb24uY29tL2FkZnMvc2VydmljZXMvdHJ1c3QiLCJpYXQiOjE1NzA2OTcyNjgsImV4cCI6MTU3MDcwMDg2OCwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTVlMDE0YzctYjFmZi00NWEzLThjMGEtOTkxZjVhYTdjZThmIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMC0xMFQwODo0Nzo0OC40NjJaIiwidmVyIjoiMS4wIiwic3ViIjoieGxiUytucnpma05DRkROR3IzSFRqMWp0WElub1pMZnhwZlJteGxTUnVJTT0ifQ.MxGLdCBE3lI1jpcyZAwHPpnTf5wYyEUTgAJboAPUtmQRkB-PBJUUWL4AHxk2v50W8dlYNR0YywIfeEdHq7EXriBpb7m8X6L89fYkr1jUn-B4Ke7CyCFgX-5atOfm8uCTFWLt0f5JgEVQDE36cRGJ1QAUiSoVoPKUBEie9wEQAT0-XmHSXN7fmroH3JyGEQ7n3ZzxDZFWpjsM5Q31CQWYGww6vyB44Q3RSmc3KxPv9uvucE8OZBjGD_Vv7cGfGByiwEgL-YTA52X-ImHJOPmieVCpFl04BiAsD2sgutK4cvIeSHryjGNqGn1vMLa0yKPvHD0Mvm3Ixt0kPiIbc0Li_Q";
                    return new TokenModel { access_token = token };
                }
                catch (Exception ex)
                {
                    return new TokenModel { access_token = string.Empty };
                }
            }
            catch (Exception ex)
            {
                    return new TokenModel { access_token = string.Empty };
            }
        }
    }
    public class TokenModel
    {
        public string access_token { get; set; }
    }
}
