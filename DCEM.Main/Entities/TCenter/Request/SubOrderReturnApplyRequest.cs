using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 子订单退货申请请求参数
    /// </summary>
    public class SubOrderReturnApplyRequest : RequestBase
    {
        ///<summary>
        ///	子订单编号
        ///</summary> 
        public string SubOrderNumber { get; set; }
        ///<summary>
        ///	退货状态(1,确定取货,0,取消）
        ///</summary> 
        public int ReturnStatus { get; set; }
        ///	退货时间
        ///</summary> 
        public DateTime? ReturnTime { get; set; }
        ///<summary>
        ///	退货原因
        ///</summary> 
        public string ReturnReason { get; set; }


    }
}
