using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PALibrary
{
    /// <summary>
    /// 当前用户使用的组织服务
    /// </summary>
    public class ContextOrgService : IContext<IOrganizationService>
    {
        private static AsyncLocal<IOrganizationService> _asyncLocal = new AsyncLocal<IOrganizationService>();
        private static ThreadLocal<IOrganizationService> _threadLocal = new ThreadLocal<IOrganizationService>();


        public IOrganizationService Value
        {
            get
            {
                return _asyncLocal.Value;
            }

            set
            {
                _asyncLocal.Value = value;
                _threadLocal.Value = value;
            }
        }

        public bool IsAuto()
        {
            return !_threadLocal.IsValueCreated;
        }
    }
}
