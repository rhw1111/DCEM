using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class VehlisenseListRequest : PageBaseRequestModel
    {
        public string SearchKey { get; set; }
        public string DealerId { get; set; }
        public int Type { get; set; }
    }
}
