using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DeliveryEditRequest:BaseRequest
    {
        //门店id
        public string dealerId { get; set; }
        //交车单id
        public string id { get; set; }
        //客户约定
        public string customerrequest { get; set; }
        //客户预约时间
        public DateTime appointmenton { get; set; }
        /// <summary>
        /// 服务顾问
        /// </summary>
        public string adviser { get; set; }
    }
}
