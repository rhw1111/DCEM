using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 系统初始化特性
    /// 有此特性标识的类型并且具有Startup静态方法的类，将依次执行
    /// 方法签名为static void Startup(IOrganizationServiceFactory orgServiceFactory,IExecutionContext context)
    /// </summary>
    public class SystemInitialAttribute : Attribute
    {
        /// <summary>
        /// 执行次序
        /// </summary>
        public int Order { get; set; }
    }
}
