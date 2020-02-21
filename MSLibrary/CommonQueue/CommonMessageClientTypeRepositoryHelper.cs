using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.CommonQueue
{
    /// <summary>
    /// 通用消息客户端类型仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(CommonMessageClientTypeRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class CommonMessageClientTypeRepositoryHelper
    {
        private ICommonMessageClientTypeRepository _commonMessageClientTypeRepository;


        private static int _cacheSize = 2000;

        /// <summary>
        /// 缓存数量
        /// 默认2000
        /// </summary>
        public static int CacheSize
        {
            get
            {
                return _cacheSize;
            }
            set
            {
                _cacheSize = value;
                _typesByName.Length = value;
            }
        }
        /// <summary>
        /// 缓存时间
        /// 默认600秒
        /// </summary>
        public static int CacheTimeout { get; set; } = 600;

        /// <summary>
        /// 清除缓存
        /// </summary>
        public static bool Refreash
        {
            set
            {
                _typesByName.Clear();
            }
        }

        private static HashLinkedCache<string, CacheTimeContainer<CommonMessageClientType>> _typesByName = new HashLinkedCache<string, CacheTimeContainer<CommonMessageClientType>>() { Length = CacheSize };



        public CommonMessageClientTypeRepositoryHelper(ICommonMessageClientTypeRepository commonMessageClientTypeRepository)
        {
            _commonMessageClientTypeRepository = commonMessageClientTypeRepository;
        }


        public async Task<CommonMessageClientType> QueryByName(string name)
        {

            CacheTimeContainer<CommonMessageClientType> typeItem = _typesByName.GetValue(name);
            if (typeItem == null || typeItem.Expire())
            {
                var type = await _commonMessageClientTypeRepository.QueryByName(name);
                typeItem = new CacheTimeContainer<CommonMessageClientType>(type, CacheTimeout);
                _typesByName.SetValue(name, typeItem);
            }

            return typeItem.Value;
        }

    }
}
