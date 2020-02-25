using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.LanguageTranslate;

namespace PALibrary.Cache
{
    public class KVCacheVisitor:EntityBase<IKVCacheVisitorIMP>
    {
        private static IFactory<IKVCacheVisitorIMP> _kvCacheVisitorIMPFactory = new KVCacheVisitorIMPFactory();

        public static IFactory<IKVCacheVisitorIMP> KVCacheVisitorIMPFactory
        {
            set
            {
                _kvCacheVisitorIMPFactory = value;
            }
        }


        public override IFactory<IKVCacheVisitorIMP> GetIMPFactory()
        {
            return _kvCacheVisitorIMPFactory;
        }

        /// <summary>
        /// Id
        /// </summary>
        public Guid ID
        {
            get
            {
                return GetAttribute<Guid>("ID");
            }
            set
            {
                SetAttribute<Guid>("ID", value);
            }
        }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name
        {
            get
            {
                return GetAttribute<string>("Name");
            }
            set
            {
                SetAttribute<string>("Name", value);
            }
        }

        /// <summary>
        /// 缓存类型
        /// </summary>
        public string CacheType
        {
            get
            {
                return GetAttribute<string>("CacheType");
            }
            set
            {
                SetAttribute<string>("CacheType", value);
            }
        }

        /// <summary>
        /// 缓存配置
        /// </summary>
        public string CacheConfiguration
        {
            get
            {
                return GetAttribute<string>("CacheConfiguration");
            }
            set
            {
                SetAttribute<string>("CacheConfiguration", value);
            }
        }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime
        {
            get
            {
                return GetAttribute<DateTime>("CreateTime");
            }
            set
            {
                SetAttribute<DateTime>("CreateTime", value);
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime ModifyTime
        {
            get
            {
                return GetAttribute<DateTime>("ModifyTime");
            }
            set
            {
                SetAttribute<DateTime>("ModifyTime", value);
            }
        }

        public V GetSync<K, V>(Func<K, V> creator, K key)
        {
            return _imp.GetSync<K, V>(this, creator, key);
        }

    }

    public interface IKVCacheVisitorIMP
    {
        V GetSync<K, V>(KVCacheVisitor visitor, Func<K, V> creator, K key);
    }

    public class KVCacheVisitorIMP : IKVCacheVisitorIMP
    {
        private static Dictionary<string, IFactory<IRealKVCacheVisitService>> _realKVCacheVisitServiceFactories = new Dictionary<string, IFactory<IRealKVCacheVisitService>>();

        /// <summary>
        /// 实际KV缓存访问服务工厂键值对
        /// 键为缓存类型
        /// </summary>
        public static IDictionary<string, IFactory<IRealKVCacheVisitService>> RealKVCacheVisitServiceFactories
        {
            get
            {
                return _realKVCacheVisitServiceFactories;
            }
        }


        public V GetSync<K, V>(KVCacheVisitor visitor, Func<K, V> creator, K key)
        {
            var prefix = GetPrefix(visitor.Name, typeof(K), typeof(V));
            var realService = getRealService(visitor.CacheType);

            return realService.GetSync(visitor.CacheConfiguration,
                 () =>
                 {
                     return creator(key);
                 }
            , prefix, key);
        }

        private string GetPrefix(string name, Type keyType, Type valueType)
        {
            return $"{name}_{keyType.FullName}_{valueType.FullName}";
        }

        public IRealKVCacheVisitService getRealService(string type)
        {
            if (!_realKVCacheVisitServiceFactories.TryGetValue(type, out IFactory<IRealKVCacheVisitService> serviceFactory))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundRealKVCacheVisitServiceByCacheType,
                    DefaultFormatting = "找不到缓存类型为{0}的实际KV缓存访问服务，发生位置为{1}",
                    ReplaceParameters = new List<object>() { type, $"{this.GetType().FullName}.RealKVCacheVisitServiceFactories" }
                };

                throw new UtilityException((int)Errors.NotFoundRealKVCacheVisitServiceByCacheType, fragment);
            }

            return serviceFactory.Create();

        }
    }

    public class KVCacheVisitorIMPFactory : IFactory<IKVCacheVisitorIMP>
    {
        public IKVCacheVisitorIMP Create()
        {
            return new KVCacheVisitorIMP();
        }
    }

    public interface IRealKVCacheVisitService
    {
        V GetSync<K, V>(string cacheConfiguration, Func<V> creator, string prefix, K key);
    }
}
