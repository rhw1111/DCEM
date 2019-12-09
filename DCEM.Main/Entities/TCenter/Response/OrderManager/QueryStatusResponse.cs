/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Response.OrderManager
*   文件名称    ：QueryStatusResponse.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/20 15:57:21 
*   邮    箱    ：litingxian@live.cn
*   个人主站    ：https://github.com/tingli1991
*   功能描述    ：
*   使用说明    ：
*   ========================================================================
*   修改者      ：
*   修改日期    ：
*   修改内容    ：
*   ========================================================================
*  
***************************************************************************/


using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities.Response.OrderManager
{
    /// <summary>
    /// 订单状态查询返回值
    /// </summary>
    public class QueryStatusResponse
    {
        /// <summary>
        /// 综合订单编号
        /// </summary>
        public string OrderCode { get; set; }

        /// <summary>
        /// 支付状态：
        ///  不需要支付=0,
        ///  等待支付=1
        ///  支付成功=3
        /// </summary>
        public int PaymentStatus { get; set; }

        /// <summary>
        /// 状态：
        ///  待审批=1
        ///  审批中=2
        ///  已通过=3
        ///  已驳回=4
        ///  订单取消=5
        ///  订单退货=6
        ///  交易完成=7
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 综合订单状态历史记录
        /// </summary>
        public List<OrderStatusRecordsResponse> OrderStatusRecords { get; set; }

        /// <summary>
        /// 子订单集合状态数据
        /// </summary>
        public List<SubOrderStatusResponse> SubOrderStatus { get; set; }

        /// <summary>
        /// 商品履约办理情况
        /// </summary>
        public List<ProductStatusInfoResponse> Infos { get; set; }

        /// <summary>
        /// 配送信息
        /// </summary>
        public List<ShippingInfoDataResponse> ShippingInfo { get; set; }

        /// <summary>
        /// 办理结果
        /// </summary>
        public List<BusinessInfoDataResponse> BusinessInfo { get; set; }

        /// <summary>
        /// 施工结果
        /// </summary>
        public List<ConstructionInfoDataResponse> ConstructionInfo { get; set; }

        /// <summary>
        /// 交车结果
        /// </summary>
        public List<DeliveryInfoDataResponse> DeliveryInfo { get; set; }

        /// <summary>
        /// 自提结果
        /// </summary>
        public List<SelfLiftingInfoDataResponse> SelfLiftingInfo { get; set; }
    }

    /// <summary>
    /// 综合订单状态历史记录
    /// </summary>
    public class OrderStatusRecordsResponse
    {
        /// <summary>
        /// 变更前状态
        /// </summary>
        public string BeforeStatus { get; set; }

        /// <summary>
        /// 变更后状态
        /// </summary>
        public string AfterStatus { get; set; }

        /// <summary>
        /// 操作时间
        /// </summary>
        public DateTime OperateTime { get; set; }
    }

    /// <summary>
    /// 子订单集合状态数据
    /// </summary>
    public class SubOrderStatusResponse
    {
        /// <summary>
        /// 子订单编号
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 子项状态变更历史记录
        /// </summary>
        public List<SubCodeStatusRecordsResponse> SubCodeStatusRecords { get; set; }
    }

    /// <summary>
    /// 子项状态变更历史记录
    /// </summary>
    public class SubCodeStatusRecordsResponse
    {
        /// <summary>
        /// 变更前状态
        /// </summary>
        public string BeforeStatus { get; set; }

        /// <summary>
        /// 变更前状态值
        /// </summary>
        public int BeforeStatusCode { get; set; }

        /// <summary>
        /// 变更后状态
        /// </summary>
        public string AfterStatus { get; set; }

        /// <summary>
        /// 变更前状态值
        /// </summary>
        public int AfterStatusCode { get; set; }

        /// <summary>
        /// 操作时间
        /// </summary>
        public DateTime OprateTime { get; set; }
    }

    /// <summary>
    /// 商品履约办理情况
    /// </summary>
    public class ProductStatusInfoResponse
    {
        //TODO 未确认字段
        //ProviderInfo

        /// <summary>
        /// 履约状态：
        ///  待录入=1
        ///  提交待办理=2
        ///  办理成功=3
        ///  办理失败=4
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 履约结果
        /// </summary>
        public string Result { get; set; }

        /// <summary>
        /// 履约编号
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 经办人
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 履约时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Remark { get; set; }
    }

    /// <summary>
    /// 配送信息
    /// </summary>
    public class ShippingInfoDataResponse
    {
        /// <summary>
        /// 子订单编号
        /// 备注
        ///     子订单编号，主要用于综合订单购买多配送点配送包裹，匹配配送信息
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 配送状态
        /// 已下单=1,
        ///  已收单=2,
        ///  分拣=3,
        ///  打包=4,
        ///  已发货=5,
        ///  配送中=6,
        ///  已收货=7,
        ///  退货申请=8,
        ///  商家已收货=9
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 配送结果
        /// </summary>
        public string Result { get; set; }

        /// <summary>
        /// 配送人
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 配送时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
    }

    /// <summary>
    /// 办理结果
    /// </summary>
    public class BusinessInfoDataResponse
    {
        /// <summary>
        /// 子订单编号
        /// 备注：
        ///     子订单编号，主要用于综合订单购买多配送点配送包裹，匹配配送信息
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 办理状态
        /// 待录入=1
        ///  提交待办理=2
        ///  办理成功=3
        ///  办理失败=4
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 办理结果
        /// </summary>
        public string Result { get; set; }

        /// <summary>
        /// 业务编号
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 经办人
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 办理时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Remark { get; set; }
    }

    /// <summary>
    /// 施工结果
    /// </summary>
    public class ConstructionInfoDataResponse
    {
        /// <summary>
        /// 子订单编号
        /// 备注：
        ///     子订单编号，主要用于综合订单购买多配送点配送包裹，匹配配送信息
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 施工状态：
        ///  待施工=1
        ///  施工中=2
        ///  施工完成=3
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 施工开始时间
        /// </summary>
        public string StartTime { get; set; }

        /// <summary>
        /// 施工结束时间
        /// </summary>
        public string EndTime { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Remark { get; set; }
    }

    /// <summary>
    /// 交车结果
    /// </summary>
    public class DeliveryInfoDataResponse
    {
        /// <summary>
        /// 子订单编号
        /// 备注：
        ///     子订单编号，主要用于综合订单购买多配送点配送包裹，匹配配送信息
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 车架号
        /// </summary>
        public string VIN { get; set; }

        /// <summary>
        /// 整车显示状态：
        ///  待确认=1
        ///  排产中=2
        ///  生产中=3
        ///  发运中=4
        ///  到达门店=5
        ///  已提车=6
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 交车时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// 车辆过点数据
        /// </summary>
        public List<StatusPointsDataResponse> StatusPoints { get; set; }
    }

    /// <summary>
    /// 车辆过点数据
    /// </summary>
    public class StatusPointsDataResponse
    {
        /// <summary>
        /// 过点状态（车辆关键换节点状态）
        /// </summary>
        public string Point { get; set; }

        /// <summary>
        /// 过点时间（关联过点记录时间）
        /// </summary>
        public string DateTime { get; set; }
    }

    /// <summary>
    /// 自提结果
    /// </summary>
    public class SelfLiftingInfoDataResponse
    {
        /// <summary>
        /// 子订单编号
        /// 备注：
        ///     子订单编号，主要用于综合订单购买多配送点配送包裹，匹配配送信息
        /// </summary>
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 自提状态：
        ///  备货中=1 
        ///  待自提=2
        ///  已自提=3
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 经办人
        /// </summary>
        public string User { get; set; }

        /// <summary>
        /// 自提时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Remark { get; set; }
    }
}