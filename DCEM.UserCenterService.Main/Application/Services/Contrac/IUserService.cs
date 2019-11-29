 

namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;

    public interface IUserService
    {

        Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request);

        Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request);
        Task<ValidateResult> AddUser(UserAddRequest model);
    }
}
