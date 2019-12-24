//==============================================
//文件名：SurveyorderListRequest.cs
//功能描述：勘测单列表接口查询条件实体
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    /// <summary>
    /// 勘测单列表接口入参实体类
    /// </summary>
    public class SurveyorderListRequest: PageBaseRequestModel
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
        /// 勘测状态
        /// </summary>
        public int? mcs_surveystatus { set; get; }
    }
    /// <summary>
    /// 勘测单详情接口入参实体类
    /// </summary>
    public class SurveyorderDetailRequest { 
        public string Guid { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
    }


    /// <summary>
    /// 勘测单新增、修改model
    /// </summary>
    public class SurveyorderMetadataModel
    {
        /// <summary>
        /// 主键
        /// </summary>
        public string mcs_surveyorderid { set; get; }

        /// <summary>
        /// 勘测单类型
        /// </summary>
        public int? mcs_surveyordertype { set; get; }

        /// <summary>
        /// 销售机会
        /// </summary>
        public string mcs_accountid { set; get; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_username { set; get; }
        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_userphone { set; get; }
        /// <summary>
        /// 身份证
        /// </summary>
        public string mcs_idcard { set; get; }
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
        public string mcs_dealer { set; get; }
        /// <summary>
        /// 销售顾问
        /// </summary>
        public string mcs_salesconsultant { set; get; }
        /// <summary>
        /// 联系人姓名
        /// </summary>
        public string mcs_contactname { set; get; }
        /// <summary>
        /// 联系电话
        /// </summary>
        public string mcs_contactphone { set; get; }
        /// <summary>
        /// 联系邮箱
        /// </summary>
        public string mcs_contactemail { set; get; }
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
        /// 住宅性质
        /// </summary>
        public int? mcs_residentialnature { set; get; }
        /// <summary>
        /// 套餐金额
        /// </summary>
        public decimal? mcs_price { set; get; }
        /// <summary>
        /// 车位情况
        /// </summary>
        public int? mcs_parkingspace { set; get; }
        /// <summary>
        /// 备注
        /// </summary>
        public string mcs_remark { set; get; }
        /// <summary>
        /// 住宅类型
        /// </summary>
        public int? mcs_residentialtype { set; get; }


    }

}
