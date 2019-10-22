using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;

using System.Net.Http;
using MSLibrary.Xrm;
using MSLibrary.DI;

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
            var crmService = DIContainerContainer.Get<CrmService>();
            if (crmService != null)
            {
                crmService.CrmApiMaxRetry = CrmConfirguration.CrmApiMaxRetry;
                crmService.CrmApiVersion = CrmConfirguration.CrmApiVersion;
                crmService.CrmUrl = CrmConfirguration.CrmUrl;
                crmService.TokenServiceType = CrmConfirguration.TokenServiceType;
                crmService.TokenServiceParameters.Add("AdfsUrl", CrmConfirguration.AdfsUrl);
                crmService.TokenServiceParameters.Add("CrmUrl", CrmConfirguration.CrmUrl);
                crmService.TokenServiceParameters.Add("ClientId", CrmConfirguration.ClientId);
                crmService.TokenServiceParameters.Add("ClientSecret", CrmConfirguration.ClientSecret);
                crmService.TokenServiceParameters.Add("UserName", CrmConfirguration.UserName);
                crmService.TokenServiceParameters.Add("Password", CrmConfirguration.Password);
                crmService.TokenServiceParameters.Add("RedirectUri", CrmConfirguration.RedirectUri);
                
            }
            return crmService;
        }
    }
}
