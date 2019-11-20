using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DriveRecordAddOrEditRequest
    {

        public int ActionCode { get; set; }

        public DriveRecord driveRecord { get; set; }
    }

    public class DriveRecord
    {
        /// <summary>
        /// 试乘试驾ID
        /// </summary>
        public Guid? mcs_driverecordid { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_fullname { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_mobilephone { get; set; }

        /// <summary>
        /// 车型
        /// </summary>
        public Guid? mcs_carmodel { get; set; }

        /// <summary>
        /// 业务类型 10-试乘，11-试驾
        /// </summary>
        public int? mcs_businesstype { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? mcs_ordertime { get; set; }

        /// <summary>
        /// 预约时段
        /// </summary>
        public Guid? mcs_testdrivetime { get; set; }

        /// <summary>
        /// 预约厅店
        /// </summary>
        public Guid? mcs_dealerid { get; set; }

        /// <summary>
        /// 销售顾问
        /// </summary>
        public Guid? mcs_consultantid { get; set; }

        /// <summary>
        /// 试驾类型 10-试乘，11-试驾
        /// </summary>
        public int? mcs_drivestatus { get; set; }
    }
}
