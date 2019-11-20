using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class TestdrivefeedbackResponse
    {
        /// <summary>
        /// 试乘试驾问题反馈
        /// </summary>
        public CrmEntity Master { get; set; }
        /// <summary>
        /// 问题项
        /// </summary>
        public List<CrmEntity>  Details { get; set; } 
    }
}
