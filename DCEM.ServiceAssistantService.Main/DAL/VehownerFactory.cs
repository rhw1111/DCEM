using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    #region 车辆档案
    public class VehownerFactory : IFactory<Task<IVehownerService>>
    {
        ICrmService _crmService;
        IVehownerService _customerService;
        public async Task<IVehownerService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<IVehownerService>.Run(() =>
            {
                _customerService = new VehownerService(_crmService);
                return _customerService;
            });
        }
    }
    #endregion
}
