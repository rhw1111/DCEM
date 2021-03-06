﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
   public  class UserkeysRequest
    {    /// <summary>
         /// 密码
         /// </summary>
        public string pwd { get; set; }
        /// <summary>
        /// 密匙类型 1：密码，2：手势，3：指纹，4：PIN，5：声音，6：人脸识别
        /// </summary>
        public int keytype { get; set; }
        /// <summary>
        /// 密匙状态  1：未开启，2：已开启，3：已过期，4：已作废
        /// </summary>
        public int status { get; set; }
        /// <summary>
        /// 认证类型 1：数字信号认证，2：模拟信号认证
        /// </summary>
        public int certificationtype { get; set; }
    }
}
