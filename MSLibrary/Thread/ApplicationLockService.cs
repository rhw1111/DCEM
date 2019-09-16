using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using MSLibrary.DI;
using MSLibrary.Transaction;
using MSLibrary.Thread.DAL;

namespace MSLibrary.Thread
{
    [Injection(InterfaceType = typeof(IApplicationLockService), Scope = InjectionScope.Singleton)]
    public class ApplicationLockService : IApplicationLockService
    {
        private IApplicationLockStore _applicationLockStore;

        public ApplicationLockService(IApplicationLockStore applicationLockStore)
        {
            _applicationLockStore = applicationLockStore;
        }
        public void ExecuteSync(string lockName, Action callBack, int timeout = -1)
        {
            using (DBTransactionScope transactionScope = new DBTransactionScope(TransactionScopeOption.Required,new TransactionOptions() { IsolationLevel= IsolationLevel.ReadCommitted, Timeout=new TimeSpan(0,30,0) }))
            {
                try
                {
                    _applicationLockStore.LockSync(lockName, timeout);
                    callBack();
                }
                finally
                {
                    _applicationLockStore.UnLockSync(lockName);
                }

                transactionScope.Complete();
            }

        }

        public async Task Execute(string lockName, Func<Task> callBack, int timeout = -1)
        {
            using (DBTransactionScope transactionScope = new DBTransactionScope(TransactionScopeOption.Required, new TransactionOptions() { IsolationLevel = IsolationLevel.ReadCommitted, Timeout = new TimeSpan(0, 30, 0) }))
            {
                try
                {
                    await _applicationLockStore.Lock(lockName, timeout);
                    await callBack();
                }
                finally
                {
                    await _applicationLockStore.UnLock(lockName);
                }

                transactionScope.Complete();
            }
        }
    }
}
