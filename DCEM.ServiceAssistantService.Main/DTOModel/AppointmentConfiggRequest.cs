/*
    文件名：AppointmentConfiggRequest.cs
    功能描述：预约时段请求参数类  
    创建时间：2019年10月23日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentConfiggRequest
    {
        /// <summary>
        /// 厅店ID
        /// </summary>
        public Guid mcs_dealerid { get; set; }

        /// <summary>
        /// 预约服务类型
        /// </summary>
        public int? mcs_servetype { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? mcs_servedate { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        public string sort { get; set; }

        /// <summary>
        /// 每页条数
        /// </summary>
        public int pageSize { get; set; }

        /// <summary>
        /// 页数
        /// </summary>
        public int page { get; set; }
    }
}
