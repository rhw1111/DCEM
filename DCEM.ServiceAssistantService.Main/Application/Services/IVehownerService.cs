using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IVehownerService
    {
        /// <summary>
        /// 查询车辆档案
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryList(int pageindex, string search);
    }
}
