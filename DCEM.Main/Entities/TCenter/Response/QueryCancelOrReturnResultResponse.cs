using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单退货申或取消结果查询返回参数
    /// </summary>
    public class QueryCancelOrReturnResultResponse : ResponsePaging
    {
        public List<ReturnResultData> Data { get; set; }

    }

    public class ReturnResultData
    {
        ///<summary>
        ///	订单详情编号
        ///</summary> 
        public string OrderDetailCode { get; set; }
        ///<summary>
        ///	订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        ///<summary>
        ///	申请原因
        ///</summary> 
        public string AppyCause { get; set; }
        ///<summary>
        ///	申请人
        ///</summary> 
        public string Appy { get; set; }
        ///<summary>
        ///	申请时间
        ///</summary> 
        public DateTime? AppyTime { get; set; }
        ///<summary>
        ///	审批状态
        ///</summary> 
        public int? ApproverStatus { get; set; }
        ///<summary>
        ///	审批人
        ///</summary> 
        public string Approver { get; set; }
        ///<summary>
        ///	审批意见
        ///</summary> 
        public string AuditOpinion { get; set; }
    }
}