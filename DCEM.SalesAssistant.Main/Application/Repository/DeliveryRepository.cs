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
    public class DeliveryRepository : IDeliveryRepository
    {
        public async Task<XDocument> GetListFetchXml(DeliveryListRequest deliveryListRequest, DeliveryListDtoModel? deliveryListDtoModel)
        {
            return await Task<XDocument>.Run(() =>
            {
                var filterStr = "";
                if (deliveryListRequest.DeliveryStatus != "-1")
                {
                    filterStr += $@"  <condition attribute='mcs_deliverystatus' operator='eq' value='{deliveryListRequest.DeliveryStatus}' />";
                }
                if (deliveryListDtoModel!=null)
                {
                    if (deliveryListDtoModel.vinEntitys.Count > 0 || deliveryListDtoModel.roEntitys.Count > 0)
                    {
                        filterStr += $@"<filter type='or'>";
                        if (deliveryListDtoModel.vinEntitys.Count > 0)
                        {
                            filterStr += $@" <condition attribute='mcs_vin' operator='in'>";
                            foreach (var item in deliveryListDtoModel.vinEntitys)
                            {
                                filterStr += $@"<value >{item.Id}</value>";
                            }
                            filterStr += "</condition>";
                        } 
                        if (deliveryListDtoModel.roEntitys.Count > 0)
                        {
                            filterStr += $@" <condition attribute='mcs_vehorder' operator='in'>";
                            foreach (var item in deliveryListDtoModel.roEntitys)
                            {
                                filterStr += $@"<value >{item.Id}</value>";
                            }
                            filterStr += "</condition>";
                        } 
                        filterStr += $@" <condition attribute='mcs_code' operator= 'like' value = '%{deliveryListRequest.SearchKey}%' />";
                        filterStr += "</filter >";
                    }
                    else {
                        filterStr += $@" <condition attribute='mcs_code' operator= 'like' value = '%{deliveryListRequest.SearchKey}%' />";
                    } 
                }
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'
                   count='{deliveryListRequest.PageSize}' page='{deliveryListRequest.PageIndex}'>
  <entity name='mcs_vehdelivery'>
    <attribute name='mcs_code' />
    <attribute name='createdon' />
    <attribute name='mcs_vehorder' />
    <attribute name='mcs_dealer' />
    <attribute name='mcs_deliverystatus' />
    <attribute name='mcs_deliveryon' />
    <attribute name='mcs_vin' />
    <attribute name='mcs_appointmenton' />
    <attribute name='mcs_vehmaterial' />
    <attribute name='mcs_pdiapproval' />
    <attribute name='mcs_pdidetecton' />
    <attribute name='mcs_serviceproxyid' />
    <attribute name='mcs_vehdeliveryid' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='mcs_dealer' operator='eq' value='{deliveryListRequest.DealerId}' />
{filterStr}
    </filter>
    <link-entity name='mcs_vehiclematerial' from='mcs_vehiclematerialid' to='mcs_vehmaterial' visible='false' link-type='outer' alias='mcs_vehiclematerial'>
      <attribute name='mcs_describe' />
      <attribute name='mcs_carlr' />
      <attribute name='mcs_excolourid' />
      <attribute name='mcs_carmodelid' />
      <attribute name='mcs_incolourid' />
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        public async Task<XDocument> GetVINListFetchXml(DeliveryListRequest deliveryListRequest)
        {
            return await Task<XDocument>.Run(() =>
            { 
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_vehicle'>
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_vehicleid' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='mcs_name'  operator= 'like' value = '%{deliveryListRequest.SearchKey}%' />
    </filter>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        public async Task<XDocument> GetRoOrderListFetchXml(DeliveryListRequest deliveryListRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_vehorder'>
    <attribute name='mcs_code' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='mcs_code' operator= 'like' value = '%{deliveryListRequest.SearchKey}%' />
    </filter>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        public async Task<XDocument> GetOrderPayListFetchXml(CollectionListRequest collectionListRequest)
        {
            return await Task<XDocument>.Run(() =>
            { 
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' count='{collectionListRequest.PageSize}' page='{collectionListRequest.PageIndex}'>
  <entity name='mcs_orderpaydetail'>
    <attribute name='mcs_orderpaydetailid' />
    <attribute name='mcs_code' />
    <attribute name='createdon' />
    <attribute name='transactioncurrencyid' />
    <attribute name='ownerid' />
    <attribute name='mcs_mallordercode' />
    <attribute name='statuscode' />
    <attribute name='statecode' />
    <attribute name='exchangerate' />
    <attribute name='mcs_itemcode' />
    <attribute name='mcs_itemname' />
    <attribute name='mcs_issettle' />
    <attribute name='mcs_iseo' />
    <attribute name='mcs_vehorder' />
    <attribute name='mcs_paycategory' />
    <attribute name='mcs_payway' />
    <attribute name='mcs_remark' />
    <attribute name='mcs_dealer' />
    <attribute name='overriddencreatedon' />
    <attribute name='createdonbehalfby' />
    <attribute name='createdby' />
    <attribute name='modifiedonbehalfby' />
    <attribute name='modifiedby' />
    <attribute name='modifiedon' />
    <attribute name='mcs_eorder' />
    <attribute name='mcs_amount_base' />
    <attribute name='mcs_amount' />
    <attribute name='mcs_payon' />
    <attribute name='mcs_vehdelivery' />
    <attribute name='mcs_batchcode' />
    <order attribute='mcs_code' descending='false' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='mcs_vehdelivery' operator='eq' value='{collectionListRequest.DeliveryId}'/>
    </filter>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        public async Task<XDocument> GetServiceConsultantListFetchXml(DeliveryEditRequest deliveryEditRequest)
        {
            return await Task<XDocument>.Run(() =>
            { 
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='systemuser'>
    <attribute name='fullname' />
    <attribute name='systemuserid' />
    <order attribute='fullname' descending='false' />
    <filter type='and'>
      <condition attribute='mcs_dealer' operator='eq' value='{deliveryEditRequest.dealerId}' />
    </filter>
    <link-entity name='systemuserroles' from='systemuserid' to='systemuserid' visible='false' intersect='true'>
      <link-entity name='role' from='roleid' to='roleid' alias='aa'>
        <filter type='and'>
          <condition attribute='name' operator='eq' value='维保-服务顾问' />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
