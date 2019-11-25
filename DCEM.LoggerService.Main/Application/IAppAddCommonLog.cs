using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;

namespace DCEM.LoggerService.Main.Application
{
    /// <summary>
    /// 应用层新增通用日志
    /// </summary>
    public interface IAppAddCommonLog
    {
        Task Do(CommonLogModel model);
    }
}
