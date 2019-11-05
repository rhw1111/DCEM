using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppOnlyLead : IAppOnlyLead
    {
        private IOnlyLeadService _onlyLeadService;

        public AppOnlyLead(IOnlyLeadService onlyLeadService)
        {
            _onlyLeadService = onlyLeadService;
        }
    }
}
