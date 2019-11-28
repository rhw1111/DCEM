using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
   public  class UsermessageRequest
    {
       public string phone { get; set; }
        /// <summary>
        /// 1注册；2登陆；3忘记密码；4修改密码
        /// </summary>
        public int type { get; set; }


        public string valcode { get; set; }
    }
}
