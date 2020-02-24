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
    /// 当前使用的跟踪服务
    /// </summary>
    public class ContextTracingService : IContext<ITracingService>
    {
        private static AsyncLocal<ITracingService> _asyncLocal = new AsyncLocal<ITracingService>();
        private static ThreadLocal<ITracingService> _threadLocal = new ThreadLocal<ITracingService>();


        public ITracingService Value
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
