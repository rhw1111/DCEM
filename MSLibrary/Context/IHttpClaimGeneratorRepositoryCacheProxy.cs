﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Context
{
    public interface IHttpClaimGeneratorRepositoryCacheProxy
    {
        /// <summary>
        /// 根据名称查询
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<HttpClaimGenerator> QueryByName(string name);
    }
}