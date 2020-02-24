using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 当前组织编号上下文
    /// </summary>
    public class ContextCurrentOrganization : IContext<Guid>
    {
        private static AsyncLocal<Guid> _asyncLocal = new AsyncLocal<Guid>();
        private static ThreadLocal<Guid> _threadLocal = new ThreadLocal<Guid>();

        public Guid Value
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
