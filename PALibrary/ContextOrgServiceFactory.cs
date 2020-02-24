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
    /// 当前用户使用的组织服务工厂
    /// </summary>
    public class ContextOrgServiceFactory : IContext<IOrganizationServiceFactory>
    {

        private static AsyncLocal<IOrganizationServiceFactory> _asyncLocal = new AsyncLocal<IOrganizationServiceFactory>();
        private static ThreadLocal<IOrganizationServiceFactory> _threadLocal = new ThreadLocal<IOrganizationServiceFactory>();

        public IOrganizationServiceFactory Value
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
