using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 权益项查询返回参数
    /// </summary>
    public class QueryCashCouponResponse : ResponsePaging
    {
        /// <summary>
        /// 总条数
        /// </summary>
        public int TotalCount { get; set; }
        /// <summary>
        /// 权益项集合
        /// </summary>
        public ICollection<MemberRights> Data { set; get; }
    }
    /// <summary>
    /// 权益项信息
    /// </summary>
    public class MemberRights
    {
        ///<summary>
        ///	用户编号
        ///</summary> 
        public long UserId { get; set; }
        ///<summary>
        ///	权益项编号
        ///</summary> 
        public string RightCode { get; set; }
        ///<summary>
        ///	权益项名称
        ///</summary> 
        public string RightName { get; set; }
        ///<summary>
        ///	数量
        ///</summary> 
        public int? RightNum { get; set; }
        ///<summary>
        ///	权益项总金额
        ///</summary> 
        public decimal? DeductionAmount { get; set; }
        ///<summary>
        ///	到期时间
        ///</summary> 
        public DateTime? ExpirationTime { get; set; }
    }
}