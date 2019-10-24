using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class AppointmentInfoService : IAppointmentInfoService
    {
        private ICrmService _crmService;

        public AppointmentInfoService(CrmService crmService)
        {
            _crmService = crmService;
        }

        public async Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum)
        {
            try
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

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = 0;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
