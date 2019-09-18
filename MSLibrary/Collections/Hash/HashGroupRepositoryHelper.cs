﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;

namespace MSLibrary.Collections.Hash
{
    /// <summary>
    /// 哈希组仓储静态帮助器
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    public static class HashGroupRepositoryHelper
    {
        public static IHashGroupRepository Repository
        {
            get;set;
        }

        private static int _cacheSize = 2000;

        private static int CacheSize
        {
            get
            {
                return _cacheSize;
            }
            set
            {
                _groupsByID.Length = value;
                _groupsByName.Length = value;
            }
        }
        private static int CacheTimeout { get; set; } = 600;

        private static HashLinkedCache<string, CacheTimeContainer<HashGroup>> _groupsByName = new HashLinkedCache<string, CacheTimeContainer<HashGroup>>() { Length = CacheSize };

        private static HashLinkedCache<Guid, CacheTimeContainer<HashGroup>> _groupsByID = new HashLinkedCache<Guid, CacheTimeContainer<HashGroup>>() { Length = CacheSize };


        /// <summary>
        /// 根据id查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static async Task<HashGroup> QueryById(Guid id)
        {
            CacheTimeContainer<HashGroup> groupItem = _groupsByID.GetValue(id);
            if (groupItem == null || groupItem.Expire())
            {
                var group = await Repository.QueryById(id);
                groupItem = new CacheTimeContainer<HashGroup>(group, CacheTimeout);
                _groupsByID.SetValue(id, groupItem);
            }

            return groupItem.Value;
        }
        /// <summary>
        /// 根据名称查询
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public async static Task<HashGroup> QueryByName(string name)
        {
            CacheTimeContainer<HashGroup> groupItem = _groupsByName.GetValue(name);
            if (groupItem == null || groupItem.Expire())
            {
                var group = await Repository.QueryByName(name);
                groupItem = new CacheTimeContainer<HashGroup>(group, CacheTimeout);
                _groupsByName.SetValue(name, groupItem);
            }

            return groupItem.Value;
        }
        public static HashGroup QueryByNameSync(string name)
        {
            CacheTimeContainer<HashGroup> groupItem = _groupsByName.GetValue(name);
            if (groupItem == null || groupItem.Expire())
            {
                var group = Repository.QueryByNameSync(name);
                groupItem = new CacheTimeContainer<HashGroup>(group, CacheTimeout);
                _groupsByName.SetValue(name, groupItem);
            }

            return groupItem.Value;
        }


    }
}
