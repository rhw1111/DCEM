using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppBaseData : IAppBaseData
    {
        private IBaseDataService _baseDataService;

        public AppBaseData(IBaseDataService baseDataService)
        {
            _baseDataService = baseDataService;
        }
    }
}
