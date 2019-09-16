using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Thread.DAL
{
    /// <summary>
    /// 应用程序锁存储操作接口
    /// </summary>
    public interface IApplicationLockStore
    {
        Task Lock(string lockName, int timeout);
        Task UnLock(string lockName);

        void LockSync(string lockName, int timeout);
        void UnLockSync(string lockName);
    }
}
