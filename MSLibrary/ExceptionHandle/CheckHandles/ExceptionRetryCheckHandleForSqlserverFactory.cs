using System;
using System.Collections.Generic;
using System.Text;

namespace MSLibrary.ExceptionHandle.CheckHandles
{
    public class ExceptionRetryCheckHandleForSqlserverFactory : IFactory<IExceptionRetryCheckHandle>
    {
        public IExceptionRetryCheckHandle Create()
        {
            ExceptionRetryCheckHandleForSqlserver exceptionRetryCheckHandleForSqlserver = new ExceptionRetryCheckHandleForSqlserver();
            return exceptionRetryCheckHandleForSqlserver;
        }
    }
}
