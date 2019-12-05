using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
   public  class ShippingaddressAddRequest
    {
        public string mcs_shippingaddressid { get; set; }
        /// <summary>
        /// 用户
        /// </summary>
        public Guid? userid { get; set; }
        /// <summary>
        /// 地区
        /// </summary>
        public Guid? mcs_area { get; set; }
        /// <summary>
        /// 城市
        /// </summary>
        public Guid? mcs_city { get; set; }
        /// <summary>
        /// 省份
        /// </summary>
        public Guid? mcs_province { get; set; }
        /// <summary>
        /// 是否默认
        /// </summary>
        public int? mcs_isdefault { get; set; }
        /// <summary>
        /// 详细地址
        /// </summary>

        public string mcs_address { get; set; }
        /// <summary>
        /// 电话
        /// </summary>
        public string mcs_phone { get; set; } 

        public string mcs_name { get; set; }
    }
}
