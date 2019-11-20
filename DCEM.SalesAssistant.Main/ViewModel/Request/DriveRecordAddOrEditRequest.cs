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
        public Guid? DriveRecordId { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string MobilePhone { get; set; }

        /// <summary>
        /// 车型
        /// </summary>
        public Guid? CarModel { get; set; }

        /// <summary>
        /// 业务类型 10-试乘，11-试驾
        /// </summary>
        public int? BusinessType { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? OrderTime { get; set; }

        /// <summary>
        /// 预约时段
        /// </summary>
        public Guid? TestDriveTime { get; set; }

        /// <summary>
        /// 预约厅店
        /// </summary>
        public Guid? DealerId { get; set; }

        /// <summary>
        /// 销售顾问
        /// </summary>
        public Guid? ConsultantId { get; set; }

        /// <summary>
        /// 业务类型 10-试乘，11-试驾
        /// </summary>
        public int? DriveStatus { get; set; }
    }
}
