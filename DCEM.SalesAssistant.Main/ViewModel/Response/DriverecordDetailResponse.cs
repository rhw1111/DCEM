using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class DriverecordDetailResponse
    {
        /// <summary>
        /// 试乘试驾明细
        /// </summary>
        public CrmEntity Detail { get; set; }
        /// <summary>
        /// 身份信息附件明细
        /// </summary>
        public List<CrmEntity> AttachmentDetail { get; set; } 
    }
}
