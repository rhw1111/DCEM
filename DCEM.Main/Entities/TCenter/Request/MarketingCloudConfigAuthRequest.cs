using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Request
{
    public class MarketingCloudConfigAuthRequest
    {
        /// <summary>
        /// 账户
        /// </summary>
        public string account { get; set; }

        /// <summary>
        /// 渠道
        /// </summary>
        public string channel { get; set; }

        /// <summary>
        /// id
        /// </summary>
        public string clientId { get; set; }

        public string secret { get; set; }

        public string scope { get; set; }

        public string grantType { get; set; }
    }
}
