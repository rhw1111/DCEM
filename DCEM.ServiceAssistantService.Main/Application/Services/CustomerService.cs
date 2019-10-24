using MSLibrary.Xrm;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class CustomerService : ICustomerService
    {
        private ICrmService _crmService;
        public CustomerService(ICrmService crmService)
        {
            _crmService = crmService;
        }

        public Task<CrmEntityCollection> QueryList()
        {
            var queryExpression = @"$select=_mcs_customerid_value&$expand=mcs_customerid($select=mcs_fullname,mcs_gender,mcs_motormodel,mcs_vehplate,mcs_mobilephone&$expand=mcs_vehtype($select=mcs_name))";
            return _crmService.RetrieveMultiple("mcs_carserviceadvisor", queryExpression);
        }
    }
}
