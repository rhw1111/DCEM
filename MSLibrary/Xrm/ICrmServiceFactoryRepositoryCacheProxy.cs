﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Xrm
{
    /// <summary>
    /// Crm服务工厂仓储的缓存代理
    /// </summary>
    public interface ICrmServiceFactoryRepositoryCacheProxy
    {
        /// <summary>
        /// 根据工厂名称查询
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<CrmServiceFactory> QueryByName(string name);
    }
}