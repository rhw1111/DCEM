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

    public interface IAppUser
    {
        Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request);

        Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request);

        Task<ValidateResult> AddUser(UserAddRequest request);

        Task<ValidateResult<List<CrmEntity>>> GetSecurityquestion();

        void LoginLog(UserLoginRequest model, Guid userid, int type);
        Task<CrmEntity> getuserdetail(UserDetailRequest userDetailRequest);
    }
}
