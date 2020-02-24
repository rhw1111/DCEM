using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace PALibrary
{
    /// <summary>
    /// 通用DTO类
    /// 属性全部依赖Attributes
    /// 通常用于纯查询场景
    /// </summary>
    [DataContract]
    public class CommonModel : ModelBase
    {
    }
}
