﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Cache
{
    public interface IKVCacheVisitorRepositoryCacheProxy
    {
        Task<KVCacheVisitor> QueryByName(string name);
        KVCacheVisitor QueryByNameSync(string name);
    }
}
