using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DeliveryListRequest:PageBaseRequestModel
    {
        public string DealerId { get; set; }
        public string SearchKey { get; set; }
        public string DeliveryStatus { get; set; }
    }
}
