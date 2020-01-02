 

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    using System;
    using System.Collections.Generic;
    using MSLibrary.Xrm;

    /// <summary>
    /// 用户登陆请求
    /// </summary>
    public class UserLoginRequest
    {
        /// <summary>
        /// 账户
        /// </summary>
        public string account { get; set; }

        /// <summary>
        /// 登陆类型 1：手机号，2：邮箱，3：身份证
        /// </summary>
        public int logintype { get; set; }

        public string ip { get; set; }

        /// <summary>
        /// 验证码
        /// </summary>
        public string valcode { get; set; }
        /// <summary>
        /// 2 登陆；5注册
        /// </summary>
        public string type { get; set; }
        /// <summary>
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

         
        /// <summary>
        /// 安全问题
        /// </summary>
        public List<UsersecurityquestionRequest> quests { get; set; }
    }



    public class UserIntegralRequest
    {
        /// <summary>
        /// 账户
        /// </summary>
        public string account { get; set; }

        /// <summary>
        /// 登陆类型 1：手机号，2：邮箱，3：身份证
        /// </summary>
        public int logintype { get; set; }

        /// <summary>
        /// 积分充值类型
        /// </summary>
        public string key { get; set; }

    }

}
