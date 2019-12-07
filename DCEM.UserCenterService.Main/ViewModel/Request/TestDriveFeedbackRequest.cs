using MSLibrary.Xrm;
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


    #region 试乘试驾反馈报告详情model
    public class TestDriveFeedbackDetailModel
    {
        public TestDriveFeedbackDetailModel()
        {
            DrivefeedbackList = new List<CrmEntity>();          
        }

        /// <summary>
        /// 基本信息
        /// </summary>
        public CrmEntity TestDriveFeedbackInfo { get; set; }

        /// <summary>
        /// 用户反馈问题项 mcs_testdrivefeedback
        /// </summary>
        public List<CrmEntity> DrivefeedbackList { get; set; }

      
    }
    #endregion
}
