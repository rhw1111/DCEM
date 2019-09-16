using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MSLibrary.LanguageTranslate;
using MSLibrary.ExceptionHandle.CheckHandles;

namespace MSLibrary.ExceptionHandle
{
    /// <summary>
    /// 异常帮助静态类
    /// </summary>
    public static class ExceptionHepler
    {
        private static Dictionary<Type, IFactory<IExceptionRetryCheckHandle>> _retryCheckHandles = new Dictionary<Type, IFactory<IExceptionRetryCheckHandle>>();

        public static Dictionary<Type, IFactory<IExceptionRetryCheckHandle>> RetryCheckHandles
        {
            get
            {
                return _retryCheckHandles;
            }
        }

        public static int _retryNumber = 3;

        public static int RetryNumer
        {
            set
            {
                _retryNumber = value;
            }
        }

        /// <summary>
        /// 错误重试处理
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public static async Task RetryHandle(Func<Task> action)
        {

            int retryNumber = _retryNumber;

            while (true)
            {
                try
                {
                    await action();
                    break;
                }
                catch (Exception ex)
                {
                    if (retryNumber-- <= 0)
                    {
                        throw;
                    }

                    var type = ex.GetType();
                    if (!_retryCheckHandles.TryGetValue(type, out IFactory<IExceptionRetryCheckHandle> handleFactory))
                    {
                        throw;
                    }

                    var handle = handleFactory.Create();

                    if (!await handle.Check(ex))
                    {
                        throw;
                    }

                    await Task.Delay(10);
                }
            }
        }


        /// <summary>
        /// 错误重试处理
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public static void RetryHandleSync(Action action)
        {

            int retryNumber = _retryNumber;

            while (true)
            {
                try
                {
                    action();
                }
                catch (Exception ex)
                {
                    if (retryNumber-- <= 0)
                    {
                        throw;
                    }

                    var type = ex.GetType();
                    if (!_retryCheckHandles.TryGetValue(type, out IFactory<IExceptionRetryCheckHandle> handleFactory))
                    {
                        throw;
                    }

                    var handle = handleFactory.Create();

                    if (!handle.CheckSync(ex))
                    {
                        throw;
                    }

                    System.Threading.Thread.Sleep(10);
                }
            }
        }
    }

    /// <summary>
    /// 异常重试检查处理
    /// </summary>
    public interface IExceptionRetryCheckHandle
    {
        Task<bool> Check(Exception ex);
        bool CheckSync(Exception ex);
    }



}
