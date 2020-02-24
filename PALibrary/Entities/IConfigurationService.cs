using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PALibrary.Entities
{
    /// <summary>
    /// 配置服务
    /// </summary>
    public interface IConfigurationService
    {
        /// <summary>
        /// 获取系统管理员ID
        /// </summary>
        /// <returns></returns>
        EntityReference GetAdministratorID();
        /// <summary>
        /// 获取缓存版本
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        string GetCacheVersion(string name);
    }
}
