using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    public enum SPMOperateType
    {
        /// <summary>
        /// 出库
        /// </summary>
        InRepertory = 0,
        /// <summary>
        /// 入库
        /// </summary>
        OutRepertory = 1
    }
    /// <summary>
    /// 衍生品出入库类型（库存管理公共方法使用，修改此处必须要去接口那边的枚举也做修改，保持同步）
    /// </summary>
    public enum SPMInOutType
    {
        /// <summary>
        /// 退货入库
        /// </summary>
        BackIn = 1,
        /// <summary>
        /// 采购入库
        /// </summary>
        BuyIn = 2,
        /// <summary>
        /// 调拨入库
        /// </summary>
        AllotIn = 3,
        /// <summary>
        /// 销售出库
        /// </summary>
        SellOut = 4,
        /// <summary>
        /// 调拨出库
        /// </summary>
        AllotOut = 5,
        /// <summary>
        /// 销售出库占用
        /// </summary>
        SellOutOccupy = 6,
        /// <summary>
        /// 销售出库取消占用
        /// </summary>
        SellOutCancel = 7,
        /// <summary>
        /// 调拨出库占用
        /// </summary>
        AllotOutOccupy = 8,
        /// <summary>
        /// 调拨出库取消占用
        /// </summary>
        AllotOutCancel = 9

    }
}
