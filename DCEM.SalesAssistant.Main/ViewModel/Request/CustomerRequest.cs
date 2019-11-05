using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class AccountRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }

        /// <summary>
        /// 厅店Id
        /// </summary>
        public Guid? mcs_dealerid { get; set; }

        /// <summary>
        /// ownerId
        /// </summary>
        public Guid? ownerid { get; set; }
    }
}
