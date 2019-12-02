using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.Common
{
    public class UserEnum
    {
        public enum UserMessEnum
        {
            //1注册；2登陆；3忘记密码；4修改密码
            注册 = 1,
            登陆 = 2,
            忘记密码 = 3,
            修改密码 = 4
        }

        public enum UserLogintypeEnum
        {
            手机 = 1,
            邮箱 = 2,
            身份证 = 3
        }

        public enum LoginlogEnum
        {
            成功=1,
            失败=2
        }
    }
}
