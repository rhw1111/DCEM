using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace PALibrary
{
    public class ContextDictionary : IContext<Dictionary<string, object>>
    {
        private static AsyncLocal<Dictionary<string, object>> _asyncLocal = new AsyncLocal<Dictionary<string, object>>();
        private static ThreadLocal<Dictionary<string, object>> _threadLocal = new ThreadLocal<Dictionary<string, object>>();

        public Dictionary<string, object> Value
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
