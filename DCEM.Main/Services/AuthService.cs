using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using DCEM.Main;
using DCEM.Main.Configuration;
using DCEM.Main.Entities;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.Serializer;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using Newtonsoft.Json.Linq;

namespace DCEM.Main.Services
{
    public class AuthService : IAuthService
    {
        BaseConfiguration coreConfiguration = ConfigurationContainer.Get<BaseConfiguration>(ConfigurationNames.Application);
        CrmService _crmService = StartupHelper.CreateCrmService();

        public AuthService()
        {
        }


        public async Task<string> GetAuthToken(string username, string password)
        {
            string result = "";
            var dyCRMSetting = coreConfiguration.DyCRMSetting;
            try
            {
                if (dyCRMSetting != null)
                {
                    dyCRMSetting.AdfsUrl = $"{dyCRMSetting.AdfsUrl}adfs/oauth2/token";
                    dyCRMSetting.CrmUrl = $"{dyCRMSetting.CrmUrl}/api/data/v8.2";
                    var data = GetToken(dyCRMSetting.ClientId, dyCRMSetting.ClientSecret, username, password, dyCRMSetting.CrmUrl, dyCRMSetting.AdfsUrl);

                    result = data["access_token"].ToString();
                }
                return await Task.FromResult<string>(result);
            }
            catch (Exception ex)
            {
                return await Task.FromResult<string>(result);
            }
        }

        public async Task<UserInfo> GetLoginInfo(string username)
        {
            UserInfo result = new UserInfo();
            var dyCRMSetting = coreConfiguration.DyCRMSetting;
            try
            {
                var xdoc = await Task<XDocument>.Run(() =>
                {
                    var fetchXml = string.Empty;
                    fetchXml = GetUserFetchXml(username);
                    return XDocument.Parse(fetchXml);
                });

                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "systemuser",
                    FetchXml = xdoc
                };
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });
                fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
                var fetchResponse = await _crmService.Execute(fetchRequest);

                if (fetchResponse != null)
                {
                   var list=  fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                    if (list!=null && list.Value.Results!=null)
                    {
                        var entity = list.Value.Results[0];
                        if (entity!=null)
                        {
                            if (entity.Attributes["systemuserid"]!=null)
                            {
                                result.systemuserid = Guid.Parse(entity.Attributes["systemuserid"].ToString());
                            }
                            result.domainname = entity.Attributes["domainname"].ToString();
                            result.lastname = entity.Attributes["lastname"].ToString();
                            result.firstname = entity.Attributes["firstname"].ToString();
                            result.mcs_staffid = entity.Attributes["mcs_staffid"].ToString();
                            result.mcs_dealerid = entity.Attributes["_mcs_dealer_value"].ToString();
                          //  result.mcs_dealername = entity.Attributes["_mcs_dealer_value@"].ToString();
                        }
                    }

                }
                return result;
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

        public string GetUserFetchXml(string name)
        {
            var strFetch = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
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


        public async Task<Dictionary<string, AdfsEndpoint>> getData()
        {
            Dictionary<string, AdfsEndpoint> datas = new Dictionary<string, AdfsEndpoint>();
            //这里从配置中创建出对象键值对,请补充代码
            var dyCRMSetting = coreConfiguration.DyCRMSetting;

            datas.Add("Main", new AdfsEndpoint()
            {
                ID = Guid.NewGuid(),
                CreateTime = DateTime.UtcNow,
                ModifyTime = DateTime.UtcNow,
                Name = "Main",
                Uri = dyCRMSetting.AdfsUrl
            });

            return await Task.FromResult(datas);
        }
    }
}
