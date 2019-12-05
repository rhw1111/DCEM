using System.Threading.Tasks;
using MSLibrary;
using DCEM.UserCenterService.Main.Application.Services;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main;
namespace DCEM.ServiceAssistantService.Main.DAL
{
    #region 商城接口
    public class StoreFactory : IFactory<Task<IStoreService>>
    {
        ICrmService _crmService;
        IStoreService _storeService;
        public async Task<IStoreService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<IStoreService>.Run(() =>
            {
                _storeService = new StoreService(_crmService);
                return _storeService;
            });
        }
    }
    #endregion
}
