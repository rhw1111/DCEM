using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PALibrary
{
    /// <summary>
    /// 当前用户信息上下文接口
    /// 在上下文中使用该接口来获取用户相关信息
    /// </summary>
    public interface ICurrentUserInfoContext
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        EntityReference GetUserID();
        /// <summary>
        /// 当前用户的时区与UTC时间相差的分钟数
        /// </summary>
        /// <returns></returns>
        int GetTimezoneOffset();
        /// <summary>
        /// 当前用户语言编码
        /// </summary>
        /// <returns></returns>
        int GetLcid();

    }
}
