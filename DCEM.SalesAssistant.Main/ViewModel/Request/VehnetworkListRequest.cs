using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class VehnetworkListRequest : PageBaseRequestModel
    {
        public string SearchKey { get; set; }
        public string Status { get; set; }
        public string DealerId { get; set; }
    }
}
