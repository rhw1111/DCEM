//==============================================
//文件名：InstallationFactory.cs
//功能描述：安装单接口工厂
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using MSLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Factory
{
    
    public class InstallationFactory : IFactory<Task<IAppInstallation>>
    {
        public async Task<IAppInstallation> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService();
                IInstallationRepository installationRepository = new InstallationRepository();
                IInstallationService installationService = new InstallationService(crmService, installationRepository);
                IAppInstallation app = new AppInstallation(installationService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
