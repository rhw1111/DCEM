using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;

namespace MSLibrary.Context.Application
{
    [Injection(InterfaceType = typeof(IAppSystemAuthentication), Scope = InjectionScope.Singleton)]
    public class AppSystemAuthentication : IAppSystemAuthentication
    {
        private IHttpClaimGeneratorRepository _httpClaimGeneratorRepository;
        
        public AppSystemAuthentication(IHttpClaimGeneratorRepository httpClaimGeneratorRepository)
        {
            _httpClaimGeneratorRepository = httpClaimGeneratorRepository;
        }
        public async Task<ClaimsIdentity> Do(HttpContext httpContext, string generatorName)
        {
            var generator = await _httpClaimGeneratorRepository.QueryByName(generatorName);
            if (generator == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundHttpClaimGeneratorByName,
                    DefaultFormatting = "找不到名称为{0}的http声明生成器",
                    ReplaceParameters = new List<object>() { generatorName }
                };

                throw new UtilityException((int)Errors.NotFoundHttpClaimGeneratorByName, fragment);
            }

            return await generator.Generate(httpContext);
        }
    }
}
