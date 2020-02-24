using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using PALibrary.Entities;

namespace PALibrary.Cache
{
    /// <summary>
    /// 基于版本号的缓存控制器
    /// </summary>
    public class VersionCacheController
    {
        public static IGetCacheVersionService VersionService { get; set; } = GetCacheVersionServiceFactory.Get();
        /// <summary>
        /// 使用的缓存版本的配置名称
        /// </summary>
        public string CacheVersionConfigurationName
        {
            get; set;
        } = SystemConfigurationNames.CommonCacheVersion;

        /// <summary>
        /// 查询缓存版本的间隔时间（单位秒）
        /// </summary>
        public int CacheVersionQueryTimeout
        {
            get; set;
        } = 60;

        private  DateTime? _cacheModifyDateTime;
        private  string _cacheVersion;


        private object _lockObj = new object();
        private SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);

        public void Execute(Func<bool> loadCacheCondition,Action loadCacheAction)
        {
            var expireResult = getCacheExpireResult();

      
            if (loadCacheCondition() || expireResult.CacheExpire)
            {
                lock (_lockObj)
                {
                    expireResult = getCacheExpireResult();
                    if (loadCacheCondition() || expireResult.CacheExpire)
                    {
                        loadCacheAction();

                        _cacheVersion = expireResult.CurrentCacheVersion;
                        _cacheModifyDateTime = DateTime.UtcNow;
                    }
                }
            }

        }

        public async Task ExecuteAsync(Func<Task<bool>> loadCacheCondition, Func<Task> loadCacheAction)
        {
            var expireResult = getCacheExpireResult();


            if (await loadCacheCondition() || expireResult.CacheExpire)
            {
                await _semaphore.WaitAsync();

                try
                {
                    expireResult = getCacheExpireResult();
                    if (await loadCacheCondition() || expireResult.CacheExpire)
                    {
                        await loadCacheAction();

                        _cacheVersion = expireResult.CurrentCacheVersion;
                        _cacheModifyDateTime = DateTime.UtcNow;
                    }
                }
                finally
                {
                    _semaphore.Release();
                }
            }

        }

        private CacheExpireResult getCacheExpireResult()
        {
            bool cacheExpire = false;
            string currentCacheVersion = null;
            if (!_cacheModifyDateTime.HasValue)
            {
                cacheExpire = true;
                currentCacheVersion = VersionService.GetVersion(CacheVersionConfigurationName);
            }
            else
            {
                if ((DateTime.UtcNow - _cacheModifyDateTime.Value).TotalSeconds > CacheVersionQueryTimeout)
                {
                    currentCacheVersion = VersionService.GetVersion(CacheVersionConfigurationName);
                    if (currentCacheVersion != _cacheVersion)
                    {
                        cacheExpire = true;
                    }
                }
            }

            return new CacheExpireResult() { CacheExpire=cacheExpire, CurrentCacheVersion=currentCacheVersion };
        }

        private class CacheExpireResult
        {
            public bool CacheExpire { get; set; }
            public string CurrentCacheVersion { get; set; }
        }
    }


    /// <summary>
    /// 获取缓存版本服务
    /// </summary>
    public interface IGetCacheVersionService
    {
        /// <summary>
        /// 获取指定版本名称的版本号
        /// </summary>
        /// <param name="versionName"></param>
        /// <returns></returns>
        string GetVersion(string versionName);
        /// <summary>
        /// 获取指定版本名称的版本号（异步）
        /// </summary>
        /// <param name="versionName"></param>
        /// <returns></returns>
        Task<string> GetVersionAsync(string versionName);
    }

    public class GetCacheVersionService : IGetCacheVersionService
    {
        private IConfigurationService _configurationService;

        public GetCacheVersionService(IConfigurationService configurationService)
        {
            _configurationService = configurationService;
        }
        public string GetVersion(string versionName)
        {
            var version = _configurationService.GetCacheVersion(versionName);
            return version;
        }

        public Task<string> GetVersionAsync(string versionName)
        {
            throw new NotImplementedException();
        }
    }

    public class GetCacheVersionServiceFactory : SingletonFactory<IGetCacheVersionService>
    {
        private static GetCacheVersionServiceFactory _getCacheVersionServiceFactory = new GetCacheVersionServiceFactory();
        protected override IGetCacheVersionService RealCreate()
        {
            IConfigurationService configurationService = ConfigurationServiceFactory.Get();
            GetCacheVersionService getCacheVersionService = new GetCacheVersionService(configurationService);
            return getCacheVersionService;
        }

        public static IGetCacheVersionService Get()
        {
            return _getCacheVersionServiceFactory.Create();
        }
    }
}
