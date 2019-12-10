using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 子订单取消
    /// </summary>
    public class SubOrderCancelApplyRequest : RequestBase
    {
        ///<summary>
        ///	子订单编号
        ///</summary> 
        public string SubOrderNumber { get; set; }
        ///<summary>
        ///	取消状态(1,确定取消,2,取消）
        ///</summary> 
        public int CancelStatus { get; set; }
        ///	取消事件
        ///</summary> 
        public DateTime? CancelTime { get; set; }
        ///<summary>
        ///	取消原因
        ///</summary> 
        public string CancelReason { get; set; }


    }
}
