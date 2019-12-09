using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class DriveRecordListResponse <T>
    {
        public DriveRecordListResponse() {
            Results = new List<T>();
        }

        /// <summary>
        /// 当前页
        /// </summary>
        public int CurrentPage { get; set; }
        /// <summary>
        /// 总记录数
        /// </summary>
        public int ALLTotalCount { get; set; }
        /// <summary>
        /// 已提交
        /// </summary>
        public int SubmittedCount { get; set; }
        /// <summary>
        /// 已排程
        /// </summary>
        public int ScheduledCount { get; set; }
        /// <summary>
        /// 已取消
        /// </summary>
        public int CancelledCount { get; set; }
        /// <summary>
        /// 开始试驾
        /// </summary>
        public int StartDriveCount { get; set; }

        /// <summary>
        ///结束试驾
        /// </summary>
        public int EndDriveCount { get; set; }
        /// <summary>
        ///已反馈
        /// </summary>
        public int FeedbackCount { get; set; }
        /// <summary>
        ///已删除
        /// </summary>
        public int DeletedCount { get; set; }
        /// <summary>
        /// 记录集
        /// </summary>
        public List<T> Results { get; set; }

    }
}
