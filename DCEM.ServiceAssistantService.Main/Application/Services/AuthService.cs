using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;
using DCEM.Main;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.Serializer;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using Newtonsoft.Json.Linq;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class AuthService : IAuthService
    {
        ServingAssConfiguration coreConfiguration = ConfigurationContainer.Get<ServingAssConfiguration>(ConfigurationNames.Application);

        public AuthService()
        {
        }


        public async Task<LoginModel> GetAuthToken(string username, string password)
        {
            LoginModel result = new LoginModel();
            var dyCRMSetting = coreConfiguration.DyCRMSetting;
            try
            {
                if (dyCRMSetting != null)
                {
                    JObject datauser=null;
                    if (dyCRMSetting.TokenServiceType.ToLower() == CrmServiceTokenGenerateServiceNames.AD.ToLower())
                    {
                        try
                        {
                            string geturl = $"{dyCRMSetting.CrmUrl}/api/data/v{dyCRMSetting.CrmApiVersion}{GetUserFetchXml(@"MCS\" + username)}";
                            var httpClient = new HttpClient(new HttpClientHandler() { Credentials = new NetworkCredential(username,HttpUtility.UrlDecode(password), dyCRMSetting.Domain) });
                            using (httpClient)
                            {
                                datauser = QueryCrmDataADValidate(geturl, httpClient);
                                if (datauser != null)
                                {
                                    result.access_token = $"ADAUTH:MCS\\{username}";
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            return result;
                        }
                    }
                    else {
                        dyCRMSetting.AdfsUrl = $"{dyCRMSetting.AdfsUrl}adfs/oauth2/token";
                        dyCRMSetting.CrmUrl = $"{dyCRMSetting.CrmUrl}/api/data/v9.0";
                        var data = GetToken(dyCRMSetting.ClientId, dyCRMSetting.ClientSecret, username, password, dyCRMSetting.CrmUrl, dyCRMSetting.AdfsUrl);

                        try
                        {
                            string geturl = dyCRMSetting.CrmUrl + GetUserFetchXml(@"sfmotors\" + username);

                            if (data["access_token"] != null)
                            {
                                result.access_token = data["access_token"].ToString();
                                datauser = QueryCrmData(geturl, data["access_token"].ToString());
                                if (datauser!=null)
                                {
                                    result.access_token = data["access_token"].ToString();
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            return result;
                        }
                    }

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
                    }

                    return result;
                }
                else
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

        public JObject QueryCrmDataADValidate(string crmurl, HttpClient httpClient)
        {
            //验证合法
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
            httpClient.DefaultRequestHeaders.Add("OData-Version", "4.0");
            //httpClient.DefaultRequestHeaders.Add("Content-Type-ChartSet", "utf-8");
            ////httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
            httpClient.DefaultRequestHeaders.Add("Prefer", "odata.include-annotations=\"*\"");
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
}
