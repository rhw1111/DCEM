using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 工厂接口
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IFactory<out T>
    {
        T Create();
    }
}
