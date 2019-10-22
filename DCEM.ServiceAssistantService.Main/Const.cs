﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main
{
    /// <summary>
    /// 日志目录名称集
    /// </summary>
    public static class CrmConfirguration
    {
        /*
        string oauthurl = "https://subcrmadfs.sokon.com/adfs/oauth2/token";//adfs oauth2 认证地址
        string client_id = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";//客户端明文id
        string client_secret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";//客户端密文
        string state = "bill";//状态，用于传输到adfs端进行认证后，会原样返回
        string crmurl = "https://subcrmdev.sokon.com/api/data/v8.2";//模拟登陆的资源地址
        */
        public const string CrmApiVersion = "8.2";
        public const int CrmApiMaxRetry = 10;
        public const string TokenServiceType = "ADFSPassword";
        public const string CrmUrl = "https://subcrmdev.sokon.com";
        public const string CrmApiUrl = "https://subcrmdev.sokon.com/api/data/v8.2/";
        public const string AdfsUrl = "https://subcrmadfs.sokon.com/";
        public const string ClientId = "e5e014c7-b1ff-45a3-8c0a-991f5aa7ce8f";
        public const string ClientSecret = "A5V2S3Wn1NAir6igX2kr_Cm8hULdKOPnuXdruj4O";
        public const string UserName = @"sfmotors\subdevcrmadmin";
        public const string Password = "password01#";
        public const string RedirectUri = ""; 
    }
}
