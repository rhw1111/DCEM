using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.LanguageTranslate;
using MSLibrary.DI;
using MSLibrary;
using MSLibrary.SystemToken;

namespace DCEM.AuthorizationService.Main.SystemToken.Application
{
    [Injection(InterfaceType = typeof(IAppGetCommonToken), Scope = InjectionScope.Singleton)]
    public class AppGetCommonToken : IAppGetCommonToken
    {
        private readonly ISystemLoginEndpointRepository _systemLoginEndpointRepository;

        public AppGetCommonToken(ISystemLoginEndpointRepository systemLoginEndpointRepository)
        {
            _systemLoginEndpointRepository = systemLoginEndpointRepository;
        }
        public async Task<string> Do(string systemLoginEndpointName, string authorizationEndpointName, string userName, string password)
        {
            var systemLoginEndpoint= await _systemLoginEndpointRepository.QueryByName(systemLoginEndpointName);
            if (systemLoginEndpoint==null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundSystemLoginEndpointByName,
                    DefaultFormatting = "找不到名称为{0}的系统登录终结点",
                    ReplaceParameters = new List<object>() { systemLoginEndpointName }
                };

                throw new UtilityException((int)Errors.NotFoundSystemLoginEndpointByName, fragment);
            }

            var result= await systemLoginEndpoint.GetCommonToken(authorizationEndpointName, userName, password);
            return result;
        }
    }
}
