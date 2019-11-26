using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    public interface IAppGetLocalCommonLogByPage
    {
        Task<QueryResult<CommonLogModel>> Do(string message, int page, int pageSize);
    }
}
