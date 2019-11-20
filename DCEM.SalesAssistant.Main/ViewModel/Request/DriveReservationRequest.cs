using System;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DriveReservationRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string Search { get; set; }

        /// <summary>
        /// 车型
        /// </summary>
        public Guid? CarModelId { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? ReservationDate { get; set; }
    }
}
