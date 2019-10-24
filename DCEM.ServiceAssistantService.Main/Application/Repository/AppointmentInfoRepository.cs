﻿using System;
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
        public string QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(filterstr.mcs_status))
            {
                filter += $"<condition attribute='mcs_status' operator='eq' value='{filterstr.mcs_status}' />";
            }
            if (!string.IsNullOrWhiteSpace(filterstr.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_carplate' operator='like' value='%{filterstr.search}%' />";
                filter += $"<condition attribute='mcs_customerphone' operator='like' value='%{filterstr.search}%' />";
                filter += $"<condition attribute='mcs_customername' operator='like' value='%{filterstr.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{pageSize}' page='{pageNum}' output-format='xml-platform' mapping='logical' distinct='false'>
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
            //var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
            //  <entity name='mcs_appointmentinfo'>
            //    <attribute name='mcs_name' />
            //    <attribute name='createdon' />
            //    <attribute name='mcs_appointmentat' />
            //    <attribute name='mcs_status' />
            //    <attribute name='mcs_appointmentsource' />
            //    <attribute name='mcs_ordertype' />
            //    <attribute name='mcs_appointmenttype' />
            //    <attribute name='mcs_customerphone' />
            //    <attribute name='createdby' />
            //    <attribute name='mcs_customeraddr' />
            //    <attribute name='mcs_customerid' />
            //    <attribute name='mcs_serviceadvisorid' />
            //    <attribute name='mcs_dealerid' />
            //    <attribute name='mcs_cartype' />
            //    <attribute name='mcs_carplate' />
            //    <attribute name='mcs_customername' />
            //    <attribute name='mcs_appointmentconfigid' />
            //    <attribute name='mcs_appointmentinfoid' />
            //    <order attribute='mcs_appointmentat' descending='false' />
            //    <order attribute='mcs_appointmentconfigid' descending='false' />
            //    <filter type='and'>
            //      <condition attribute='statecode' operator='eq' value='0' />
            //     <condition attribute='mcs_appointmentinfoid' operator='eq' value='{}' />
            //    </filter>
            //    <link-entity name='mcs_appointmentconfig' from='mcs_appointmentconfigid' to='mcs_appointmentconfigid' visible='false' link-type='outer' alias='appointmentconfig'>
            //      <attribute name='mcs_name' />
            //    </link-entity>
            //    <link-entity name='mcs_vehowner' from='mcs_vehownerid' to='mcs_customerid' visible='false' link-type='outer' alias='vehowner'>
            //      <attribute name='mcs_name' />
            //    </link-entity>
            //  </entity>
            //</fetch>";
            return "";
        }
    }
}
