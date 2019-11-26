using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace DCEM.Main.RemoteService
{
    public interface IChangePasswordService
    {
        Task<QueryResult<CrmEntity>> UpdatePwd(ChangePasswordModel model);
    }

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
    }
}
