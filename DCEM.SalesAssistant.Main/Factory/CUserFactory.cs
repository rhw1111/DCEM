//C端用户中心
using System.Threading.Tasks;
using MSLibrary;
using DCEM.SalesAssistant.Main.Application;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Services;

namespace DCEM.SalesAssistant.Main.Factory
{
    public class CUserFactory : IFactory<Task<ICUserService>>
    {
        ICrmService _crmService;
        ICUserService _cuserService;
        public async Task<ICUserService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<ICUserService>.Run(() =>
            {
                _cuserService = new CUserService(_crmService);
                return _cuserService;
            });
        }
    }
}
