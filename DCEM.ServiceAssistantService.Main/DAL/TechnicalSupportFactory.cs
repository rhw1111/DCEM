using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;
using MSLibrary.LanguageTranslate;
using MSLibrary.Serializer;
using System.Net.Http;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class TechnicalSupportFactory : IFactory<Task<IAppTechnicalSupport>>
    {
        public async Task<IAppTechnicalSupport> Create()
        {
            try
            {
                var crmService = DIContainerContainer.Get<CrmService>();
                if (crmService!=null)
                {
                    crmService.CrmApiMaxRetry = 10;
                    crmService.CrmApiVersion = "1.0";
                    crmService.CrmUrl = CrmConfirguration.MSCRM_URL;
                    crmService.TokenServiceType = "ADFSPassword";
                    //ADFSPassword
                    //{
                    // "AdfsUrl":"string,ADFS的地址",
                    // "CrmUrl":"string,Crm的地址",
                    // "ClientId":"string,在ADFS中注册的ClientId",
                    // "ClientSecret":"string,在ADFS中注册的服务器应用程序的密码",
                    // "UserName":"string,用户名",
                    // "Password":"string,密码"
                    // }
                    //string oauthurl = "https://subcrmadfs.sokon.com/adfs/oauth2/token";//adfs oauth2 认证地址
                    //string client_id = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";//客户端明文id
                    //string client_secret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";//客户端密文
                    //string state = "bill";//状态，用于传输到adfs端进行认证后，会原样返回
                    //string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2";//模拟登陆的资源地址
                    crmService.TokenServiceParameters.Add("AdfsUrl", "https://subcrmadfs.sokon.com/");
                    crmService.TokenServiceParameters.Add("CrmUrl", "https://subcrmdev.sokon.com/");
                    crmService.TokenServiceParameters.Add("ClientId", "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f");
                    crmService.TokenServiceParameters.Add("ClientSecret", "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O");
                    crmService.TokenServiceParameters.Add("UserName", "sfmotors/subcrmadmin");
                    crmService.TokenServiceParameters.Add("Password", "password01#");
                }
                //ICrmService _crmService = new CrmService(null, null, null, null) {
                //    CrmApiVersion = "1.0.0.0",
                //    CrmApiMaxRetry = 10,
                //    CrmUrl = CrmConfirguration.MSCRM_URL,
                //    TokenServiceType = "",
                //};

                ITechnicalSupportRepository followRepository = new TechnicalSupportRepository();
                ITechnicalSupportService technicalSupportService = new TechnicalSupportService(crmService);
                IAppTechnicalSupport app = new AppTechnicalSupport(technicalSupportService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
