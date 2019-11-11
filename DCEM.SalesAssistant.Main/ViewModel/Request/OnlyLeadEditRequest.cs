using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class OnlyLeadEditRequest
    {
        /// <summary>
        /// 操作编码  1、新增  2、修改
        /// </summary>
        public int actioncode { get; set; }
        public OnlyLead onlylead { get; set; }
    }


    /// <summary>
    /// 唯一线索实体类
    /// </summary>
    public class OnlyLead 
    {
        /// <summary>
        /// 主键ID
        /// </summary>
        public Guid mcs_onlyleadid { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_name { get; set; }

        /// <summary>
        /// 线索来源
        /// </summary>
        public int? mcs_leadorigin { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        public int? mcs_gender { get; set; }

        /// <summary>
        /// 邮箱
        /// </summary>
        public string mcs_emailaddress1 { get; set; }

        /// <summary>
        /// 评分
        /// </summary>
        public int? mcs_accountpoints { get; set; }

        /// <summary>
        /// 用车省份
        /// </summary>
        public string mcs_usecarprovince { get; set; }

        /// <summary>
        /// 用车城市
        /// </summary>
        public string mcs_usecarcity { get; set; }

        /// <summary>
        /// 省份ID
        /// </summary>
        public Guid? mcs_provinceid { get; set; }

        /// <summary>
        /// 市ID
        /// </summary>
        public Guid? mcs_cityid { get; set; }

        /// <summary>
        /// 区ID
        /// </summary>
        public Guid? mcs_districtid { get; set; }

        /// <summary>
        /// 用户ID
        /// </summary>
        public Guid? systemuserid { get; set; }
    }
}
