using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities.Request
{
    /// <summary>
    /// 订单权益抵扣请求参数
    /// </summary>
    public class MemberRightsDeductionRequest : RequestBase
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { get; set; }
        /// <summary>
        /// 累计抵扣金额
        /// </summary>
        public decimal DeductionAmount { get; set; }
        /// <summary>
        /// 权益项目集合
        /// </summary>
        public List<Memberright> MemberRights { get; set; }
    }
    /// <summary>
    /// 权益项目
    /// </summary>
    public class Memberright
    {
        /// <summary>
        /// 权益项编号
        /// </summary>
        public string RightCode { get; set; }
        /// <summary>
        /// 权益项名称
        /// </summary>
        public string RightName { get; set; }
        /// <summary>
        /// 类别
        /// </summary>
        public int RightType { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        public int RightNum { get; set; }
        /// <summary>
        /// 权益项总金额
        /// </summary>
        public decimal DeductionAmount { get; set; }
        /// <summary>
        /// 有效时长
        /// </summary>
        public int ValidTime { get; set; }
        /// <summary>
        /// 状态（0可用1不可用）
        /// </summary>
        public int StatusCode { get; set; }
    }
}
