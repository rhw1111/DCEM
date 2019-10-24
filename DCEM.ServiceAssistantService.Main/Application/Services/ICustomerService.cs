using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ICustomerService
    {
        /// <summary>
        /// 查询客户列表
        /// </summary>
        Task<CustomerQueryListResponse<CrmEntity>> QueryList(int type, int pageindex, string search);
    }
}
