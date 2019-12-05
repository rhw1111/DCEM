using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    /// <summary>
    /// 试驾反馈报告查询model
    /// </summary>
    public class TestDriveFeedbackRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 主键id
        /// </summary>
        public string mcs_testdrivefeedbackmasterid { set; get; }

    }
}
