using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using DCEM.ConfigurationService.Main.Entities.DAL;

namespace DCEM.ConfigurationService.Main.Entities
{
    [Injection(InterfaceType = typeof(IServiceDescriptionRepository), Scope = InjectionScope.Singleton)]
    public class ServiceDescriptionRepository : IServiceDescriptionRepository
    {
        private IServiceDescriptionStore _serviceDescriptionStore;

        public ServiceDescriptionRepository(IServiceDescriptionStore serviceDescriptionStore)
        {
            _serviceDescriptionStore = serviceDescriptionStore;
        }

        public async Task<ServiceDescription> QueryByID(Guid id)
        {
            return await _serviceDescriptionStore.QueryByID(id);
        }

        public async Task<ServiceDescription> QueryByName(string name)
        {
            return await _serviceDescriptionStore.QueryByName(name);
        }

        public async Task<QueryResult<ServiceDescription>> QueryByPage(string name, int page, int pageSize)
        {
            return await _serviceDescriptionStore.QueryByPage(name,page,pageSize);
        }
    }
}
