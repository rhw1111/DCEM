/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.UpdateDeliveryInfo
*   文件名称    ：UpdateDeliveryInfoResponse.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/12 10:05:57 
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


using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities.Request
{
    /// <summary>
    /// 订单状态同步接口接口请求参数
    /// </summary>
    public class UpdateDeliveryInfoRequest
    {
        /// <summary>
        /// 综合订单编号
        /// </summary>
        [JsonProperty("orderCode")]
        public string OrderCode { get; set; }

        /// <summary>
        /// 订单状态；
        /// CEO与营销云状态编码mapping关系：
        ///   1-ToBeExamined（待审批）；
        ///   2-Examining（审批中）；
        ///   3-Approved（审批通过）；
        ///   4-Rejected（已驳回）；
        ///   5-Cancelled（订单取消）；
        ///   6-GoodsReturned（订单退货）；
        ///   7-Completed（交易完成）；
        ///   8-Refund（退款中）；
        ///   9-Close（已关闭）；
        /// </summary>
        [JsonProperty("status")]
        public int Status { get; set; }

        /// <summary>
        /// 交车结果列表
        /// </summary>
        [JsonProperty("deliveryInfoList")]
        public List<UpdateDeliveryRequest> DeliveryInfoList { get; set; }
    }

    /// <summary>
    /// 交车结果
    /// </summary>
    public class UpdateDeliveryRequest
    {
        /// <summary>
        /// 车架号
        /// </summary>
        [JsonProperty("vin")]
        public string VIN { get; set; }

        /// <summary>
        /// 车辆状态；
        /// CEO与营销云状态编码mapping关系：
        ///   10-ToBePaid；
        ///   20-Paid；
        ///   30-Comfirmed；
        ///   40-TobeProduced；
        ///   50-InProduction；
        ///   60-InTransit；
        ///   70-ToBeDelivered；
        ///   80-CarDelivered
        /// </summary>
        [JsonProperty("status")]
        public int Status { get; set; }

        /// <summary>
        /// 子订单编号
        /// </summary>
        [JsonProperty("subOrderCode")]
        public string SubOrderCode { get; set; }

        /// <summary>
        /// 交车时间
        /// </summary>
        [JsonProperty("time")]
        public DateTime Time { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        [JsonProperty("remark")]
        public string Remark { get; set; }
    }
}