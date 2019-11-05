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
            if (!string.IsNullOrWhiteSpace(onlyLeadRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{onlyLeadRequest.search}%' />";
                filter += $"<condition attribute='mcs_userid' operator='like' value='%{onlyLeadRequest.search}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{onlyLeadRequest.search}%' />";
                filter += $"<condition attribute='mcs_emailaddress1' operator='like' value='%{onlyLeadRequest.search}%' />";
                filter += $"</filter>";
            }
            if (onlyLeadRequest.mcs_dealerid!=null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{onlyLeadRequest.mcs_dealerid}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{onlyLeadRequest.pageSize}' page='{onlyLeadRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
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
    }
}
