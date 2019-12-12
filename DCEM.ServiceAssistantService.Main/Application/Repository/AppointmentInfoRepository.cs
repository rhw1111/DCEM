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
            if (filterstr.status != 0)
            {
                filter += $"<condition attribute='mcs_status' operator='eq' value='{filterstr.status}' />";
            }
            if (filterstr.DealerId != null)
            {
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{filterstr.DealerId}' />";
            }
            if (filterstr.AppointmentAt != null)
            {
                filter += $"<condition attribute='mcs_appointmentat' operator='on' value='{filterstr.AppointmentAt}' />";
            }
            if (!string.IsNullOrWhiteSpace(filterstr.mcs_customerphone))
            {
                filter += $"<condition attribute='mcs_customerphone' operator='eq' value='{filterstr.mcs_customerphone}' />";
            }
            if (!string.IsNullOrWhiteSpace(filterstr.seachkey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_carplate' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"<condition attribute='mcs_customerphone' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"<condition attribute='mcs_customername' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"</filter>";
            }
            

            var fetchString = $@"<fetch version='1.0' count='{filterstr.pageSize}' page='{filterstr.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_appointmentinfo'>
                    <all-attributes />
                    <order attribute='mcs_appointmentat' descending='true' />
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
            string strQuery = string.Format($"$select=mcs_appointmentat,_mcs_appointmentconfigid_value,mcs_ordertype,mcs_appointmentsource,mcs_appointmenttype,mcs_canceldes,mcs_cancelreasonnew,mcs_carplate,_mcs_cartype_value,mcs_customeraddr,mcs_customercomment,_mcs_customerid_value,mcs_customername,mcs_customerphone,_mcs_dealerid_value,mcs_name,mcs_nextmaintainat,mcs_nextmaintainmileage,mcs_status,mcs_tag&$expand=mcs_appointmentconfigid($select=mcs_name,mcs_surplusnum),mcs_cartype($select=mcs_name),mcs_dealerid($select=mcs_name,mcs_shopaddress,mcs_phone,mcs_tel),mcs_customerid($select=mcs_name)&$filter=statecode eq 0 and  mcs_appointmentinfoid eq {entityid}");
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
                    <link-entity name='systemuser' from='systemuserid' to='createdby' visible='false' link-type='outer' alias='systemuser'>
                      <attribute name='fullname' />
                    </link-entity>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 预约时段配置
        /// </summary>
        /// <param name="appointmentConfiggRequest"></param>
        /// <returns></returns>
        public string GetConfig(AppointmentConfigRequest configgRequest)
        {
            var filter = string.Empty;
            if (configgRequest.mcs_dealerid != Guid.Empty)
            {
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{configgRequest.mcs_dealerid}' />";
            }
            if (configgRequest.mcs_servetype != null)
            {
                filter += $"<condition attribute='mcs_servetype' operator='eq' value='{configgRequest.mcs_servetype}' />";
            }
            if (configgRequest.mcs_servedate != null)
            {
                filter += $"<condition attribute='mcs_servedate' operator='on' value='{configgRequest.mcs_servedate}' />";
            }
            if (configgRequest.AppointmentConfigId != null)
            {
                filter += $"<condition attribute='mcs_appointmentconfigid' operator='eq' value='{configgRequest.AppointmentConfigId}' />";
            }
            var fetchString = $@"<fetch version='1.0' count='{configgRequest.pageSize}' page='{configgRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                                 <entity name='mcs_appointmentconfig'>
                                <attribute name='mcs_name' />
                                <attribute name='createdon' />
                                <attribute name='mcs_servetype' />
                                <attribute name='mcs_maxcapacity' />
                                <attribute name='mcs_servedate' />
                                <attribute name='mcs_starttimeframe' />
                                <attribute name='mcs_endtimeframe' />
                                <attribute name='mcs_alreadynum' />
                                <attribute name='mcs_arrivenum' />
                                <attribute name='mcs_dealerid' />
                                <attribute name='mcs_surplusnum' />
                                <attribute name='mcs_appointmentconfigid' />
                                <order attribute='mcs_name' descending='true' />
                                <filter type='and'>
                                  <condition attribute='statecode' operator='eq' value='0' />
                                  {filter}
                                </filter>
                              </entity>
                            </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 获取预约数量总数
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public string QueryListByCount(AppointmentInfoRequest filterstr, int status)
        {
            var filter = string.Empty;
            if (status != 0)
            {
                filter += $"<condition attribute='mcs_status' operator='eq' value='{status}' />";
            }
            if (filterstr.DealerId != null)
            {
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{filterstr.DealerId}' />";
            }
            if (filterstr.AppointmentAt != null)
            {
                filter += $"<condition attribute='mcs_appointmentat' operator='on' value='{filterstr.AppointmentAt}' />";
            }
            if (!string.IsNullOrWhiteSpace(filterstr.seachkey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_carplate' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"<condition attribute='mcs_customerphone' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"<condition attribute='mcs_customername' operator='like' value='%{filterstr.seachkey}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'  aggregate='true'>
                  <entity name='mcs_appointmentinfo'>
                    <attribute name='mcs_appointmentinfoid' aggregate='countcolumn' alias='count'/>
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                    <link-entity name='mcs_appointmentconfig' from='mcs_appointmentconfigid' to='mcs_appointmentconfigid' visible='false' link-type='outer' alias='appointmentconfig'>
                    </link-entity>
                  </entity>
                </fetch>";

            return fetchString;
        }
    }
}
