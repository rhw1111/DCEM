using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using DCEM.Main.Entities;
using MSLibrary;

namespace DCEM.Main.Context
{
    /// <summary>
    /// 当前用户信息上下文
    /// </summary>
    public class ContextCurrentUserInfo : IContext<UserInfo>
    {
        private static AsyncLocal<UserInfo> _asyncLocal = new AsyncLocal<UserInfo>();
        private static ThreadLocal<UserInfo> _threadLocal = new ThreadLocal<UserInfo>();

        public UserInfo Value
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
