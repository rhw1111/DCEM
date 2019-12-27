//==============================================
//文件名：InstallationorderRequest.cs
//功能描述：安装单接口实体入参实体类
//创建时间：2019年11月21日 09:59:38;作者：张俊秋
//==============================================
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    /// <summary>
    /// 安装单列表查询接口入参实体类
    /// </summary>
    public class InstallationorderRequest: PageBaseRequestModel
    {
        /// <summary>
        /// 查询关键字
        /// </summary>
        public string SearchKey { set; get; }
        /// <summary>
        /// 厅店ID
        /// </summary>
        public string mcs_dealerid { set; get; }
        /// <summary>
        /// 安装状态
        /// </summary>
        public int? mcs_installationstatus { set; get; }
    }

    /// <summary>
    /// 安装单详情查询接口入参实体类
    /// </summary>
    public class InstallationorderDetailRequest 
    {
        public string Guid { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
    }


    /// <summary>
    /// 安装单新增、修改model
    /// </summary>
    public class InstallationorderMetadataModel
    {
        /// <summary>
        /// 主键
        /// </summary>
        public string mcs_installationorderid { set; get; }

        /// <summary>
        /// 勘测单id
        /// </summary>
        public string mcs_surveyorderid { set; get; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_username { set; get; }
        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_userphone { set; get; }
       
        /// <summary>
        /// 邮箱
        /// </summary>
        public string mcs_email { set; get; }
        /// <summary>
        /// 车型
        /// </summary>
        public string mcs_carmodelid { set; get; }
        /// <summary>
        /// 厅店
        /// </summary>
        public string mcs_dealerid { set; get; }
        /// <summary>
        /// 销售顾问
        /// </summary>
        public string mcs_salesconsultant { set; get; }

        /// <summary>
        /// 省
        /// </summary>
        public string mcs_province { set; get; }
        /// <summary>
        /// 市
        /// </summary>
        public string mcs_city { set; get; }
        /// <summary>
        /// 区
        /// </summary>
        public string mcs_area { set; get; }
        /// <summary>
        /// 安装地址
        /// </summary>
        public string mcs_installationaddress { set; get; }
        /// <summary>
        /// 详细地址
        /// </summary>
        public string mcs_detailaddress { set; get; }
        /// <summary>
        /// 充电桩型号
        /// </summary>
        public string mcs_chargingpilemodel { set; get; }
        /// <summary>
        /// 小区名称
        /// </summary>
        public string mcs_communityname { set; get; }
        /// <summary>
        /// 套餐金额
        /// </summary>
        public string mcs_price { set; get; }

        ///// <summary>
        ///// 物业态度
        ///// </summary>
        //public string mcs_propertyattitude { set; get; }
        ///// <summary>
        ///// 销售单号
        ///// </summary>
        //public string mcs_salesorder { set; get; }
        ///// <summary>
        ///// vin
        ///// </summary>
        //public string mcs_vin { set; get; }
        ///// <summary>
        ///// 动力类型
        ///// </summary>
        //public string mcs_powertypeid { set; get; }
        /// <summary>
        /// 结算价格
        /// </summary>
        public string mcs_settlementprice { set; get; }
        ///// <summary>
        ///// 安装服务商
        ///// </summary>
        //public string mcs_installationproviderid { set; get; }
        ///// <summary>
        ///// 安装服务商联系人
        ///// </summary>
        //public string mcs_contact { set; get; }
        ///// <summary>
        ///// 安装服务电话
        ///// </summary>
        //public string mcs_installationproviderphone { set; get; }
        ///// <summary>
        ///// 安装服务时间
        ///// </summary>
        //public DateTime? mcs_appointmenttime { set; get; }
        ///// <summary>
        ///// 安装交付工程师
        ///// </summary>
        //public string mcs_installationengineerid { set; get; }
        ///// <summary>
        ///// 安装交付工程师电话
        ///// </summary>
        //public string mcs_installationengineerphone { set; get; }


    }

}
