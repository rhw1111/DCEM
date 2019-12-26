using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using Newtonsoft.Json.Linq;
namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    /// <summary>
    /// C端用户中心
    /// </summary>
    public interface ICUserService
    {
        /// <summary>
        /// 用户列表查询
        /// </summary>
        /// <param name="accountRequest"></param>
        /// <returns></returns>
        Task<QueryResult<JObject>> QueryUserList(int pageindex, string search);

    }
}
