using MSLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ConfigurationService.Main.Entities.DAL
{
    /// <summary>
    /// 服务描述数据操作
    /// </summary>
    public interface IServiceDescriptionStore
    {
        Task Add(ServiceDescription description);
        Task Update(ServiceDescription description);
        Task Delete(Guid id);
        Task<ServiceDescription> QueryByID(Guid id);
        Task<ServiceDescription> QueryByName(string name);
        Task<QueryResult<ServiceDescription>> QueryByPage(string name,int page,int pageSize);
    }
}
