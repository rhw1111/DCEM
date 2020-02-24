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
    }
}
