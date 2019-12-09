using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel
{
    public class AttachmentAddResponse
    {
        /// <summary>
        /// lookup字段名称
        /// </summary>
        public string attrname { get; set; }
        /// <summary>
        /// lookup实体名称
        /// </summary>
        public string entitylookup { get; set; }
        public string id { get; set; }
        public string filename { get; set; }
        public int filesize { get; set; }
        public string url { get; set; }
        /// <summary>
        /// 合作伙伴类型（0：服务商，1：企业客户，2：上牌记录，3：整车开票记录，4：充电桩安装勘测申请，5：客户信用审核记录，6：PDI检测，7：考核单附件 8:技术支持申请单9：货损货差单 ,10:质量反馈单，11:维修案例单，12:维修案例发布 13：课程排课信息，14：技术信息文档，15：已发布技术信息文档，16:电池维修记录, 17:RTM故障处理单,18:客诉工单，19:试乘试驾记录）
        /// </summary>
        public int? mcs_partnertype { get; set; }
        /// <summary>
        /// 附件类型（0：档案附件，1：合同附件，2：上牌附件，3：身份证附件，4：整车发票附件，5：充电桩安装勘测施工图，6：客户信用审核，7：整车补贴申请附件，8：PDI检测附件，9：服务商考核单附件，10：厅店考核单附件,11:技术支持申请单附件；12：货损货差单附件;13:质量反馈单 ;14:维修案例单;15:维修案例发布;16:课程排课附件;17:技术信息文档；18：已发布技术信息文档；
        /// </summary>
        public int? mcs_filecategory { get; set; }
    } 



      




}
