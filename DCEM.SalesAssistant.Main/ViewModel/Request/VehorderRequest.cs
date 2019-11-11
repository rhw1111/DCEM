using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class VehorderRequest : PageBaseRequestModel
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string Search { get; set; }
    }
}
