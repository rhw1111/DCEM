using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Logger;
using DCEM.Main.RemoteService;
using MSLibrary.RemoteService;
using MSLibrary.RemoteService.DAL;
using DCEM.Main.RemoteService.DAL;

namespace DCEM.Main.TCenter
{
    /// <summary>
    /// 通用日志内容工厂实现
    /// </summary>
    [Injection(InterfaceType = typeof(ITCenterFactory), Scope = InjectionScope.Singleton)]
    public class TCenterFactory : ITCenterFactory
    {
        private IFactory<IRemoteServiceInfoManagementService> _remoteServiceFactory;
        public TCenterFactory() {
            _remoteServiceFactory =  null;       
        }

        public async Task<ITCenterService> Create()
        {
            IRemoteServiceDescriptionStore _remoteServiceDescriptionStore=new RemoteServiceDescriptionStore(_remoteServiceFactory);
            IRemoteServiceDescriptionRepository _remoteServiceDescriptionRepository=new RemoteServiceDescriptionRepository(_remoteServiceDescriptionStore);
        RemoteServiceDescriptionRepositoryHelper remoteServiceDescriptionRepositoryHelper = new RemoteServiceDescriptionRepositoryHelper(_remoteServiceDescriptionRepository);
            ITCenterService tCenterService = new TCenterService(remoteServiceDescriptionRepositoryHelper);

            return await Task.FromResult(tCenterService);
        }
    }
}
