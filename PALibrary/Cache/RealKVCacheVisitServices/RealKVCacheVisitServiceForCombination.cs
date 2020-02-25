using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using PALibrary.Thread;
using PALibrary.Serializer;

namespace PALibrary.Cache.RealKVCacheVisitServices
{
    /// <summary>
    /// 基于组合的KV缓存访问服务
    /// 通常用于做多级缓存
    /// cacheConfiguration的格式为
    /// {
    ///     "VistorNames":[访问者名称1，访问者名称2,...]
    /// }
    /// </summary>
    public class RealKVCacheVisitServiceForCombination : IRealKVCacheVisitService
    {

        private IKVCacheVisitorRepositoryCacheProxy _kvCacheVisitorRepositoryCacheProxy;

        public RealKVCacheVisitServiceForCombination(IKVCacheVisitorRepositoryCacheProxy kvCacheVisitorRepositoryCacheProxy)
        {
            _kvCacheVisitorRepositoryCacheProxy = kvCacheVisitorRepositoryCacheProxy;
        }

        public V GetSync<K, V>(string cacheConfiguration, Func<V> creator, string prefix, K key)
        {
            var configuration = JsonSerializerHelper.Deserialize<KVCacheConfiguration>(cacheConfiguration);

            Func<K, V> currentCreator = (k) =>
            {
                return creator();
            };
            for (var index = configuration.VistorNames.Count - 1; index >= 0; index--)
            {
                currentCreator = (k) =>
                {
                    var visitor = _kvCacheVisitorRepositoryCacheProxy.QueryByNameSync(configuration.VistorNames[index]);
                    return visitor.GetSync(currentCreator, key);
                };
            }

            return currentCreator(key);
        }


        /// <summary>
        /// 配置信息
        /// </summary>
        [DataContract]
        private class KVCacheConfiguration
        {
            /// <summary>
            /// 需要组合使用的KV缓存访问者名称集合
            /// </summary>
            [DataMember]
            public List<string> VistorNames { get; set; }
        }

    }
}
