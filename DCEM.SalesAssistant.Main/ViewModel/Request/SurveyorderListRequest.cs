//==============================================
//文件名：SurveyorderListRequest.cs
//功能描述：勘测单列表接口查询条件实体
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class SurveyorderListRequest: PageBaseRequestModel
    {
        /// <summary>
        /// 查询关键字
        /// </summary>
        public string SearchKey { set; get; }
        /// <summary>
        /// 厅店ID
        /// </summary>
        public string mcs_dealerid { set; get; }
        /// <summary>
        /// 勘测状态
        /// </summary>
        public int? mcs_surveystatus { set; get; }
    }
}
