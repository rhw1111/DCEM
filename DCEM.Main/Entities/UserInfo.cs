using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main.Entities
{
    public class UserInfo
    {
        public UserInfo()
        {
            access_token = string.Empty;
        }
        public string access_token { get; set; }
        public Guid? systemuserid { get; set; }
        public string domainname { get; set; }
        public string lastname { get; set; }
        public string firstname { get; set; }
        public string mcs_staffid { get; set; }
        public string mcs_dealerid { get; set; }
        public string mcs_dealername { get; set; }
        public string mcs_dealercode { get; set; }
    }
}
