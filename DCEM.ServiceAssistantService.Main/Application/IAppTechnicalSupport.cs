using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppTechnicalSupport
    {
        /// <summary>
        /// 分页获取技术支持
        /// </summary>
        /// <param name="entityId"></param>
        void QueryListByPage();
    }
}
