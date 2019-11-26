using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;

using System.Net.Http;
using MSLibrary.Xrm;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;

namespace DCEM.ServiceAssistantService.Main
{
    public static class StartupHelper
    {
        /// <summary>
        /// 初始化Crm服务
        /// </summary>
        /// <returns></returns>
        public static CrmService CreateCrmService()
        {
            var coreConfiguration = ConfigurationContainer.Get<ServingAssConfiguration>(ConfigurationNames.Application);
            
            var crmService = DIContainerContainer.Get<CrmService>();
            if (coreConfiguration.DyCRMSetting != null)
            {
                var dyCRMSetting = coreConfiguration.DyCRMSetting;
                if (crmService != null)
                {
                    crmService.CrmApiMaxRetry = dyCRMSetting.CrmApiMaxRetry;
                    crmService.CrmApiVersion = dyCRMSetting.CrmApiVersion;
                    crmService.CrmUrl = dyCRMSetting.CrmUrl;
                    crmService.TokenServiceType = dyCRMSetting.TokenServiceType;
                    crmService.TokenServiceParameters.Add("AdfsUrl", dyCRMSetting.AdfsUrl);
                    crmService.TokenServiceParameters.Add("Domain", dyCRMSetting.Domain);
                    crmService.TokenServiceParameters.Add("CrmUrl", dyCRMSetting.CrmUrl);
                    crmService.TokenServiceParameters.Add("ClientId", dyCRMSetting.ClientId);
                    crmService.TokenServiceParameters.Add("ClientSecret", dyCRMSetting.ClientSecret);
                    crmService.TokenServiceParameters.Add("UserName", dyCRMSetting.UserName);
                    crmService.TokenServiceParameters.Add("Password", dyCRMSetting.Password);
                    crmService.TokenServiceParameters.Add("RedirectUri", dyCRMSetting.RedirectUri);

                }
            }
            
            return crmService;
        }
    }
}
