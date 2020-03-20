using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;
using PALibrary.PAEntityExtensions;

namespace PALibrary.Entities
{
    public class PAEntityRepository : IPAEntityRepository
    {
        public PAEntity Query(string strFetch)
        {
            return PAEntityQueryHelper.Retrive<PAEntity>(strFetch);
        }

        public void QueryAll(string strFetch, Action<PAEntity> callBack)
        {
            PAEntityQueryHelper.RetriveAll<PAEntity>(strFetch, callBack);
        }

        public PAEntity QueryByID(string entityName, Guid id, params string[] columnNames)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            ColumnSet columnSet = new ColumnSet(columnNames);
            var entityRecord= orgService.Retrieve(entityName, id, columnSet);
            return entityRecord.ConvertToDomainEntity<PAEntity>();
        }

        public QueryResult<PAEntity> QueryByPage(string strFetch, int page, int pageSize)
        {
            return PAEntityQueryHelper.RetrivePage<PAEntity>(strFetch, page, pageSize);
        }

        public IList<PAEntity> QueryTop(string strFetch, int size)
        {
            return PAEntityQueryHelper.RetriveTop<PAEntity>(strFetch, size);
        }
    }

    public class PAEntityRepositoryFactory : SingletonFactorySelf<IPAEntityRepository, PAEntityRepositoryFactory>
    {
        protected override IPAEntityRepository RealCreate()
        {
            return new PAEntityRepository();
        }
    }
}
