/*
    文件名：AppointmentInfoRequest.cs
    功能描述：预约单请求参数类  
    创建时间：2019年10月23日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoRequest
    {
        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? AppointmentAt { get; set; }

        /// <summary>
        /// 厅店ID
        /// </summary>
        public Guid? DealerId { get; set; }

        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string seachkey { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        public string sort { get; set; }

        /// <summary>
        /// 每页条数
        /// </summary>
        public int pageSize { get; set; } = 10;

        /// <summary>
        /// 页数
        /// </summary>
        public int page { get; set; } = 1;

        /// <summary>
        /// 预约状态
        /// </summary>
        public int status { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_customerphone { get; set; }
    }
}
