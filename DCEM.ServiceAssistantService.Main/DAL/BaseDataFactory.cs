/*
    文件名：IBaseDataController.cs
    功能描述：基础信息接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/

using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.Application.Services;
using MSLibrary;
using System;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.DAL
{
    public class BaseDataFactory : IFactory<Task<IAppBaseData>>
    {
        public async Task<IAppBaseData> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IAuthService authService = new AuthService();
                IBaseDataRepository baseDataRepository = new BaseDataRepository();
                IBaseDataService baseDataService = new BaseDataService(crmService, baseDataRepository);
                IAppBaseData app = new AppBaseData(baseDataService, authService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
