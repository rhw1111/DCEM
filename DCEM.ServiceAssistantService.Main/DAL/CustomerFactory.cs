using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    #region 客户
    public class CustomerFactory : IFactory<Task<ICustomerService>>
    {
        ICrmService _crmService;
        ICustomerService _customerService;
        public async Task<ICustomerService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<ICustomerService>.Run(() =>
            {
                _customerService = new CustomerService(_crmService);
                return _customerService;
            });
        }
    }
    #endregion
}
