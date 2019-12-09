using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Request
{
    public class AuthenticationConfigRequest : MarketingCloudConfigAuthRequest
    {
        /// <summary>
        /// 获取鉴权ur
        /// </summary>
        public string authenticationurl { get; set; }

        /// <summary>
        /// 获取accessToken时间，每20个小时更新一次
        /// </summary>
        public DateTime time { get; set; }

        public string accessToken { get; set; }
    }
}
