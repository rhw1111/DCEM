using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ITechnicalSupportService
    {
        /// <summary>
        /// 分页查询技术支持
        /// </summary>
        void QueryListByPage();

    }
}
