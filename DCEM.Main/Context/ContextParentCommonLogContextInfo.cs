using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MSLibrary;

namespace DCEM.Main.Context
{
    /// <summary>
    /// 父通用日志上下文信息
    /// </summary>
    public class ContextParentCommonLogContextInfo:IContext<string>
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
