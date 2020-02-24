using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    /// <summary>
    /// PA解决方案信息
    /// 负责解决方案的相关静态信息的存取
    /// </summary>
    public static class PASolutionInfomation
    {
        /// <summary>
        /// 通用部分实体前缀
        /// 需要在初始化时设置
        /// </summary>
        public static string CommonEntityPrefix
        {
            get;set;
        }
    }
}
