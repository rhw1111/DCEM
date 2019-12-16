//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System.Xml.Linq;
    using System;

    public class SalesOrderRepository : ISalesOrderRepository
    {
        public async Task<XDocument> GetDetailFetchXml(Guid orderid)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_tc_productorderitem'>
<all-attributes/>
    <order attribute='mcs_name' descending='false' />
    <link-entity name='mcs_tc_order' from='mcs_tc_orderid' to='mcs_order' link-type='inner' alias='aa'>
      <all-attributes/>
    </link-entity>
<filter type='and'>
        <condition attribute='mcs_tc_productorderitemid' operator='eq' value='{orderid}' />
      </filter>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        public async Task<XDocument> GetListFetchXml(SalesOrderListRequest salesOrderListRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var filterStr = "";
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_tc_productorderitem'>
    <attribute name='mcs_tc_productorderitemid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_productsku' />
    <attribute name='mcs_totalprice' />
    <attribute name='transactioncurrencyid' />
    <attribute name='ownerid' />
    <attribute name='mcs_order' />
    <attribute name='mcs_totalintegral' />
    <attribute name='mcs_unitintegral' />
    <attribute name='statuscode' />
    <attribute name='statecode' />
    <attribute name='exchangerate' />
    <attribute name='mcs_itemtype' />
    <attribute name='mcs_count' />
    <attribute name='mcs_paytype' />
    <attribute name='mcs_suborder' />
    <attribute name='mcs_product' />
    <attribute name='mcs_unitprice_base' />
    <attribute name='mcs_unitprice' />
    <attribute name='overriddencreatedon' />
    <attribute name='createdonbehalfby' />
    <attribute name='createdby' />
    <attribute name='modifiedonbehalfby' />
    <attribute name='modifiedby' />
    <attribute name='modifiedon' />
    <attribute name='mcs_totalprice_base' />
    <order attribute='mcs_name' descending='false' />
    <link-entity name='mcs_tc_order' from='mcs_tc_orderid' to='mcs_order' link-type='inner' alias='aa'>
      <attribute name='mcs_paystatus' />
      <filter type='and'>
        <condition attribute='mcs_orderclass' operator='eq' value='100' />
        <condition attribute='mcs_userid' operator='eq' value='{salesOrderListRequest.UserId}' />
      </filter>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
