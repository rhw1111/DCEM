using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DeliveryEditRequest:BaseRequest
    {
        //门店id
        public Guid dealerId { get; set; }
        //交车单id
        public string id { get; set; }
        //客户约定
        public string customerrequest { get; set; }
        //客户预约时间
        public string appointmenton { get; set; }
    }
}
