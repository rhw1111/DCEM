using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
   public class UserDetailRequest:PageBaseRequestModel
    {
        public string id { get; set; }
    }
    /// <summary>
    /// 增减用户积分请求参数
    /// </summary>
    public class UserDeDucationIntegralRequest
    {
        /// <summary>
        /// 用户Id
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// 积分类型
        /// </summary>
        public int? IntegralType { get; set; }
        /// <summary>
        /// 积分增减数量
        /// </summary>
        public int Integral { get; set; } = 0;
    }
}
