using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class OriginalclueListResponse: PageBaseResponseModel
    {
        public List<OriginalclueListData> originalclues { get; set; }
    }
    public class OriginalclueListData
    {
        public string UserName { get; set; }
        public string Mobile { get; set; }
        public string Clues { get; set; }
        public string XXX { get; set; }
    }
}
