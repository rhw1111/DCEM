 

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
        void IntegralCreate(string key, string userid);
        Task<ValidateResult> ValUserSecurityquestion(UserLoginRequest req);
        Task<ValidateResult<CrmEntity>> GetAgreement(string id);
        Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request);

        Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request);
        Task<ValidateResult> AddUser(UserAddRequest model);

        Task<ValidateResult<List<CrmEntity>>> GetSecurityquestion();

        void LoginLog(UserLoginRequest model, Guid userid, int type);
         
        Task<ValidateResult> UpdateUser(UserAddRequest model);

        Task<ValidateResult> UpdateUserPwd(UserLoginRequest model); 
        Task<CrmEntity> getuserdetail(UserDetailRequest userDetailRequest);
        Task<UserTagListResponse> getusertag(UserDetailRequest userDetailRequest);
        Task<UserScoreListResponse> getuserscore(UserDetailRequest userDetailRequest);

        Task<ValidateResult> DeDucationIntegral(UserDeDucationIntegralRequest request);
    }
}
