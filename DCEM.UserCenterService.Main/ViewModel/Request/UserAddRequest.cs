using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class UserAddRequest
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public Guid userid { get; set; }
        /// <summary>
        /// 账户
        /// </summary>
        public string account { get; set; }

        public string phone { get; set; }

        /// <summary>
        /// 用户登陆类型
        /// </summary>
        public int? logintype { get; set; }
        /// <summary>
        /// 姓名
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 昵称
        /// </summary>
        public string nickname { get; set; }
        /// <summary>
        /// 性别
        /// </summary>
        public int? gender { get; set; }
        /// <summary>
        /// 身份证
        /// </summary>
        public string mcs_cardid { get; set; }
        /// <summary>
        /// 邮箱
        /// </summary>
        public string mcs_email { get; set; }
        /// <summary>
        /// 生日
        /// </summary>
        public string birthday { get; set; }
        /// <summary>
        /// 婚姻状况
        /// </summary>
        public int? marriagestatus { get; set; }
        /// <summary>
        /// 职业
        /// </summary>

        public string profession { get; set; }
        /// <summary>
        /// 公司
        /// </summary>
        public string company { get; set; }
        /// <summary>
        /// 签名
        /// </summary>
        public string signature { get; set; }
        /// <summary>
        /// 个人说明
        /// </summary>
        public string description { get; set; }

        public UserkeysRequest userkey { get; set; }

        public List<UsersecurityquestionRequest>  quests { get; set; }

    }



}
