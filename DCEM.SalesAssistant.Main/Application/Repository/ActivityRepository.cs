using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class ActivityRepository : IActivityRepository
    {



        /// <summary>
        /// 列表获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<XDocument> GetListFetchXml(ActivityRequest request)
        {
            return await Task<XDocument>.Run(() =>
            {
                var filterStr = "";
                if (!string.IsNullOrEmpty(request.SearchKey))
                {

                    filterStr += $@"  <filter type='or'>
                       <condition attribute='mcs_name' operator='like' value='%{request.SearchKey}%' />
                       <condition attribute='mcs_activitystatus' operator='eq' value='{request.mcs_activitystatus}' /> 
                     </filter>/>
                    ";
                }
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'
                   count='{request.PageSize}' page='{request.PageIndex}'>
  <entity name='mcs_activity'>
  <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_importantlevel' />
    <attribute name='mcs_endtime' />
    <attribute name='mcs_activitystatus' />
    <attribute name='ownerid' />
    <attribute name='mcs_nextfollowuptime' />
    <attribute name='mcs_nextfollowupcontent' />
    <attribute name='mcs_thisfollowupcontent' />
    <attribute name='mcs_onlyleadid' />
    <attribute name='mcs_activityid' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' /> 
{filterStr}
    </filter> 
   <link-entity name='mcs_onlylead' from='mcs_onlyleadid' to='mcs_onlyleadid' visible='false' link-type='outer' >
      <attribute name='mcs_mobilephone' alias='mobilephone'/>
      <attribute name='mcs_name' alias='onlyleadname'/>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        /// <summary>
        /// 明细
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<XDocument> GetDetaillFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_activity'>
     <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_importantlevel' />
    <attribute name='mcs_endtime' />
    <attribute name='mcs_activitystatus' />
    <attribute name='mcs_excutestatus' />
    <attribute name='ownerid' />
    <attribute name='mcs_nextfollowuptime' />
    <attribute name='mcs_nextfollowupcontent' />
    <attribute name='mcs_thisfollowupcontent' />
    <attribute name='mcs_accountid' />
    <attribute name='mcs_onlyleadid' />
    <attribute name='mcs_contactid' />
    <attribute name='mcs_activityid' />
    <filter type='and'> 
      <condition attribute='mcs_activityid' operator='eq'   uitype='mcs_vehnetwork' value='{id}' />
    </filter> 
    <link-entity name='mcs_onlylead' from='mcs_onlyleadid' to='mcs_onlyleadid' visible='false' link-type='outer' >
        <attribute name='mcs_name'  alias='onlyleadname'/>
        <attribute name='mcs_emailaddress1' alias='onlyleademail'/>
        <attribute name='mcs_mobilephone' alias='onlyleadphone'/>
        <attribute name='mcs_leadorigin' alias='onlyleadorigin'/>
        <attribute name='mcs_gender' alias='onlyleadgender' />
        <attribute name='mcs_accountpoints' alias='onlyleadpoints'/>  
        <link-entity name='mcs_sysarea' from='mcs_sysareaid' to='mcs_provinceid' visible='false' link-type='outer' >
            <attribute name='mcs_name'  alias='onlyleadprovince'/>
        </link-entity>
        <link-entity name='mcs_sysarea' from='mcs_sysareaid' to='mcs_cityid' visible='false' link-type='outer'>
            <attribute name='mcs_name' alias='onlyleadcity' />
        </link-entity>
    </link-entity>
 <link-entity name='account' from='accountid' to='mcs_accountid' visible='false' link-type='outer' >
    <attribute name='accountnumber' alias='accountnumber'/>
    <attribute name='name' alias='accountname' />
    <attribute name='mcs_mobilephone'  alias='accountphone'/>
    <attribute name='mcs_ordernumber'  alias='accountorder'/>
    <attribute name='mcs_tc_order'  alias='accounttcorder'/>
    <attribute name='createdon' alias='accountcreatedon' /> 
    </link-entity>
 <link-entity name='contact' from='contactid' to='mcs_contactid' visible='false' link-type='outer' >
    <attribute name='mcs_code' alias='contactcode' />
    <attribute name='fullname' alias='contactname'/>
    <attribute name='mcs_identitycard' alias='contactidentitycard'/>
    <attribute name='mobilephone' alias='contactphone'/>
    <attribute name='mcs_idtype' alias='contactidtype'/>
    <attribute name='createdon' alias='contactcreatedon'/> 
    <attribute name='mcs_userid' alias='contactuserid'/> 
    <attribute name='emailaddress1' alias='contactemailaddress'/> 
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


        #region 销售机会实体获取 
        public async Task<XDocument> GetAccountFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
     <attribute name='accountnumber' alias='accountnumber'/>
    <attribute name='name' alias='accountname' />
    <attribute name='mcs_mobilephone'  alias='accountphone'/>
    <attribute name='mcs_ordernumber'  alias='accountorder'/>
    <attribute name='mcs_tc_order'  alias='accounttcorder'/>
    <attribute name='createdon' alias='accountcreatedon' /> 
    <filter type='and'> 
      <condition attribute='accountid' operator='eq'    value='{id}' />
    </filter>  
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion


        #region 潜客实体获取 
        public async Task<XDocument> GetContactFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='contact'>
     <attribute name='mcs_code' alias='contactcode' />
    <attribute name='fullname' alias='contactname'/>
    <attribute name='mcs_identitycard' alias='contactidentitycard'/>
    <attribute name='mobilephone' alias='contactphone'/>
    <attribute name='mcs_idtype' alias='contactidtype'/>  
    <attribute name='mcs_userid' alias='contactuserid'/> 
    <attribute name='emailaddress1' alias='contactemailaddress'/> 
    <filter type='and'> 
      <condition attribute='contactid' operator='eq'    value='{id}' />
    </filter>  
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion


        #region 唯一线索实体获取 
        public async Task<XDocument> GetOnlyleadFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_onlylead'>
    <attribute name='mcs_name'  alias='onlyleadname'/>
    <attribute name='mcs_emailaddress1' alias='onlyleademail'/>
    <attribute name='mcs_mobilephone' alias='onlyleadphone'/>
    <attribute name='mcs_leadorigin' alias='onlyleadorigin'/>
    <attribute name='mcs_gender' alias='onlyleadgender' />
    <attribute name='mcs_accountpoints' alias='onlyleadpoints'/>  
    <filter type='and'> 
      <condition attribute='mcs_onlyleadid' operator='eq'    value='{id}' />
    </filter>  
    <link-entity name='mcs_sysarea' from='mcs_sysareaid' to='mcs_provinceid' visible='false' link-type='outer' >
        <attribute name='mcs_name'  alias='onlyleadprovince'/>
    </link-entity>
    <link-entity name='mcs_sysarea' from='mcs_sysareaid' to='mcs_cityid' visible='false' link-type='outer'>
        <attribute name='mcs_name' alias='onlyleadcity' />
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion
    }
}
