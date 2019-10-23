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
            return _crmService.RetrieveMultiple("mcs_carserviceadvisor", string.Empty);
        }
    }
}
