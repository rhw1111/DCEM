using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Response
{
    /// <summary>
    /// 获取accesstoken鉴权返回参数
    /// </summary>
    public class MarketingCloudConfigAuthResponse
    {
        public string msgCode { get; set; }

        public string msg { get; set; }

        public List<Authresp> resp { get; set; }

        public string success { get; set; }

        public int total { get; set; }
    }

    public class Authresp
    {
        public string mobilePhone { get; set; }


        public string accessToken { get; set; }
    }
}
