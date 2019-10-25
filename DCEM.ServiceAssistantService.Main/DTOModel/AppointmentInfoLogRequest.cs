/*
    文件名：AppointmentInfoLogRequest.cs
    功能描述：预约跟进请求参数类  
    创建时间：2019年10月23日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoLogRequest
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string entityid { get; set; }

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
