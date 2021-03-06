﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.SocketManagement
{
    /// <summary>
    /// Tcp客户端终结点仓储
    /// </summary>
    public interface ITcpClientEndpointRepository
    {
        /// <summary>
        /// 根据Id查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TcpClientEndpoint> QueryById(Guid id);
        /// <summary>
        /// 根据名称查询
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<TcpClientEndpoint> QueryByName(string name);
        /// <summary>
        /// 根据名称匹配分页查询
        /// </summary>
        /// <param name="name"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        Task<QueryResult<TcpClientEndpoint>> QueryByName(string name, int page, int pageSize);
    }
}
