using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
   public  class UserNoticeRequest:PageBaseRequestModel
    {
        /// <summary>
        /// 查询关键字
        /// </summary>
        public string Search { set; get; }
    }
}
