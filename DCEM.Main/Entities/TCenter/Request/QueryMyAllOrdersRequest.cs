using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 我的订单列表查询请求参数
    /// </summary>   
    public class QueryMyAllOrdersRequest : RequestPaging
    {
        /// <summary>
        /// 用户Id
        /// </summary>
        public int? UserId { set; get; }
    }

    public class ModifySubordersCarRequest
    {
        /// <summary>
        /// 子订单ID
        /// </summary>
        public int? SubOrderCode { set; get; }
        /// <summary>
        /// VIN
        /// </summary>
        public string VIN { set; get; }
        /// <summary>
        /// 整车显示状态
        /// </summary>
        public int Status { set; get; } = 0;
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime? UpdateTime { get; set; }
    }

    public class SubordersDeliveryStatusRequest
    {
        /// <summary>
        /// 子订单编号
        /// </summary>
        public string SubOrderCode { set; get; }
        /// <summary>
        /// 配送状态
        /// </summary>
        public int Status { set; get; } = 0;
    }
}
