using System.Threading.Tasks;
using System.Threading;

using System;
using System.Globalization;
using System.Text.RegularExpressions;

using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;
using DCEM.Main.Configuration;
using DCEM.Main.Entities;
using MSLibrary;
using DCEM.Main.Context;

namespace DCEM.Web.Filters
{
    /// <summary>
    /// 权限验证token解析
    /// </summary>
    public class AuthFilter : ActionFilterAttribute
    {
        public string _baseUrl = "";
        //执行之前处理
        public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            #region 通过请求token获取当前用户登录信息
            var coreConfiguration = ConfigurationContainer.Get<BaseConfiguration>(ConfigurationNames.Application);
            if (coreConfiguration.DyCRMSetting != null)
            {
                var dyCRMSetting = coreConfiguration.DyCRMSetting;
                _baseUrl = $"{dyCRMSetting.CrmUrl}/api/data/v{dyCRMSetting.CrmApiVersion}";
            }
            IHttpContextAccessor _accessor = new HttpContextAccessor();
            var token = _accessor.HttpContext.Request.Headers["token"].ToString();
            if (!string.IsNullOrEmpty(token))
            {
                var helper = DIContainerContainer.Get<AdfsEndpointRepositoryHelper>();
                var endpoint = await helper.QueryByName("Main");

                var claims = await endpoint.ValidateJWT(token, new string[] { _baseUrl });
                var userName = claims.FindFirst(System.Security.Claims.ClaimTypes.Name).Value;
                if (!string.IsNullOrEmpty(userName))
                {
                    #region 缓存用户登录信息
                    var logioninfo = await helper.GetLoginInfo(userName, token);
                    if (logioninfo != null)
                    {
                        ContextContainer.SetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo, logioninfo);
                    }
                    #endregion
                }
            }
            else
            {
                //throw new Exception("接口鉴权失败");
            }
            #endregion
            await next();
        }

        //执行之后处理
        public override async Task OnResultExecutionAsync(ResultExecutingContext context, ResultExecutionDelegate next)
        {
            await next();
        }
    }
}
