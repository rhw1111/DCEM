
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    ///<summary>
    /// 创建订单请求参数
    ///</summary>           
    public class EditOrderRequest : RequestBase
    {
        /// <summary>
        /// 订单Id
        /// </summary>
        public int OrderId { get; set; }
        ///<summary>
        ///	订单主信息
        ///</summary> 
        public OrderData OrderData { get; set; }
        
        ///<summary>
        ///订单包含商品集合信息	
        ///</summary> 
        public ICollection<ProductModel> Products { get; set; }
    }
}

