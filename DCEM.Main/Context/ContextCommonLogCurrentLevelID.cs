﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using MSLibrary;

namespace DCEM.Main.Context
{
    /// <summary>
    /// 通用日志当前层级
    /// </summary>
    public class ContextCommonLogCurrentLevelID:IContext<Guid>
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
