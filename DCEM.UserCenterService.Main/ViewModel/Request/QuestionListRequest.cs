//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    using System;
    using System.Collections.Generic;
    using MSLibrary.Xrm;


    public class QuestionListRequest : PageBaseRequestModel
    {
        public Guid id { get; set; }
    }

    public class QuestionDetailRequest
    {
        public Guid id { get; set; }
    }
    public class QuestionAddRequest
    {
        /// <summary>
        /// 回答渠道
        /// </summary
        public Guid mcs_deliverychannel { get; set; }

        /// <summary>
        /// 问卷编号
        /// </summary
        public Guid mcs_questionnairesetting { get; set; } 
        /// <summary>
        /// 回答人姓名
        /// </summary
        public Guid mcs_answername { get; set; }

        public List<QuestionAdd> model { get; set; }
    }


    public class QuestionAdd
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string mcs_name { get; set; }
        /// <summary>
        /// 回答内容编号 
        /// </summary
        public string mcs_answercontentcode { get; set; }
        /// <summary>
        /// 回答选项
        /// </summary
        public string mcs_answer { get; set; }
        /// <summary>
        /// 问题编号
        /// </summary
        public Guid mcs_questions { get; set; }
    }











}
