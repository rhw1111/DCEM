using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ConfigurationService.Main.DAL
{
    public interface IDBConnectionMainFactory
    {
        /// <summary>
        /// 创建主读写连接字符串
        /// </summary>
        /// <returns></returns>
        string CreateAllForMain();
        /// <summary>
        /// 创建只读连接字符串
        /// </summary>
        /// <returns></returns>
        string CreateReadForMain();
    }
}
