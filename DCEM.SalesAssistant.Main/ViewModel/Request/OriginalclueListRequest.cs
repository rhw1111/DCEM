using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class OriginalclueListRequest: PageBaseRequestModel
    {
        public string Search { get; set; }
        public string DealerId { get; set; }
    }
}
