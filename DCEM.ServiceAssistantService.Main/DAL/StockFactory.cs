using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.Application;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    #region 库存
    public class StockFactory : IFactory<Task<IStockService>>
    {
        ICrmService _crmService;
        IStockService _StockService;
        public async Task<IStockService> Create()
        {
            _crmService = StartupHelper.CreateCrmService();
            return await Task<IStockService>.Run(() =>
            {
                _StockService = new StockService(_crmService);
                return _StockService;
            });
        }
    }
    #endregion
}
