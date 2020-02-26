using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 文本片段code
    /// </summary>
    public static class TextCodes
    {
        /// <summary>
        /// 找不到指定领域实体类型的实体转换服务
        /// 格式为“找不到领域实体类型{0}的实体转换服务”
        /// {0}：领域实体类型
        /// </summary>
        public const string NotFoundPADomainEntityConvertServiceByDomainEntityType = "NotFoundPADomainEntityConvertServiceByDomainEntityType";
        /// <summary>
        /// 找不到指定名称的PAWebResource
        /// 格式为“找不到名称为{0}的PAWebResource”
        /// {0}：webresource名称
        /// </summary>
        public const string NotFoundPAWebResourceByName = "NotFoundPAWebResourceByName";

        /// <summary>
        /// 已经达到池的最大长度
        /// 格式为“池{0}已经达到最大长度，最大长度为{1}”
        /// {0}为池的名称
        /// {1}为池的最大长度
        /// </summary>
        public const string PoolLengthOverflow = "PoolLengthOverflow";
        /// <summary>
        /// 找不到指定缓存类型的实际KV缓存访问服务
        /// 格式为“找不到缓存类型为{0}的实际KV缓存访问服务，发生位置为{1}”
        /// {0}：缓存类型
        /// {1}：发生的位置
        /// </summary>
        public const string NotFoundRealKVCacheVisitServiceByCacheType = "NotFoundRealKVCacheVisitServiceByCacheType";

        /// <summary>
        /// 找不到指定版本名称的KV缓存版本服务
        /// 格式为“找不到版本名称为{0}的KV缓存版本服务，发生位置为{1}”
        /// {1}：版本名称
        /// {1}：发生的位置
        /// </summary>
        public const string NotFoundIKVCacheVersionServiceByName = "NotFoundIKVCacheVersionServiceByName";

    }
}
