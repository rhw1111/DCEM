using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 领域实体基类
    /// </summary>
    public abstract class EntityBase<T> : ModelBase
    {
        protected T _imp;
        /// <summary>
        /// 获取具体实现工厂
        /// </summary>
        /// <returns></returns>
        public abstract IFactory<T> GetIMPFactory();


        public EntityBase()
        {
            var impFactory = GetIMPFactory();
            _imp = impFactory.Create();
        }

        public Dictionary<string, object> Extensions = new Dictionary<string, object>();

        public V GetExtension<V>(string name)
        {
            if (Extensions.TryGetValue(name, out object value))
            {
                return (V)value;
            }
            else
            {
                return default(V);
            }
        }

        public void SetExtension<V>(string name, V value)
        {
            if (Extensions == null)
            {
                lock (this)
                {
                    if (Extensions == null)
                    {
                        Extensions = new Dictionary<string, object>();
                    }
                }

            }
            Extensions[name] = value;
        }

        public T GetIMP()
        {
            return _imp;
        }
    }
}
