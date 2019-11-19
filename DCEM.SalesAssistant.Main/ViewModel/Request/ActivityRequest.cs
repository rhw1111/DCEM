using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
/// <summary>
/// 培育任务 请求参数model
/// </summary>
namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class ActivityRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 唯一线索主键ID
        /// </summary>
        public string entityid { get; set; }

        /// <summary>
        /// 查询关键字
        /// </summary>
        public string SearchKey { set; get; }

        /// <summary>
        /// 任务状态
        /// </summary>
        public int? mcs_activitystatus { set; get; }
    }


    

    #region 培育任务详情model
    public class ActivityDetailModel
    {
        /// <summary>
        /// 培育任务基本信息
        /// </summary>
        public CrmEntity ActivityInfo { get; set; }

        /// <summary>
        /// 唯一线索基本信息
        /// </summary>
        public CrmEntity OnlyLeadInfo { get; set; }


    }
    #endregion
}
