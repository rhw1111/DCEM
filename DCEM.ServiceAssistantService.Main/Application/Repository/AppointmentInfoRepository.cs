using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public class AppointmentInfoRepository : IAppointmentInfoRepository
    {
        /// <summary>
        /// 预约列表xml
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        public string QueryListByPage(AppointmentInfoRequest filterstr)
        {
            var filter = string.Empty;
            if (filterstr.status!=0)
            {
                filter += $"<condition attribute='mcs_status' operator='eq' value='{filterstr.status}' />";
            }
            if (!string.IsNullOrWhiteSpace(filterstr.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_carplate' operator='like' value='%{filterstr.search}%' />";
                filter += $"<condition attribute='mcs_customerphone' operator='like' value='%{filterstr.search}%' />";
                filter += $"<condition attribute='mcs_customername' operator='like' value='%{filterstr.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{filterstr.pageSize}' page='{filterstr.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_appointmentinfo'>
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <attribute name='mcs_appointmentat' />
                    <attribute name='mcs_status' />
                    <attribute name='mcs_appointmentsource' />
                    <attribute name='mcs_ordertype' />
                    <attribute name='mcs_appointmenttype' />
                    <attribute name='mcs_customerphone' />
                    <attribute name='createdby' />
                    <attribute name='mcs_customeraddr' />
                    <attribute name='mcs_customerid' />
                    <attribute name='mcs_serviceadvisorid' />
                    <attribute name='mcs_dealerid' />
                    <attribute name='mcs_cartype' />
                    <attribute name='mcs_carplate' />
                    <attribute name='mcs_customername' />
                    <attribute name='mcs_appointmentconfigid' />
                    <attribute name='mcs_appointmentinfoid' />
                    <order attribute='mcs_appointmentat' descending='false' />
                    <order attribute='mcs_appointmentconfigid' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                    <link-entity name='mcs_appointmentconfig' from='mcs_appointmentconfigid' to='mcs_appointmentconfigid' visible='false' link-type='outer' alias='appointmentconfig'>
                      <attribute name='mcs_name' />
                    </link-entity>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 预约记录明细
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public string QueryDetail(string entityid)
        {
            string strQuery = string.Format($"$select=mcs_appointmentat,_mcs_appointmentconfigid_value,mcs_appointmentsource,mcs_appointmenttype,mcs_canceldes,mcs_cancelreasonnew,mcs_carplate,_mcs_cartype_value,mcs_customeraddr,mcs_customercomment,_mcs_customerid_value,mcs_customername,mcs_customerphone,_mcs_dealerid_value,mcs_name,mcs_nextmaintainat,mcs_nextmaintainmileage,mcs_status,mcs_tag&$expand=mcs_appointmentconfigid($select=mcs_name),mcs_cartype($select=mcs_name),mcs_dealerid($select=mcs_name),mcs_customerid($select=mcs_name)&$filter=statecode eq 0 and  mcs_appointmentinfoid eq {entityid}");
            return strQuery;
        }

        /// <summary>
        /// 预约单跟进记录
        /// </summary>
        /// <param name="logRequest"></param>
        /// <returns></returns>
        public string Querylog(AppointmentInfoLogRequest logRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(logRequest.entityid))
            {
                filter += $"<condition attribute='mcs_appointmentinfoid' operator='eq' value='{logRequest.entityid}' />";
            }
            var fetchString = $@"<fetch version='1.0' count='{logRequest.pageSize}' page='{logRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                    <entity name='mcs_appointmentinfolog'>
                    <attribute name='createdon' />
                    <attribute name='mcs_remark' />
                    <attribute name='createdby' />
                    <attribute name='mcs_appointmentinfologid' />
                    <order attribute='createdon' descending='false' />
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
