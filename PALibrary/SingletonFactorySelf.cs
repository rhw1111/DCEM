using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace PALibrary
{
    public abstract class SingletonFactorySelf<T, R> : SingletonFactory<T>
        where T : class
        where R : IFactory<T>
    {
        private static R _factory;
        static SingletonFactorySelf()
        {
            _factory = (R)typeof(R).Assembly.CreateInstance(typeof(R).FullName);
        }

        public static T Get()
        {
            return _factory.Create();
        }

        public static IFactory<T> GetFactory()
        {
            return _factory;
        }
    }
}
