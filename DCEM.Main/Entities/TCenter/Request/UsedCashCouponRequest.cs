using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 权益优惠卷使用请求参数
    /// </summary>
    public class UsedCashCouponRequest
    {
        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { get; set; }
        /// <summary>
        /// 权益项目
        /// </summary>
        public ICollection<MemberRight> MemberRights { get; set; }
        /// <summary>
        /// 累计抵扣金额
        /// </summary>
        public decimal? DeductionAmount { get; set; }

    }

    /// <summary>
    /// 权益项查询使用信息
    /// </summary>
    public class MemberRight
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
        /// 类别，1-现抵扣券
        /// </summary>
        public int? RightType { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        public int? RightNum { get; set; }
        /// <summary>
        /// 权益项总金额
        /// </summary>
        public decimal? DeductionAmount { get; set; }
        /// <summary>
        /// 有效时长
        /// </summary>
        public int? ValidTime { get; set; }
        /// <summary>
        /// 状态（是否可用）,0可用 1不可用
        /// </summary>
        public int? StatusCode { get; set; }
    }
}
