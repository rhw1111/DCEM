using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 错误码
    /// </summary>
    public enum Errors
    {
        /// <summary>
        /// 找不到指定领域实体类型的实体转换服务
        /// </summary>
        NotFoundPADomainEntityConvertServiceByDomainEntityType = 614710000,
        /// <summary>
        ///找不到指定名称的PAWebResource
        /// </summary>
        NotFoundPAWebResourceByName= 614710100,
        /// <summary>
        /// 已经达到池的最大长度
        /// </summary>
        PoolLengthOverflow = 614710200,
        /// <summary>
        /// 找不到指定缓存类型的实际KV缓存访问服务
        /// </summary>
        NotFoundRealKVCacheVisitServiceByCacheType = 614710250,
        /// <summary>
        /// 找不到指定版本名称的KV缓存版本服务
        /// </summary>
        NotFoundIKVCacheVersionServiceByName = 614710251,
        /// <summary>
        /// 指定的实体无法判断权限
        /// </summary>
        EntityNotCheckPrivilege= 614710271,
    }
}
