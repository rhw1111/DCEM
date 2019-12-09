
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 我的订单列表查询返回参数
    /// </summary>   
    public class QueryMyAllOrdersResponse : ResponsePaging
    {
        /// <summary>
        /// 结果集合
        /// </summary>
        public ICollection<DataInfo> Data { set; get; }
    }

    public class DataInfo
    {
        ///<summary>
        ///	订单主信息	
        ///</summary> 
        public ReturnOrderData OrderData { get; set; }
        ///<summary>
        ///	订单包含商品集合信息	
        ///</summary> 
        public ICollection<ProductModel> Products { get; set; }
        ///<summary>
        ///	订单履约属性信息	
        ///</summary> 
        public ICollection<ProviderParam> ProviderParams { get; set; }
    }
}
