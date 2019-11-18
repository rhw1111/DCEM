using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    /// <summary>
    /// 培育任务编辑参数
    /// </summary>
    public class ActivityEditRequest
    {

        /// <summary>
        /// 潜客
        /// </summary>
        public Guid? mcs_contactid { get; set; }
        /// <summary>
        /// 唯一线索
        /// </summary>
        public Guid? mcs_onlyleadid { get; set; }
        /// <summary>
        /// 销售机会
        /// </summary>
        public Guid? mcs_accountid { get; set; }
        public Guid id { get; set; }
        /// <summary>
        /// 任务状态 0open ;1 colse
        /// </summary>
        public int? mcs_activitystatus { get; set; }

        /// <summary>
        /// 线索状态  1=下次跟进；2=不感兴趣；3=电话未接通；4=会持续关注；5=未来感兴趣；6=空号/错号；7=已购买竞品；8=试乘试驾已预约
        /// </summary>
        public int? mcs_excutestatus { get; set; }
        /// <summary>
        /// 主题
        /// </summary>
        public string mcs_name { get; set; }
        /// <summary>
        ///  重要级别 0:高、1:中、2:低
        /// </summary>
        public int? mcs_importantlevel { get; set; }
        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime? mcs_endtime { get; set; }
        /// <summary>
        /// 本次跟进内容
        /// </summary>
        public string mcs_thisfollowupcontent { get; set; }
        /// <summary>
        /// 是否添加到描述 0否；1是
        /// </summary>
        public bool? mcs_isaddedtodes { get; set; }
        /// <summary>
        /// 是否系统创建 0否；1是
        /// </summary>
        public bool? mcs_ifsystemcreate { get; set; }
        /// <summary>
        /// 已生成下次跟进 0否；1是
        /// </summary>
        public bool? mcs_iffollowed { get; set; }
        /// <summary>
        /// 下次跟进内容
        /// </summary>
        public string mcs_nextfollowupcontent { get; set; }
        /// <summary>
        /// 下次跟进时间
        /// </summary>
        public DateTime? mcs_nextfollowuptime { get; set; }
    }




}
