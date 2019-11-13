using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using MSLibrary;

namespace DCEM.Main.Context
{
    /// <summary>
    /// 当前用户ID上下文
    /// </summary>
    public class ContextCurrentUserID : IContext<string>
    {
        private static AsyncLocal<string> _asyncLocal = new AsyncLocal<string>();
        private static ThreadLocal<string> _threadLocal = new ThreadLocal<string>();

        public string Value
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
