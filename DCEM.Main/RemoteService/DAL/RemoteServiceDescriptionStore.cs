using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.RemoteService;
using MSLibrary.RemoteService.DAL;
using MSLibrary.DI;

namespace DCEM.Main.RemoteService.DAL
{
    [Injection(InterfaceType = typeof(IRemoteServiceDescriptionStore), Scope = InjectionScope.Singleton)]
    public class RemoteServiceDescriptionStore : IRemoteServiceDescriptionStore
    {
        private IFactory<IRemoteServiceInfoManagementService> _remoteServiceFactory;

        public RemoteServiceDescriptionStore(IFactory<IRemoteServiceInfoManagementService> remoteServiceFactory)
        {
            _remoteServiceFactory = remoteServiceFactory;
        }

        public Task Add(RemoteServiceDescription description)
        {
            throw new NotImplementedException();
        }

        public Task Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<RemoteServiceDescription> QueryByID(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<RemoteServiceDescription> QueryByName(string name)
        {
            var service = _remoteServiceFactory.Create();
            var remoteServiceDescription = await service.GetServiceInfo(name);
            if (remoteServiceDescription == null)
            {
                return null;
            }
            else
            {
                return new RemoteServiceDescription()
                {
                    ID = remoteServiceDescription.ID,
                    Name = remoteServiceDescription.ServiceName,
                    Address = remoteServiceDescription.ServiceAddress,
                    AuthInfoType = remoteServiceDescription.AuthInfoType

                };
            }
        }

        public Task<QueryResult<RemoteServiceDescription>> QueryByPage(string name, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task Update(RemoteServiceDescription description)
        {
            throw new NotImplementedException();
        }
    }
}
