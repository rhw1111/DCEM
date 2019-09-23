using MSLibrary.SystemToken;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.AuthorizationService.Main.SystemToken.Application
{
    /// <summary>
    /// 应用层获取通用令牌
    /// 根据指定的系统登陆终结点名称和验证终结点名称进行操作
    /// 如果验证终结点是可以直接获取令牌，则返回重定向回接入方系统的url，此url的commontoken查询字符串为令牌的JWT字符串
    /// 如果验证终结点不能直接获取令牌，则返回重定向到第三方验证系统登录的url
    /// </summary>
    public interface IAppGetCommonToken
    {
        /// <summary>
        /// 执行
        /// </summary>
        /// <param name="systemLoginEndpointName">系统登录终结点名称</param>
        /// <param name="authorizationEndpointName">验证终结点名称</param>
        /// <param name="userName">接入系统的账号</param>
        /// <param name="password">接入系统的密码</param>
        /// <returns></returns>
        Task<string> Do(string systemLoginEndpointName, string authorizationEndpointName, string userName, string password);
    }
}
