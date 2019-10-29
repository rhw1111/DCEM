using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class ServiceproxyAddOrUpdateRequest
    {
        /// <summary>
        /// 全名
        /// </summary>
        public string fullname { get; set; }
        /// <summary>
        /// 车牌
        /// </summary>
        public string vehplate { get; set; }
        /// <summary>
        /// 手机
        /// </summary>
        public string mobilephone { get; set; }
        /// <summary>
        /// 送修人
        /// </summary>
        public string shuttlename { get; set; }
        /// <summary>
        /// 送修人手机
        /// </summary>
        public string shuttlephone { get; set; }
        /// <summary>
        /// 进店电量
        /// </summary>
        public string inpower { get; set; }
        /// <summary>
        /// 进店油量
        /// </summary>
        public string oilquantity { get; set; }
        /// <summary>
        /// 进店里程
        /// </summary>
        public string mileage { get; set; }
        /// <summary>
        /// 到店时间
        /// </summary>
        public string arrivalon { get; set; }
        /// <summary>
        /// 客户描述
        /// </summary>
        public string customercomment { get; set; }


    }
}
