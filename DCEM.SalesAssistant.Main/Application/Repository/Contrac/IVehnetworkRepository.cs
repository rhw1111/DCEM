using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IVehnetworkRepository
    {
        Task<XDocument> GetListFetchXml(VehnetworkListRequest deliveryListRequest);
        /// <summary>
        /// 开票明细
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<XDocument> GetDetaillFetchXml(Guid id);
        /// <summary>
        /// 附件材料
        /// </summary>
        /// <param name="id"></param>
        /// <param name="partnertype">单据类型 开通车联网 3  ； 合作伙伴类型（0：服务商，1：企业客户，2：上牌记录，3：整车开票记录，4：充电桩安装勘测申请，5：客户信用审核记录，6：PDI检测，7：考核单附件 8:技术支持申请单9：货损货差单 ,10:质量反馈单，11:维修案例单，12:维修案例发布 13：课程排课信息，14：技术信息文档，15：已发布技术信息文档，16:电池维修记录, 17:RTM故障处理单,18:客诉工单，19:试乘试驾记录）
        /// </param>
        /// <param name="filecategory">附件类型 身份证附件 3 ；整车发票附件 4 ；整车补贴申请附件 7</param>
        /// <returns></returns>
        Task<XDocument> GetAttachmentDetaillFetchXml(Guid id, string partnertype, string filecategory);
    }
}
