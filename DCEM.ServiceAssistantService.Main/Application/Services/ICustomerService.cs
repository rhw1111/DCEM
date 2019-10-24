using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ICustomerService
    {
        /// <summary>
        /// 查询客户列表
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryList();
    }
}
