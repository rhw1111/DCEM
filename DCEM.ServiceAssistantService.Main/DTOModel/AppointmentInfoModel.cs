/*
    文件名：AppointmentInfoModel.cs
    功能描述：预约跟进实体类  
    创建时间：2019年10月23日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoModel
    {
        /// <summary>
        /// ID
        /// </summary>
        public Guid mcs_appointmentinfoid { set; get; }

        /// <summary>
        /// 预约单号
        /// </summary>
        public string mcs_name { get; set; }

        /// <summary>
        /// 客户姓名
        /// </summary>
        public string mcs_customername { get; set; }

        /// <summary>
        /// 车牌号
        /// </summary>
        public string mcs_carplate { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public string mcs_appointmentat { get; set; }

        /// <summary>
        /// 预约时段
        /// </summary>
        public string mcs_appointmentconfigid { get; set; }

        /// <summary>
        /// 预约状态
        /// </summary>
        public string mcs_status { get; set; }

    }
}
