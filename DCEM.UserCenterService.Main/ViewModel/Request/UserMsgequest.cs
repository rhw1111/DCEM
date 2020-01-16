using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class UserMsgequest
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public string mcs_user_msgid { get; set; }

        /// <summary>
        /// 消息标题
        /// </summary>
        public string mcs_name { get; set; }

        /// <summary>
        /// C端用户id
        /// </summary>
        public string mcs_user { get; set; }

        /// <summary>
        /// 跳转链接
        /// </summary>
        public string mcs_url { get; set; }

        /// <summary>
        /// 阅读时间
        /// </summary>
        public DateTime? mcs_readdate { get; set; }

        /// <summary>
        /// 导航图片Url
        /// </summary>
        public string mcs_head_imageurl { get; set; }

        /// <summary>
        /// 消息内容
        /// </summary>
        public string mcs_content { get; set; }

        /// <summary>
        /// 删除时间
        /// </summary>
        public DateTime? mcs_deletedate { get; set; }

        /// <summary>
        /// 消息类型(1-短信、2-站内信)
        /// </summary>
        public int? mcs_type { get; set; }

        /// <summary>
        /// 阅读状态（0:未阅读，1:已阅读）
        /// </summary>
        public int? mcs_readstatus { get; set; }

        /// <summary>
        /// 删除状态
        /// </summary>
        public bool? mcs_deletestatus { get; set; }
    }
}
