using DCEM.Main;
using DCEM.UserCenterService.Main.Configuration;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main
{
  public  class StartupHelper
    {
        /// <summary>
        /// 初始化Crm服务
        /// </summary>
        /// <returns></returns>
        public static CrmService CreateCrmService()
        {
            var coreConfiguration = ConfigurationContainer.Get<UserCenterAssConfiguration>(ConfigurationNames.Application);

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
                    crmService.TokenServiceParameters.Add("Domain", dyCRMSetting.Domain);
                    crmService.TokenServiceParameters.Add("AdfsUrl", dyCRMSetting.AdfsUrl);
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
