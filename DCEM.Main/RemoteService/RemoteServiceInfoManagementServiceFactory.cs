using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.DI;

namespace DCEM.Main.RemoteService
{

    [Injection(InterfaceType = typeof(IFactory<IRemoteServiceInfoManagementService>), Scope = InjectionScope.Singleton)]
    public class RemoteServiceInfoManagementServiceFactory : IFactory<IRemoteServiceInfoManagementService>
    {
        private IRemoteServiceInfoManagementService _remoteServiceInfoManagementService;

        public RemoteServiceInfoManagementServiceFactory(IRemoteServiceInfoManagementService remoteServiceInfoManagementService)
        {
            _remoteServiceInfoManagementService = remoteServiceInfoManagementService;
        }
        public IRemoteServiceInfoManagementService Create()
        {
            return _remoteServiceInfoManagementService;
        }
    }
}
