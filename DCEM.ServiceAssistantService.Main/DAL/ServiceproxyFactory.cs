using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class ServiceproxyFactory : IFactory<Task<IServiceproxyService>>
    {
        #region 服务单据
        ICrmService _crmService;
        IServiceproxyService _serviceproxyService;
        public async Task<IServiceproxyService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<IServiceproxyService>.Run(() =>
            {
                _serviceproxyService = new ServiceproxyService(_crmService);
                return _serviceproxyService;
            });
        }
        #endregion
    }
}
