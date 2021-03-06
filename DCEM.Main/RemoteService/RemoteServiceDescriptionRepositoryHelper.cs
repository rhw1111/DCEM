﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Cache;
using MSLibrary.RemoteService;

namespace DCEM.Main.RemoteService
{
    /// <summary>
    /// 远程服务描述仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(RemoteServiceDescriptionRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class RemoteServiceDescriptionRepositoryHelper
    {
        private IRemoteServiceDescriptionRepository _remoteServiceDescriptionRepository;

        public RemoteServiceDescriptionRepositoryHelper(IRemoteServiceDescriptionRepository remoteServiceDescriptionRepository)
        {
            _remoteServiceDescriptionRepository = remoteServiceDescriptionRepository;
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
                _generatorsByName.Length = value;
            }
        }
        private static int CacheTimeout { get; set; } = 600;

        private static HashLinkedCache<string, CacheTimeContainer<RemoteServiceDescription>> _generatorsByName = new HashLinkedCache<string, CacheTimeContainer<RemoteServiceDescription>>() { Length = CacheSize };


        public async Task<RemoteServiceDescription> QueryByName(string name)
        {
            CacheTimeContainer<RemoteServiceDescription> generatorItem = _generatorsByName.GetValue(name);
            if (generatorItem == null || generatorItem.Expire())
            {
                var generator = await _remoteServiceDescriptionRepository.QueryByName(name);

                generatorItem = new CacheTimeContainer<RemoteServiceDescription>(generator, CacheTimeout);
                _generatorsByName.SetValue(name, generatorItem);
            }

            return generatorItem.Value;
        }



    }


}
