using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class OriginalclueListResponse: PageBaseResponseModel
    {
        public List<CrmEntity> originalclues { get; set; }
    }
    public class OriginalclueListData
    {
        /// <summary>
        /// 姓名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 手机号
        /// </summary>
        public string Mobile { get; set; }
        /// <summary>
        /// 线索终端
        /// </summary>
        public string Clues { get; set; }
        /// <summary>
        /// 称呼
        /// </summary>
        public string Gender { get; set; }
    }
}
