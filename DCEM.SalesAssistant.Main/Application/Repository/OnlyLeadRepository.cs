using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class OnlyLeadRepository : IOnlyLeadRepository
    {
        public string QueryList(OnlyLeadRequest onlyLeadRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(onlyLeadRequest.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{onlyLeadRequest.Search}%' />";
                filter += $"<condition attribute='mcs_userid' operator='like' value='%{onlyLeadRequest.Search}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{onlyLeadRequest.Search}%' />";
                filter += $"<condition attribute='mcs_emailaddress1' operator='like' value='%{onlyLeadRequest.Search}%' />";
                filter += $"</filter>";
            }
            if (onlyLeadRequest.DealerId!=null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{onlyLeadRequest.DealerId}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{onlyLeadRequest.PageSize}' page='{onlyLeadRequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_onlylead'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_description' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_gender' />
                <attribute name='mcs_excutestatus' />
                <attribute name='mcs_emailaddress1' />
                <attribute name='mcs_vehcolorid' />
                <attribute name='mcs_vehtypeid' />
                <attribute name='mcs_accountpoints' />
                <attribute name='mcs_leadorigin' />
                <attribute name='mcs_provinceid' />
                <attribute name='mcs_cityid' />
                <attribute name='mcs_countryid' />
                <attribute name='mcs_districtid' />
                <attribute name='mcs_intention' />
                <attribute name='mcs_vehicleownerflag' />
                <attribute name='mcs_driveapplication' />
                <attribute name='mcs_mainowner' />
                <attribute name='mcs_onlyleadid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 唯一线索详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public string GetOnlyLeadDetail(string entityid)
        {
            string strQuery = string.Format($"$select=mcs_appointmentat,_mcs_appointmentconfigid_value,mcs_appointmentsource,mcs_appointmenttype,mcs_canceldes,mcs_cancelreasonnew,mcs_carplate,_mcs_cartype_value,mcs_customeraddr,mcs_customercomment,_mcs_customerid_value,mcs_customername,mcs_customerphone,_mcs_dealerid_value,mcs_name,mcs_nextmaintainat,mcs_nextmaintainmileage,mcs_status,mcs_tag&$expand=mcs_appointmentconfigid($select=mcs_name,mcs_surplusnum),mcs_cartype($select=mcs_name),mcs_dealerid($select=mcs_name),mcs_customerid($select=mcs_name)&$filter=statecode eq 0 and  mcs_appointmentinfoid eq {entityid}");
            return strQuery;
        }


        /// <summary>
        /// 根据唯一线索查询logcall的fetchString
        /// </summary>
        /// <param name="logcallrequest"></param>
        /// <returns></returns>
        public string GetLogCallList(LogCallRequest logcallrequest)
        {
            var filter = string.Empty;
            //if (!string.IsNullOrWhiteSpace(logcallrequest.Search))
            //{
            //    filter += $"<filter type='or'>";
            //    filter += $"<condition attribute='mcs_name' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_userid' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_emailaddress1' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"</filter>";
            //}
            if (logcallrequest.entityid != null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_onlyleadid' operator='eq' value='{logcallrequest.entityid}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{logcallrequest.PageSize}' page='{logcallrequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
               <entity name='mcs_logcall'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_logcallid' />
                <attribute name='mcs_accountid' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_content' />
                <attribute name='mcs_visittime' />
                <attribute name='mcs_results' />
                <attribute name='mcs_contactid' />                
                <attribute name='mcs_onlyleadid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 根据唯一线索查询培育任务的fetchString
        /// </summary>
        /// <param name="activityrequest"></param>
        /// <returns></returns>
        public string GetActivityList(ActivityRequest activityrequest)
        {
            var filter = string.Empty;
            //if (!string.IsNullOrWhiteSpace(onlyLeadRequest.Search))
            //{
            //    filter += $"<filter type='or'>";
            //    filter += $"<condition attribute='mcs_name' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_userid' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"<condition attribute='mcs_emailaddress1' operator='like' value='%{onlyLeadRequest.Search}%' />";
            //    filter += $"</filter>";
            //}
            if (activityrequest.entityid != null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_onlyleadid' operator='eq' value='{activityrequest.entityid}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{activityrequest.PageSize}' page='{activityrequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_activity'>
                <attribute name='mcs_name' />
                <attribute name='mcs_activityid' />
                <attribute name='createdon' />              
                <attribute name='mcs_accountid' />
                <attribute name='mcs_activitystatus' />
                <attribute name='mcs_contactid' />
                <attribute name='mcs_description' />
                <attribute name='mcs_endtime' />  
                <attribute name='mcs_excutestatus' />
                <attribute name='mcs_iffollowed' />
                <attribute name='mcs_ifsystemcreate' />              
                <attribute name='mcs_importantlevel' />
                <attribute name='mcs_isaddedtodes' />
                <attribute name='mcs_nextfollowupcontent' />
                <attribute name='mcs_nextfollowuptime' />
                <attribute name='mcs_starttime' />  
                <attribute name='mcs_thisfollowupcontent' />  
                <attribute name='mcs_type' />  
                <attribute name='mcs_onlyleadid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }

    }

}
