using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Response
{
    /// <summary>
    /// 现金抵扣券查询返回参数
    /// </summary>
    public class QueryMemberRightResponse : ResponseBase
    {
        /// <summary>
        /// 总条数
        /// </summary>
        public int TotalCount { get; set; }
        /// <summary>
        /// 权益项集合
        /// </summary>
        public List<QueryMemberRightResponseData> Data { get; set; }
    }
    /// <summary>
    /// 权益
    /// </summary>
    public class QueryMemberRightResponseData
    {
        /// <summary>
        /// 用户Id
        /// </summary>
        public long UserId { get; set; }
        /// <summary>
        /// 权益项编号
        /// </summary>
        public string RightCode { get; set; }
        /// <summary>
        /// 权益项名称
        /// </summary>
        public string RightName { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        public int RightNum { get; set; }
        /// <summary>
        /// 权益项总金额
        /// </summary>
        public decimal DeductionAmount { get; set; }
        /// <summary>
        /// 到期时间
        /// </summary>
        public DateTime ExpirationTime { get; set; }
    }
}
