using System;
using System.Collections.Generic;
using System.Text;
/// <summary>
/// logcall 请求参数model
/// </summary>
namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class LogCallRequest: PageBaseRequestModel
    {

        /// <summary>
        /// 唯一线索主键ID
        /// </summary>
        public string entityid { get; set; }
    }
}
