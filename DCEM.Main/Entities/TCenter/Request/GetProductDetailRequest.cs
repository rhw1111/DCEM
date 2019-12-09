using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 商品详细请求参数
    /// </summary>   
    public class GetProductDetailRequest : RequestBase
    {
        /// <summary>
        /// 商品编号
        /// </summary>
        public string ProductCode { set; get; }
    }
}
