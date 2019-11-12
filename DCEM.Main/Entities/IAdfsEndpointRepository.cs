using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    public interface IAdfsEndpointRepository
    {
        Task<AdfsEndpoint> QueryByName(string name);
        /// <summary>
        /// 获取token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        Task<string> GetAuthToken(string username, string password);
        /// <summary>
        /// 获取登录信息
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        Task<UserInfo> GetLoginInfo(string username, string token);
        /// <summary>
        /// 通过token获取登录信息
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        Task<UserInfo> GetLoginInfoByToken();
    }
}
