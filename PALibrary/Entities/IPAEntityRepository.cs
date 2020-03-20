using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    /// <summary>
    /// PA通用领域实体仓储
    /// </summary>
    public interface IPAEntityRepository
    {
        PAEntity QueryByID(string entityName,Guid id, params string[] columnNames);
        PAEntity Query(string strFetch);
        void QueryAll(string strFetch, Action<PAEntity> callBack);
        IList<PAEntity> QueryTop(string strFetch,int size);

        QueryResult<PAEntity> QueryByPage(string strFetch, int page, int pageSize);
    }
}
