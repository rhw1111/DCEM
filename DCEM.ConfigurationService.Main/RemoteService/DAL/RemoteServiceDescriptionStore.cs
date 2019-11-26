using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MSLibrary;
using MSLibrary.Transaction;
using MSLibrary.DI;
using MSLibrary.RemoteService;
using MSLibrary.RemoteService.DAL;
using DCEM.ConfigurationService.Main.DAL;
using DCEM.ConfigurationService.Main.Entities.DAL;

namespace DCEM.ConfigurationService.Main.RemoteService.DAL
{
    [Injection(InterfaceType = typeof(IRemoteServiceDescriptionStore), Scope = InjectionScope.Singleton)]
    public class RemoteServiceDescriptionStore : IRemoteServiceDescriptionStore
    {
        private IServiceDescriptionStore _serviceDescriptionStore;

        public RemoteServiceDescriptionStore(IServiceDescriptionStore serviceDescriptionStore)
        {
            _serviceDescriptionStore = serviceDescriptionStore;
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
            var description = await _serviceDescriptionStore.QueryByName(name);
            return new RemoteServiceDescription()
            {
                ID = description.ID,
                Address = description.Address,
                AuthInfoType = description.AuthInfoType,
                Name = description.Name,
                CreateTime = description.CreateTime,
                ModifyTime = description.ModifyTime
            };
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
