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
    <attribute name='ownerid' />
    <attribute name='mcs_nextfollowuptime' />
    <attribute name='mcs_nextfollowupcontent' />
    <attribute name='mcs_thisfollowupcontent' />
    <attribute name='mcs_onlyleadid' />
    <attribute name='mcs_activityid' />
    <filter type='and'> 
      <condition attribute='mcs_activityid' operator='eq'   uitype='mcs_vehnetwork' value='{id}' />
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





    }
}
