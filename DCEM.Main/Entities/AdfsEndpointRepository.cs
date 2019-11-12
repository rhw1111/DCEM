using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.Services;
using Microsoft.AspNetCore.Http;
using MSLibrary.Cache;
using MSLibrary.DI;

namespace DCEM.Main.Entities
{
    [Injection(InterfaceType = typeof(IAdfsEndpointRepository), Scope = InjectionScope.Singleton)]
    public class AdfsEndpointRepository : IAdfsEndpointRepository
    {
        /// <summary>
        /// 缓存时间
        /// -1表示永久有效
        /// </summary>
        public static int CacheTimeout { get; set; } = -1;
        private Dictionary<string, AdfsEndpoint> _datas = null;
        private IAuthService _authService = new AuthService();
        private static HashLinkedCache<string, CacheTimeContainer<UserInfo>> _loginInfo = new HashLinkedCache<string, CacheTimeContainer<UserInfo>>() { Length = 200 };

        public async Task<string> GetAuthToken(string username, string password)
        {
            return await _authService.GetAuthToken(username, password);
        }

        public async Task<UserInfo> GetLoginInfo(string username, string token)
        {
            CacheTimeContainer<UserInfo> userInfoItem = _loginInfo.GetValue(token);
            if (userInfoItem == null || userInfoItem.Expire())
            {
                var loginModel = await _authService.GetLoginInfo(username);
                userInfoItem = new CacheTimeContainer<UserInfo>(loginModel, CacheTimeout);
                _loginInfo.SetValue(token, userInfoItem);
            }
            return userInfoItem.Value;
        }

        public async Task<AdfsEndpoint> QueryByName(string name)
        {
            if (_datas==null)
            {
                _datas = await getData();
            }

            return _datas[name];
        }

        private async Task<Dictionary<string, AdfsEndpoint>> getData()
        {       
            return await _authService.getData();
        }

        public async Task<UserInfo> GetLoginInfoByToken() 
        {
            UserInfo result = new UserInfo();
            IHttpContextAccessor _accessor = new HttpContextAccessor();
            var token = _accessor.HttpContext.Request.Headers["token"].ToString();
            if (!string.IsNullOrEmpty(token))
            {
                var value = _loginInfo.GetValue(token);
                if (value != null)
                    {
                        result = value.Value;
                    }
            }
            return await Task.FromResult<UserInfo>(result);
        }
    }
}
