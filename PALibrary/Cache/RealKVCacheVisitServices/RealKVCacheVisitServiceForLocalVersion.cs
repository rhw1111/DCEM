﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using PALibrary.Serializer;
using PALibrary.LanguageTranslate;
using PALibrary.Thread;

namespace PALibrary.Cache.RealKVCacheVisitServices
{
    /// <summary>
    /// 基于本地版本号控制的KV缓存访问服务
    /// cacheConfiguration的格式为
    /// {
    ///     "MaxLength":最大缓存长度,
    ///     "VersionCallTimeout":版本服务调用间隔（单位秒）,
    ///     "VersionNameMappings":
    ///         {
    ///             "{Key的类型的FullName}-{Value的类型的FullName}":"版本名称"
    ///         }
    ///     "DefaultVersionName":"默认版本名称,找不到KV类型与版本名称的映射时使用该名称"
    /// }
    /// </summary>
    public class RealKVCacheVisitServiceForLocalVersion : IRealKVCacheVisitService
    {
        private static SemaphoreSlim _lock = new SemaphoreSlim(1, 1);

        private static Dictionary<string, CacheContainer> _datas = new Dictionary<string, CacheContainer>();

        private static Dictionary<string, IFactory<IKVCacheVersionService>> _kvCacheVersionServiceFactories = new Dictionary<string, IFactory<IKVCacheVersionService>>();

        /// <summary>
        /// KV缓存版本服务工厂键值对
        /// 键为版本名称
        /// </summary>
        public static IDictionary<string, IFactory<IKVCacheVersionService>> KVCacheVersionServiceFactories
        {
            get
            {
                return _kvCacheVersionServiceFactories;
            }
        }


        public V GetSync<K, V>(string cacheConfiguration, Func<V> creator, string prefix, K key)
        {
            var versionMappingKey = $"{typeof(K).FullName}-{typeof(V).FullName}";
            var configuration = JsonSerializerHelper.Deserialize<KVCacheConfiguration>(cacheConfiguration);
            if (!_datas.TryGetValue(prefix, out CacheContainer cacheContainer))
            {
                _lock.Wait();
                try
                {
                    if (!_datas.TryGetValue(prefix, out cacheContainer))
                    {
                        var result = getVersionService(configuration, versionMappingKey);
                        var version = result.Service.GetVersionSync(result.VersionName);
                        cacheContainer = new CacheContainer() { Version = version, LatestVersionTime = DateTime.UtcNow, CacheDict = new HashLinkedCache<object, CacheValueContainer>() { Length = configuration.MaxLength } };
                        _datas[prefix] = cacheContainer;
                    }
                }
                finally
                {
                    _lock.Release();
                }
            }
            else
            {
                if ((DateTime.UtcNow - cacheContainer.LatestVersionTime).TotalSeconds > configuration.VersionCallTimeout)
                {
                    _lock.Wait();
                    try
                    {
                        if ((DateTime.UtcNow - cacheContainer.LatestVersionTime).TotalSeconds > configuration.VersionCallTimeout)
                        {
                            var result = getVersionService(configuration, versionMappingKey);
                            var version = result.Service.GetVersionSync(result.VersionName);
                            if (version != cacheContainer.Version)
                            {
                                cacheContainer = new CacheContainer() { Version = version, LatestVersionTime = DateTime.UtcNow, CacheDict = new HashLinkedCache<object, CacheValueContainer>() { Length = configuration.MaxLength } };
                                _datas[prefix] = cacheContainer;
                            }
                            else
                            {
                                cacheContainer.LatestVersionTime = DateTime.UtcNow;
                            }
                        }
                    }
                    finally
                    {
                        _lock.Release();
                    }

                }
            }



            var valueItem = cacheContainer.CacheDict.GetValue(key);
            if (valueItem == null)
            {
                cacheContainer.SyncOperate(
                () =>
                {
                    valueItem = cacheContainer.CacheDict.GetValue(key);
                    if (valueItem == null)
                    {
                        var cacheValue = creator();
                        valueItem = new CacheValueContainer() { Value = cacheValue };
                        cacheContainer.CacheDict.SetValue(key, valueItem);
                    }
                }
               );

            }

            return (V)valueItem.Value;
        }


        private GetVersionServiceResult getVersionService(KVCacheConfiguration configuration, string versionMappingKey)
        {
            if (!configuration.VersionNameMappings.TryGetValue(versionMappingKey, out string versionName))
            {
                versionName = configuration.DefaultVersionName;
            }

            if (!_kvCacheVersionServiceFactories.TryGetValue(versionName, out IFactory<IKVCacheVersionService> serviceFactory))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundIKVCacheVersionServiceByName,
                    DefaultFormatting = "找不到版本名称为{0}的KV缓存版本服务，发生位置为{1}",
                    ReplaceParameters = new List<object>() { versionName, $"{this.GetType().FullName}.KVCacheVersionServiceFactories" }
                };

                throw new UtilityException((int)Errors.NotFoundIKVCacheVersionServiceByName, fragment);
            }

            return new GetVersionServiceResult() { Service = serviceFactory.Create(), VersionName = versionName };
        }

        private class GetVersionServiceResult
        {
            public IKVCacheVersionService Service { get; set; }

            public string VersionName { get; set; }
        }


        /// <summary>
        /// 内部缓存值容器
        /// </summary>
        private class CacheValueContainer
        {
            public object Value { get; set; }
        }


        /// <summary>
        ///内部缓存容器
        ///提供线程同步处理方法
        /// </summary>
        private class CacheContainer
        {
            private LocalSemaphore _lock = new LocalSemaphore(1, 1);
            /// <summary>
            /// 缓存哈希链表存储
            /// 默认采用LRU（最近最久未访问）策略算法
            /// </summary>
            public HashLinkedCache<object, CacheValueContainer> CacheDict { get; set; }
            /// <summary>
            /// 当前版本号
            /// </summary>
            public string Version { get; set; }
            /// <summary>
            /// 最后访问版本服务的时间
            /// </summary>
            public DateTime LatestVersionTime { get; set; }

            public async Task SyncOperate(Func<Task> action)
            {
                await _lock.SyncOperator(
                    async () =>
                    {
                        await action();
                    }
                    );
            }

            public void SyncOperate(Action action)
            {
                _lock.SyncOperator(
                   () =>
                   {
                       action();
                   }
                   );
            }
        }
        /// <summary>
        /// 配置信息
        /// </summary>
        [DataContract]
        private class KVCacheConfiguration
        {
            /// <summary>
            /// 最大存储长度
            /// </summary>
            [DataMember]
            public int MaxLength { get; set; }
            /// <summary>
            /// 版本服务调用间隔（单位秒）
            /// </summary>

            [DataMember]
            public int VersionCallTimeout { get; set; }
            /// <summary>
            /// KV类型与版本名称映射键值对
            /// 键为{Key的类型全名}-{Value的类型全名}
            /// </summary>
            [DataMember]
            public Dictionary<string, string> VersionNameMappings { get; set; }
            /// <summary>
            /// 默认版本名称
            /// 找不到KV类型与版本名称的映射时使用该名称
            /// </summary>
            [DataMember]
            public string DefaultVersionName { get; set; }
        }


    }

    /// <summary>
    /// KV缓存版本号服务
    /// </summary>
    public interface IKVCacheVersionService
    {
        /// <summary>
        /// 获取指定版本名称(同步)
        /// </summary>
        /// <param name="versionName"></param>
        /// <returns></returns>
        string GetVersionSync(string versionName);
    }
}
