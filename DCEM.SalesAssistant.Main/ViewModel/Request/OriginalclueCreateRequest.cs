using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class OriginalclueCreateRequest : BaseRequest
    { 
        public string username { get; set; }
        public string mobile { get; set; }
        public string mail { get; set; }
        public string clues { get; set; }
        public int gender { get; set; }
        public string province { get; set; }
        public string city { get; set; }
        public string area { get; set;}
        public string score { get; set; }
        public string describe { get; set; }
        public string dealerid { get; set; }
        /// <summary>
        /// 用户行为
        /// </summary>
        public string behaviorid { get; set; }
        
    }
}
