using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace MSLibrary.MessageQueue
{
    /// <summary>
    /// 执行类型仓储帮助类
    /// 提供缓存服务
    /// 简化需要缓存服务的调用方使用
    /// </summary>
    [Injection(InterfaceType = typeof(SMessageExecuteTypeRepositoryHelper), Scope = InjectionScope.Singleton)]
    public class SMessageExecuteTypeRepositoryHelper
    {
        private ISMessageExecuteTypeRepository _sMessageExecuteTypeRepository;


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

        private static HashLinkedCache<string, CacheTimeContainer<SMessageExecuteType>> _typesByName = new HashLinkedCache<string, CacheTimeContainer<SMessageExecuteType>>() { Length = CacheSize };



        public SMessageExecuteTypeRepositoryHelper(ISMessageExecuteTypeRepository sMessageExecuteTypeRepository)
        {
            _sMessageExecuteTypeRepository = sMessageExecuteTypeRepository;
        }


        public async Task<SMessageExecuteType> QueryByName(string name)
        {
  
            CacheTimeContainer<SMessageExecuteType> typeItem = _typesByName.GetValue(name);
            if (typeItem == null || typeItem.Expire())
            {
                var type = await _sMessageExecuteTypeRepository.QueryByName(name);
                typeItem = new CacheTimeContainer<SMessageExecuteType>(type, CacheTimeout);
                _typesByName.SetValue(name, typeItem);
            }

            return typeItem.Value;
        }


    }
}
