using System.Threading.Tasks;
using MSLibrary;
using DCEM.UserCenterService.Main.Application.Services;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main;
namespace DCEM.ServiceAssistantService.Main.DAL
{
    #region 系统配置接口
    public class SysConfigFactory : IFactory<Task<ISysConfigService>>
    {
        ICrmService _crmService;
        ISysConfigService _sysConfigService;
        public async Task<ISysConfigService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<IStoreService>.Run(() =>
            {
                _sysConfigService = new SysConfigService(_crmService);
                return _sysConfigService;
            });
        }
    }
    #endregion
}
