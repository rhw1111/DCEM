//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.App
{
    using DCEM.UserCenterService.Main.Application.App.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System.Collections.Generic;
    using System;

    public class AppUser : IAppUser
    {

        public IUserService _userService;

        public AppUser(IUserService userService)
        {
            _userService = userService;
        }
        public async Task<ValidateResult> ValUserSecurityquestion(UserLoginRequest req)
        {
            return await _userService.ValUserSecurityquestion(req);
        }
        public async Task<ValidateResult<CrmEntity>> GetAgreement(string id)
        {
            return await _userService.GetAgreement(id);
        }
        public async Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request)
        {
            return await _userService.LoginAccount(request);
        }

        public async Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request)
        {
            return await _userService.GetUser(request);
        }


        public async Task<ValidateResult> AddUser(UserAddRequest request)
        {
            return await _userService.AddUser(request);
        }
        public async Task<ValidateResult> UpdateUser(UserAddRequest request)
        {
            return await _userService.UpdateUser(request);
        }
        public async Task<ValidateResult<List<CrmEntity>>> GetSecurityquestion()
        {
            return await _userService.GetSecurityquestion();
        }

        public void LoginLog(UserLoginRequest model, Guid userid, int type)
        {
            _userService.LoginLog(model, userid, type);
        }


        public async Task<ValidateResult> UpdateUserPwd(UserLoginRequest model)
        {
            return await _userService.UpdateUserPwd(model); 
        }

        public Task<CrmEntity> getuserdetail(UserDetailRequest userDetailRequest)
        {
          return  _userService.getuserdetail(userDetailRequest); 
        }

        public Task<UserTagListResponse> getusertag(UserDetailRequest userDetailRequest)
        {
            return _userService.getusertag(userDetailRequest);
        }

        public Task<UserScoreListResponse> getuserscore(UserDetailRequest userDetailRequest)
        {
            return _userService.getuserscore(userDetailRequest);
        }
    }
}
