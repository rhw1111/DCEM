using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MSLibrary.Logger;

namespace MSLibrary.Thread
{
    /// <summary>
    /// 轮询处理帮助器
    /// </summary>
    public static class PollingHelper
    {
        /// <summary>
        /// 执行轮询任务
        /// 该方法为非阻塞方法
        /// </summary>
        /// <param name="parallel"></param>
        /// <param name="configurations"></param>
        /// <returns></returns>
        public static PollingResult Polling(List<PollingConfiguration> configurations)
        {
            PollingResult result = new PollingResult();
            result.Semaphere.Wait();

            List<PollingAction> actions = new List<PollingAction>();
            foreach (var item in configurations)
            {
                actions.Add(new PollingAction() { Complete = true, PollingConfiguration = item });
            }

            Task.Run(() =>
            {
                while (true)
                {
                    //执行到了轮询时间的动作
                    foreach (var item in actions)
                    {
                        if (item.Complete == true && (item.NextTime == null || (item.NextTime != null && item.NextTime.Value <= DateTime.UtcNow)))
                        {
                            item.Complete = false;
                            Task.Run(async () =>
                            {
                                try
                                {
                                    await item.PollingConfiguration.Action();
                                }
                                catch(Exception ex)
                                {
                                    LoggerHelper.LogError(null, $"PollingHelper Execute Error,ErrorMessage:{ex.Message},StackTrace:{ex.StackTrace}");
                                }
                                finally
                                {
                                    item.Complete = true;
                                    item.NextTime = DateTime.UtcNow.AddMilliseconds(item.PollingConfiguration.Interval);
                                }
                            });
                        }
                    }


                    var needBreak = false;

                    if (result.IsStop)
                    {
                        while (true)
                        {
                            bool allComplete = true;
                            foreach (var item in actions)
                            {
                                if (!item.Complete)
                                {
                                    allComplete = false;
                                    break;
                                }
                            }

                            if (allComplete)
                            {
                                result.Semaphere.Release();
                                needBreak = true;
                                break;
                            }
                            else
                            {
                                System.Threading.Thread.Sleep(10);
                            }
                        }
                    }
                    else
                    {
                        System.Threading.Thread.Sleep(10);
                    }

                    if (needBreak)
                    {
                        break;
                    }
                }

            });


            return result;

        }
    }

    /// <summary>
    /// 轮询执行结果
    /// </summary>
    public class PollingResult
    {
        private SemaphoreSlim _semaphere;
        private bool _stop;
        public PollingResult()
        {
            _semaphere = new SemaphoreSlim(1, 1);
            _stop = false;
        }

        /// <summary>
        /// 停止轮询
        /// 阻塞到当前所有任务执行完成
        /// </summary>
        public void Stop()
        {
            _stop = true;
            _semaphere.Wait();
        }

        internal bool IsStop
        {
            get
            {
                return _stop;
            }
        }

        internal SemaphoreSlim Semaphere
        {
            get
            {
                return _semaphere;
            }
        }
    }

    /// <summary>
    /// 轮询配置
    /// </summary>
    public class PollingConfiguration
    {
        /// <summary>
        /// 轮询的间隔周期（毫秒）
        /// </summary>
        public int Interval { get; set; }
        /// <summary>
        /// 要执行的动作
        /// </summary>
        public Func<Task> Action { get; set; }
    }

    /// <summary>
    /// 轮询动作
    /// </summary>
    internal class PollingAction
    {
        /// <summary>
        /// 下次执行时间
        /// </summary>
        public DateTime? NextTime { get; set; }
        /// <summary>
        /// 轮询配置
        /// </summary>
        public PollingConfiguration PollingConfiguration { get; set; }
        /// <summary>
        /// 是否已经完成
        /// </summary>
        public bool Complete { get; set; }
    }
}
