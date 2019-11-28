using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.Main.Entities
{
    public class ChangePasswordModel
    {
        /// <summary>
        /// 旧密码
        /// </summary>
        public string OldPwd { set; get; }

        /// <summary>
        /// 新密码
        /// </summary>
        public string FirstNewPwd { set; get; }

        /// <summary>
        /// 再次输入的新密码
        /// </summary>
        public string SecondNewPwd { set; get; }


        /// <summary>
        /// 用户名
        /// </summary>
        public string systemUserName { set; get; }
    }
}
