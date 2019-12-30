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
    
    
    public class AMPageFactory : IFactory<Task<IAppAMPage>>
    {
        
        public virtual Task<IAppAMPage> Create()
        {
            var crmService = StartupHelper.CreateCrmService();
                IAMPageRepository ampagerepository = new AMPageRepository();
            IConfigRepository configRepository = new ConfigRepository();
            IAMPageService ampageservice = new AMPageService(crmService, ampagerepository, configRepository);
                IAppAMPage app = new AppAMPage(ampageservice); 
                return Task.FromResult(app);
        }
    }
}
