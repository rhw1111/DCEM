using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class VehlisenseDetailRepository
    {
        /// <summary>
        /// 发票明细
        /// </summary>
        public CrmEntity Detail { get; set; }
        /// <summary>
        /// 附件明细
        /// </summary>
        public List<CrmEntity> AttmDetail { get; set; } 
    }
}
