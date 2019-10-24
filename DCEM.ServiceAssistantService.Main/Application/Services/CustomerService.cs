using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;
using MSLibrary;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class CustomerService : ICustomerService
    {
        private ICrmService _crmService;
        public CustomerService(ICrmService crmService)
        {
            _crmService = crmService;
        }

        public async Task<QueryResult<CrmEntity>> QueryList()
        {
            var fetchString = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_carserviceadvisor'>
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_carserviceadvisorid' />
    <order attribute='mcs_name' descending='false' />
    <link-entity name='mcs_vehowner' from='mcs_vehownerid' to='mcs_customerid' visible='false' link-type='outer' alias='a'>
      <attribute name='mcs_vehplate' />
      <attribute name='mcs_vehtype' />
      <attribute name='mcs_fullname' />
      <attribute name='mcs_gender' />
      <attribute name='mcs_mobilephone' />
      <attribute name='mcs_insuranceexpirationdate' />
      <attribute name='mcs_guaranteestartdate' />
      <attribute name='mcs_name' />
    </link-entity>
  </entity>
</fetch>";
            var fetchXdoc = XDocument.Parse(fetchString);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_carserviceadvisor",
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
    }
}
