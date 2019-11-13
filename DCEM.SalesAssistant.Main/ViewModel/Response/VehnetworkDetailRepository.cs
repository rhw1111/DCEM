using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class VehnetworkDetailRepository
    {
        /// <summary>
        /// 发票明细
        /// </summary>
        public CrmEntity Detail { get; set; }
        /// <summary>
        /// 身份信息附件明细
        /// </summary>
        public List<CrmEntity> CardNoDetail { get; set; }
        /// <summary>
        /// 发票附件明细
        /// </summary>
        public List<CrmEntity> InvoiceDetail { get; set; }
    }
}
