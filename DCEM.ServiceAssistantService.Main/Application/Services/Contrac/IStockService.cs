using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application
{
    /// <summary>
    /// 库存相关
    /// </summary>
    public interface IStockService
    {
        Task<QueryResult<CrmEntity>> QuerySpmdspStockList(int pageindex, string search);
        Task<QueryResult<CrmEntity>> QueryDeliverycentercarStockList(int pageindex, string search);
        Task<DeliverycentercarStockInfoResponse> QueryDeliverycentercarStockInfo(string guid);
    }
}
