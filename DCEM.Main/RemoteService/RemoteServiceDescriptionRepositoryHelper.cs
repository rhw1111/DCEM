using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.RemoteService;

namespace DCEM.Main.RemoteService
{
    /// <summary>
    /// 远程服务描述仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    public class RemoteServiceDescriptionRepositoryHelper
    {
        private IRemoteServiceDescriptionRepository _remoteServiceDescriptionRepository;


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

        public RemoteServiceDescriptionRepositoryHelper(IRemoteServiceDescriptionRepository remoteServiceDescriptionRepository)
        {
            _remoteServiceDescriptionRepository = remoteServiceDescriptionRepository;
        }
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

    /// <summary>
    /// 远程服务描述仓储帮助类工厂
    /// </summary>
    public static class RemoteServiceDescriptionRepositoryHelperFactory
    {
        public static RemoteServiceDescriptionRepositoryHelper Create(IRemoteServiceDescriptionRepository repository)
        {
            return new RemoteServiceDescriptionRepositoryHelper(repository);
        }
    }

}
