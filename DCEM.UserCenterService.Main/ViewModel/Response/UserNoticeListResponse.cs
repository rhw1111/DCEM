using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Response
{
   public class UserNoticeListResponse
    {
        /// <summary>
        /// C端用户通知信息
        /// </summary>
        public List<CrmEntity> Notices { get; set; }
    }
}
