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
        public string mcs_businesstype { get; set; }

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
        /// 试驾状态(已提交 10、已预约 11、已排程 12、已取消 13、试驾开始 14、试驾结束  15、已反馈  16，已删除 17)
        /// </summary>
        public int? mcs_drivestatus { get; set; }

        /// <summary>
        /// 试驾车辆
        /// </summary>
        public Guid? mcs_drivecar { get; set; }

        /// <summary>
        /// 试驾路线
        /// </summary>
        public Guid? mcs_appointedrouteid { get; set; }

        /// <summary>
        /// 取消原因
        /// </summary>
        public string mcs_cancelreason { get; set; }

        /// <summary>
        /// 试驾开始时间
        /// </summary>
        public DateTime? mcs_starton { get; set; }

        /// <summary>
        /// 结束试驾试驾
        /// </summary>
        public DateTime? mcs_endon { get; set; }
    }
}
