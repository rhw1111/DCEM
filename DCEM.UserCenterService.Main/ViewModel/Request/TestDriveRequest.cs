using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    /// <summary>
    /// 试乘试驾查询model
    /// </summary>
    public class TestDriveRequest : PageBaseRequestModel
    {
       
    }


    /// <summary>
    /// 试乘试驾数据model
    /// </summary>
    public class TestDriveViewModel : BaseRequest
    {
        /// <summary>
        /// 主键id
        /// </summary>
        public string mcs_driverecordid { set; get; }

        /// <summary>
        /// 姓名
        /// </summary>
        public string mcs_fullname { set; get; }


        /// <summary>
        /// 手机号
        /// </summary>
        public string mcs_mobilephone { set; get; }


        /// <summary>
        /// 预约车型
        /// </summary>
        public string mcs_carmodel { set; get; }


        /// <summary>
        /// 业务类型 
        /// </summary>
        public string mcs_businesstype { set; get; }


        /// <summary>
        /// 试驾地点
        /// </summary>
        public string mcs_dealerid { set; get; }

        /// <summary>
        /// 预约时间
        /// </summary>
        public DateTime? mcs_ordertime { set; get; }

        /// <summary>
        /// 预约时段
        /// </summary>
        public string mcs_testdrivetime { set; get; }


    }
}
