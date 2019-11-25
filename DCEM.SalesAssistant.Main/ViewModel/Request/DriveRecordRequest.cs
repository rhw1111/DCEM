using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DriveRecordRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string Search { get; set; }

        /// <summary>
        /// 厅店Id
        /// </summary>
        public Guid? DealerId { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        public int? Status { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? OrderTime { get; set; }
    }
}
