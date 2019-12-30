using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
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
        public string mcs_dealercode { get; set; }
        /// <summary>
        /// 拥有角色名称
        /// </summary>
        public string rolenames { get; set; }
    }
}
