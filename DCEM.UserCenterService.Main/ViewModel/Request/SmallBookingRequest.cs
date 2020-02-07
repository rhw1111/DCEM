using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class SmallBookingRequest
    {
        /// <summary>
        /// 用户Id
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// 用车人姓名
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// 用车人手机号
        /// </summary>
        public string MobilePhone { get; set; }

        /// <summary>
        /// 小订订单编号
        /// </summary>
        public string OrderCode { get; set; }

        /// <summary>
        /// 订单状态0-待支付、1-已支付、2-申请退订、3-已退订
        /// </summary>
        public int? OrderStatus { get; set; }

        /// <summary>
        /// 称谓（0-男，1-女）
        /// </summary>
        public int? Gender { get; set; }

        /// <summary>
        /// 订单总额
        /// </summary>
        public decimal? TotalOrder { get; set; }

        /// <summary>
        /// 预约单号
        /// </summary>
        public string BlindOrder { get; set; }

        /// <summary>
        /// 意向车型编号
        /// </summary>
        public string VehTypeCode { get; set; }

        /// <summary>
        /// 意向车型名称
        /// </summary>
        public string VehTypeName { get; set; }

        /// <summary>
        /// 意向配置编号
        /// </summary>
        public string VehConfigCode { get; set; }

        /// <summary>
        /// 意向配置名称
        /// </summary>
        public string VehConfigName { get; set; }

        /// <summary>
        /// 权益编号(权益包)
        /// </summary>
        public string EquityCode { get; set; }

        /// <summary>
        /// 权益Id(权益包)
        /// </summary>
        public string EquityPackageId { get; set; }

        /// <summary>
        /// 权益名称
        /// </summary>
        public string EquityName { get; set; }  

        /// <summary>
        /// 选配编号
        /// </summary>
        public string OptionalCode { get; set; }

        /// <summary>
        /// 选配Id
        /// </summary>
        public string OptionalId { get; set; }

        /// <summary>
        /// 选配名称
        /// </summary>
        public string OptionalName { get; set; }

        /// <summary>
        /// 上牌城市
        /// </summary>
        public string CityOnCard { get; set; }

        /// <summary>
        /// 上牌省份
        /// </summary>
        public string ProvinceOnCard { get; set; }

        /// <summary>
        /// 退订原因(订单状态为2-退订申请时必传)
        /// </summary>
        public string UnsubscribeReason { get; set; }

        /// <summary>
        /// 支付记录编码(订单状态为1-已支付、3-已退订时必传)
        /// </summary>
        public string PaymentCode { get; set; }

        /// <summary>
        /// 交易时间
        /// </summary>
        public string TransactionTime { get; set; }

        /// <summary>
        /// 交易金额（精确两位小数）
        /// </summary>
        public decimal? Transactionamount { get; set; }

        /// <summary>
        /// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
        /// </summary>
        public int? PaymentChannel { get; set; }

        /// <summary>
        /// 小订退订编号(订单状态为2-申请退订、3-已关闭时必传)
        /// </summary>
        public string SmallRefundCode { get; set; }

        /// <summary>
        /// 权益退订金额(订单状态为2-退订申请时必传)
        /// </summary>
        public decimal? EquityRefundAmount { get; set; }

        /// <summary>
        ///退订权益编号(订单状态为2-申请退订、3-已关闭时必传)
        /// </summary>
        public string EquityRefundCode { get; set; }

        /// <summary>
        /// 退订权益名称(订单状态为2-申请退订、3-已关闭时必传)
        /// </summary>
        public string EquityRefundName { get; set; }

        /// <summary>
        /// 选配退订金额
        /// </summary>
        public decimal? OptionalRefundAmount { get; set; }

        /// <summary>
        /// 选配退订编号
        /// </summary>
        public string OptionalRefundCode { get; set; }

        /// <summary>
        /// 退订选配名称(订单状态为2-申请退订、3-已关闭时必传)
        /// </summary>
        public string OptionalRefundName { get; set; }

        /// <summary>
        /// 备用字段1
        /// </summary>
        public string Spare1 { get; set; }

        /// <summary>
        /// 备用字段2
        /// </summary>
        public string Spare2 { get; set; }

        /// <summary>
        /// 备用字段2
        /// </summary>
        public string Spare3 { get; set; }

        /// <summary>
        /// 备用字段4 预订推荐人Userid（订单状态0-待支付必传
        /// </summary>
        public string Spare4 { get; set; }

        /// <summary>
        /// 备用字段5
        /// </summary>
        public string Spare5 { get; set; }

        /// <summary>
        /// 备用字段6
        /// </summary>
        public string Spare6 { get; set; }

        /// <summary>
        /// 备用字段7
        /// </summary>
        public string Spare7 { get; set; }
    }
}
