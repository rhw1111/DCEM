using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    public interface IAppGetCommonLogByParent
    {
        Task<QueryResult<CommonLogModel>> Do(Guid parentID, string parentAction, int page, int pageSize);
    }
}
