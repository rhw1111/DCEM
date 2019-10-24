using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoRequest
    {
        /// <summary>
        /// 预约单号
        /// </summary>
        public string mcs_name { get; set; }

        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }

        /// <summary>
        /// 客户姓名
        /// </summary>
        public string mcs_customername { get; set; }

        /// <summary>
        /// 客户手机号
        /// </summary>
        public string mcs_customerphone { get; set; }

        /// <summary>
        /// 车牌号
        /// </summary>
        public string mcs_carplate { get; set; }

        /// <summary>
        /// 预约状态
        /// </summary>
        public string mcs_status { get; set; }
    }
}
