using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class LeadRequest
    {
        /// <summary>
        /// 全名
        /// </summary>
        public string mcs_fullname { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        public string mcs_userid { get; set; }
        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_mobilephone { get; set; }
        /// <summary>
        /// 邮箱
        /// </summary>
        public string emailaddress1 { get; set; }
        /// <summary>
        /// 线索来源
        /// </summary>
        public int? mcs_leadorigin { get; set; }
        /// <summary>
        /// 性别
        /// </summary>
        public int? mcs_gender { get; set; }
        /// <summary>
        /// 省编号
        /// </summary>
        public string mcs_provinceid { get; set; }
        /// <summary>
        /// 市编号
        /// </summary>
        public string mcs_cityid { get; set; }
        /// <summary>
        /// 区编号
        /// </summary>
        public string mcs_areaid { get; set; }
        /// <summary>
        /// 评分
        /// </summary>
        public int? mcs_accountpoints { get; set; }
        /// <summary>
        /// 线索描述
        /// </summary>
        public string description { get; set; }
        /// <summary>
        /// 厅店
        /// </summary>
        public string mcs_dealerid { get; set; }
        /// <summary>
        /// 用户行为编号
        /// </summary>
        public string behaviorcode { get; set; }
        /// <summary>
        /// 预约意向车型
        /// </summary>
        public string mcs_blindordervehtype { get; set; }
        /// <summary>
        /// 订单号
        /// </summary>
        public string mcs_order { get; set; }
        /// <summary>
        /// 预约号
        /// </summary>
        public string mcs_premiumcode { get; set; }
        /// <summary>
        /// 用车城市
        /// </summary>
        public string mcs_usecarcity { get; set; }
        /// <summary>
        /// 用车省份
        /// </summary>
        public string mcs_usecarprovince { get; set; }      
        /// <summary>
        /// 下单时间
        /// </summary>
        public DateTime? mcs_ordertime { get; set; }
        /// <summary>
        /// 订单状态 1-订购,3-取消,5-使用,7-已支付,9-退款申请
        /// </summary>
        public int? mcs_optiontype { get; set; }
        /// <summary>
        /// 线索媒体
        /// </summary>
        public string mediacode { get; set; }
        /// <summary>
        /// 线索终端
        /// </summary>
        public string terminalcode { get; set; }
        /// <summary>
        /// 引流渠道
        /// </summary>
        public int? mcs_channel { get; set; }
        /// <summary>
        /// 数据来源 默认为1:API 接口
        /// </summary>
        public int mcs_leadsource { get; set; } = 1;
        /// <summary>
        /// 预售描述
        /// </summary>
        public string mcs_orderdescription { get; set; }

    }
}
