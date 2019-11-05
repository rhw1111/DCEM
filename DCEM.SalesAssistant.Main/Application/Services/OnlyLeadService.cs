using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class OnlyLeadService : IOnlyLeadService
    {
        private CrmService _crmService;
        private IOnlyLeadRepository _onlyLeadRepository;

        public OnlyLeadService(CrmService crmService, IOnlyLeadRepository onlyLeadRepository)
        {
            _crmService = crmService;
            _onlyLeadRepository = onlyLeadRepository;
        }
    }
}
