using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoListResponse<T>
    {
        public AppointmentInfoListResponse()
        {
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
        /// 待跟进
        /// </summary>
        public int FollowingCount { get; set; }
        /// <summary>
        /// 已跟进
        /// </summary>
        public int FollowedCount { get; set; }
        /// <summary>
        /// 记录集
        /// </summary>
        public List<T> Results { get; set; }
    }
}
