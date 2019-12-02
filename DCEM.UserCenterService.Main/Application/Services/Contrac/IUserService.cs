 

namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System.Collections.Generic;
    using System;

    public interface IUserService
    {

        Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request);

        Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request);
        Task<ValidateResult> AddUser(UserAddRequest model);

        Task<ValidateResult<List<CrmEntity>>> GetSecurityquestion();

        void LoginLog(UserLoginRequest model, Guid userid, int type);

        Task<CrmEntity> getuserdetail(UserDetailRequest userDetailRequest);
    }
}
