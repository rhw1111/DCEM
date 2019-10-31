/*
    文件名：AppointmentInfoAddOrEditRequest.cs
    功能描述：预约单新增编辑请求参数类  
    创建时间：2019年10月30日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class AppointmentInfoAddOrEditRequest
    {
        /// <summary>
        /// 操作编码  1、新增  2、修改
        /// </summary>
        public int actioncode { get; set; }
        public AppointmentInfo appointmentinfo { get; set; }
    }

    /// <summary>
    /// 预约单实体类
    /// </summary>
    public class AppointmentInfo 
    {
        /// <summary>
        /// 预约单记录ID
        /// </summary>
        public Guid? mcs_appointmentinfoid { get; set; }

        /// <summary>
        /// VIN码关联实体ID
        /// </summary>
        public Guid? mcs_customerid { get; set; }

        /// <summary>
        /// 车主
        /// </summary>
        public string mcs_customername { get; set; }

        /// <summary>
        /// 车牌
        /// </summary>
        public string mcs_carplate { get; set; }

        /// <summary>
        /// 车型
        /// </summary>
        public Guid? mcs_cartype { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_customerphone { get; set; }

        /// <summary>
        /// 客户标签
        /// </summary>
        public string mcs_tag { get; set; }

        /// <summary>
        /// 预约服务类型
        /// </summary>
        public int? mcs_ordertype { get; set; }

        /// <summary>
        /// 预约日期
        /// </summary>
        public DateTime? mcs_appointmentat { get; set; }

        /// <summary>
        /// 预约时段
        /// </summary>
        public Guid? mcs_appointmentconfigid { get; set; }

        /// <summary>
        /// 可预约数量
        /// </summary>
        public int? mcs_surplusnum { get; set; }

        /// <summary>
        /// 客户要求
        /// </summary>
        public string mcs_customercomment { get; set; }

        /// <summary>
        /// 问题描述
        /// </summary>
        public string mcs_appointmendescript { get; set; }

        /// <summary>
        /// 取消原因
        /// </summary>
        public int? mcs_cancelreasonnew { get; set; }

        /// <summary>
        /// 取消描述
        /// </summary>
        public string mcs_canceldes { get; set; }

        /// <summary>
        /// 预约状态
        /// </summary>
        public int? mcs_status { get; set; }

        /// <summary>
        /// 预约厅店
        /// </summary>
        public Guid? mcs_dealerid { get; set; }

        /// <summary>
        /// 服务顾问
        /// </summary>
        public Guid? mcs_serviceadvisorid { get; set; }

    }
}
