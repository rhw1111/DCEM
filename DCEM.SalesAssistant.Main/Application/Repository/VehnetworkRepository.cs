using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class VehnetworkRepository : IVehnetworkRepository
    {
        /// <summary>
        /// 列表获取
        /// </summary>
        /// <param name="deliveryListRequest"></param>
        /// <returns></returns>
        public async Task<XDocument> GetListFetchXml(VehnetworkListRequest deliveryListRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var filterStr = "";
                if (!string.IsNullOrEmpty(deliveryListRequest.SearchKey))
                {
                    filterStr += $@"  <filter type='or'>
                    <condition attribute='mcs_code' operator='like' value='%{deliveryListRequest.SearchKey}%' />
                    <condition attribute='mcs_invoicephone' operator='like' value='%{deliveryListRequest.SearchKey}%' />
                    <condition attribute='mcs_invoiceidcode' operator='like' value='%{deliveryListRequest.SearchKey}%' />
                    <condition attribute='mcs_invoicename' operator='like' value='%{deliveryListRequest.SearchKey}%' />
                    </filter>/>
                    ";
                }

                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'
                   count='{deliveryListRequest.PageSize}' page='{deliveryListRequest.PageIndex}'>
  <entity name='mcs_vehnetwork'>
  <attribute name='mcs_code' />
    <attribute name='createdon' />
    <attribute name='mcs_vehorder' />
    <attribute name='mcs_invoiceon' />
    <attribute name='mcs_invoicename' />
    <attribute name='mcs_opencardtime' />
    <attribute name='mcs_deliveryon' />
    <attribute name='mcs_vehdelivery' />
    <attribute name='mcs_vin' />
    <attribute name='mcs_tservicestatus' />
    <attribute name='mcs_dealer' />
    <attribute name='mcs_caruse' />
    <attribute name='mcs_vehnetworkid' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='mcs_dealer' operator='eq' value='{deliveryListRequest.DealerId}' />
{filterStr}
    </filter> 
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        /// <summary>
        /// 开票明细
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<XDocument> GetDetaillFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_vehnetwork'>
    <attribute name='mcs_vin' />
    <attribute name='mcs_vehdelivery' />
    <attribute name='mcs_invoicename' />
    <attribute name='mcs_vehorder' />
    <attribute name='mcs_invoicephone' />
    <attribute name='mcs_invoiceidcode' />
    <attribute name='mcs_invoiceidtype' />
    <attribute name='mcs_carproperty' />
    <attribute name='mcs_caruse' />
    <attribute name='mcs_remark' />
    <attribute name='mcs_code' />
    <attribute name='createdon' />
    <attribute name='mcs_invoiceon' />
    <attribute name='mcs_opencardtime' />
    <attribute name='mcs_deliveryon' />
    <attribute name='mcs_tservicestatus' />
    <attribute name='mcs_dealer' />
    <attribute name='mcs_caruse' />
    <attribute name='mcs_vehnetworkid' />
    <order attribute='createdon' descending='true' />
    <filter type='and'> 
      <condition attribute='mcs_vehnetworkid' operator='eq'   uitype='mcs_vehnetwork' value='{id}' />
    </filter>
  <link-entity name='mcs_vehorder' from='mcs_vehorderid' to='mcs_vehorder' visible='false' link-type='outer' >
      <attribute name='mcs_contactname' alias='mcs_contactname'/>
      <attribute name='mcs_contactphone' alias='mcs_contactphone'/>
      <attribute name='mcs_idcard' alias='mcs_idcard'/>
      <attribute name='mcs_rostatus' alias='mcs_rostatus'/>
      <attribute name='mcs_orderon' alias='mcs_orderon'/>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


        /// <summary>
        /// 附件材料
        /// </summary>
        /// <param name="id"></param>
        /// <param name="partnertype">单据类型 开通车联网 3  ； 合作伙伴类型（0：服务商，1：企业客户，2：上牌记录，3：整车开票记录，4：充电桩安装勘测申请，5：客户信用审核记录，6：PDI检测，7：考核单附件 8:技术支持申请单9：货损货差单 ,10:质量反馈单，11:维修案例单，12:维修案例发布 13：课程排课信息，14：技术信息文档，15：已发布技术信息文档，16:电池维修记录, 17:RTM故障处理单,18:客诉工单，19:试乘试驾记录）
        /// </param>
        /// <param name="filecategory">附件类型 身份证附件 3 ；整车发票附件 4 ；整车补贴申请附件 7</param>
        /// <returns></returns>
        public async Task<XDocument> GetAttachmentDetaillFetchXml(Guid id,string partnertype,string filecategory)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_attachment'>
    <attribute name='mcs_filetype' />
    <attribute name='mcs_fileurl' />
    <attribute name='mcs_code' />
    <attribute name='mcs_filesize' /> 
    <order attribute='createdon' descending='true' />
    <filter type='and'> 
      <condition attribute='mcs_partnertype' operator='eq'    value='{partnertype}' />
      <condition attribute='mcs_filecategory' operator='eq'   value='{filecategory}' />
      <condition attribute='mcs_vehnetwork' operator='eq'   uitype='mcs_vehnetwork' value='{id}' /> 
    </filter> 
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


         
    }
}
