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
    /// 当前用户信息上下文
    /// </summary>
    public class ContextCurrentUser : IContext<ICurrentUserInfoContext>
    {
        private static AsyncLocal<ICurrentUserInfoContext> _asyncLocal = new AsyncLocal<ICurrentUserInfoContext>();
        private static ThreadLocal<ICurrentUserInfoContext> _threadLocal = new ThreadLocal<ICurrentUserInfoContext>();

        public ICurrentUserInfoContext Value
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
