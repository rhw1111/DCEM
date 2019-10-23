using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class TechnicalSupportModel
    {
        public Guid Id { set; get; }
        /// <summary>
        /// 申请单编号
        /// </summary>
        public string mcs_name { set; get; }
        /// <summary>
        /// 用户手机号
        /// </summary>
        public string mcs_customerphone { set; get; }
        /// <summary>
        /// 状态
        /// </summary>
        public int mcs_orderstatus { set; get; }
        /// <summary>
        /// 主题
        /// </summary>
        public string mcs_title { set; get; }
        /// <summary>
        /// 维修时间
        /// </summary>
        public DateTime? mcs_repairdate { set; get; }
    }
}
