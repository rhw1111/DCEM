using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Request
{
    /// <summary>
    /// 现金抵扣券查询请求参数
    /// </summary>
    public class QueryMemberRightRequest : RequestBase
    {
        /// <summary>
        /// 用户Id
        /// </summary>
        public int UserId { get; set; }
    }
}
