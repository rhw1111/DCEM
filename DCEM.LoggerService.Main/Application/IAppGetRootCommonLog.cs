using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Logger;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    public interface IAppGetRootCommonLog
    {
        Task<List<CommonLogModel>> Do(string parentAction, int? level, int top);
    }
}
