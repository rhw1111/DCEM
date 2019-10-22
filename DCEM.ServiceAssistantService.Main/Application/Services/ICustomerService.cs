using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ICustomerService
    {
        /// <summary>
        /// 查询客户列表
        /// </summary>
        void QueryList();
    }
}
