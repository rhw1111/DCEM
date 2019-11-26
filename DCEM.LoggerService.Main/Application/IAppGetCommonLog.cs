using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;
using MSLibrary.Logger;

namespace DCEM.LoggerService.Main.Application
{
    public interface IAppGetCommonLog
    {
        Task<CommonLogModel> Do(Guid id, Guid parentID, string parentAction);
    }
}
