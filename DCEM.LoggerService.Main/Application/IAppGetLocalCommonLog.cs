using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    public interface IAppGetLocalCommonLog
    {
        Task<CommonLogModel> Do(Guid id);
    }
}
