//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Factory
{
    using DCEM.UserCenterService.Main.Application.App;
    using DCEM.UserCenterService.Main.Application.App.Contrac;
    using DCEM.UserCenterService.Main.Application.Repository;
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System;
    
    
    public class UserCarInfoFactory : IFactory<Task<IAppUserCarInfo>>
    {
        
        public virtual Task<IAppUserCarInfo> Create()
        {
            var crmService = StartupHelper.CreateCrmService();
                IUserCarInfoRepository usercarinforepository = new UserCarInfoRepository();
                IUserCarInfoService usercarinfoservice = new UserCarInfoService(crmService, usercarinforepository);
                IAppUserCarInfo app = new AppUserCarInfo(usercarinfoservice); 
                return Task.FromResult(app);;
        }
    }
}