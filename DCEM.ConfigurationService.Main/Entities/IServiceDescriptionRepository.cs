using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;

namespace DCEM.ConfigurationService.Main.Entities
{
    public interface IServiceDescriptionRepository
    {
        Task<ServiceDescription> QueryByID(Guid id);
        Task<ServiceDescription> QueryByName(string name);
        Task<QueryResult<ServiceDescription>> QueryByPage(string name, int page, int pageSize);

    }
}
