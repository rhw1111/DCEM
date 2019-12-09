using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 履约信息
    /// </summary>
    public class ProviderInfoData
    {
        ///<summary>
        ///	履约状态
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	履约结果
        ///</summary> 
        public string Result { get; set; }
        ///<summary>
        ///	履约编号
        ///</summary> 
        public string Code { get; set; }
        ///<summary>
        ///	经办人
        ///</summary> 
        public string User { get; set; }
        ///<summary>
        ///	履约时间
        ///</summary> 
        public string Time { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
    /// <summary>
    /// 配送信息
    /// </summary>
    public class ShippingInfoData
    {
        public string SubOrderCode { get; set; }

        ///<summary>
        ///	配送状态
        ///</summary> 
        public int? Status { get; set; }

        ///<summary>
        ///	物流单号
        ///</summary> 
        public string LogisticsCompany { get; set; }
        ///<summary>
        ///	物流单号
        ///</summary> 
        public string Code { get; set; }
        
        ///<summary>
        ///	配送流水
        ///</summary> 
        public List<ShippingDetail> ShippingDetailLog { get; set; }

        ///<summary>
        ///	配送结果
        ///</summary> 
        public string Result { get; set; }
        ///<summary>
        ///	配送人
        ///</summary> 
        public string User { get; set; }
        ///<summary>
        ///	配送时间
        ///</summary> 
        public string Time { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
    public class ShippingDetail
    {
        public string Context { get; set; }
        public string Ftime { get; set; }
    }
    /// <summary>
    /// 业务办理结果
    /// </summary>
    public class BusinessInfoData
    {
        public string SubOrderCode { get; set; }
        ///<summary>
        ///	办理状态（1：待录入2：提交待办理 3办理成功 4办理失败）
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	办理结果
        ///</summary> 
        public string Result { get; set; }
        ///<summary>
        ///	业务编号
        ///</summary> 
        public string Code { get; set; }
        ///<summary>
        ///	经办人
        ///</summary> 
        public string User { get; set; }
        ///<summary>
        ///	办理时间
        ///</summary> 
        public string Time { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
    /// <summary>
    /// 施工结果
    /// </summary>
    public class ConstructionInfoData
    {
        public string SubOrderCode { get; set; }
        ///<summary>
        ///	施工状态(1：待施工，2：施工完成 )
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	施工开始时间
        ///</summary> 
        public string StartTime { get; set; }
        ///<summary>
        ///	施工结束时间
        ///</summary> 
        public string EndTime { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
    /// <summary>
    /// 交车结果
    /// </summary>
    public class DeliveryInfoData
    {
        public string SubOrderCode { get; set; }
        ///<summary>
        ///	车架号
        ///</summary> 
        public string VIN { get; set; }
        ///<summary>
        ///	车辆状态
        ///</summary> 
        public int? Status { get; set; }
        /// <summary>
        /// 状态名称
        /// </summary>
        public string SuborderStatusName { get; set; }
        
        ///<summary>
        ///	交车时间
        ///</summary> 
        public string Time { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
    /// <summary>
    /// 自提结果
    /// </summary>
    public class SelfLiftingInfoData
    {
        public string SubOrderCode { get; set; }
        ///<summary>
        ///	自提状态（1：备货中 2： 待自提 3：已自提）
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	经办人
        ///</summary> 
        public string User { get; set; }
        ///<summary>
        ///	自提时间
        ///</summary> 
        public string Time { get; set; }
        ///<summary>
        ///	备注信息
        ///</summary> 
        public string Remark { get; set; }
    }
}
