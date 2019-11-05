using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class BaseDataService : IBaseDataService
    {
        private ICrmService _crmService;
        private IBaseDataRepository _baseDataRepository;

        public BaseDataService(CrmService crmService, IBaseDataRepository baseDataRepository)
        {
            _crmService = crmService;
            _baseDataRepository = baseDataRepository;
        }
    }
}
