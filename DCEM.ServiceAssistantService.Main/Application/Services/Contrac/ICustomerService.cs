using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
using Newtonsoft.Json.Linq;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ICustomerService
    {

        Task<CustomerQueryListResponse<CrmEntity>> QueryList(int type, int pageindex, string search);
        Task<CustomerQueryInfoResponse> QueryInfo(string guid);
        Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo);
    }
}
