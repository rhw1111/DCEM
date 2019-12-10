using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 响应DTO实体类
    /// </summary>   
    public class SearchOrderResponse : ResponseBase
    {
        public int OrderID { get; set; }

        public int OrderStateID { get; set; }

        public decimal Amount { get; set; }

        public int ProductID { get; set; }

        public string PrductName { get; set; }

        public int MemberID { get; set; }

        public string MemberName { get; set; }

        public DateTime OrderCreatedTime { get; set; }
    }    
}
