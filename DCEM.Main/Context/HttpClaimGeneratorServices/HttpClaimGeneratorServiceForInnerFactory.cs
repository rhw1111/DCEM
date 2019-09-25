using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Context.HttpClaimGeneratorServices;

namespace DCEM.Main.Context.HttpClaimGeneratorServices
{
    [Injection(InterfaceType = typeof(HttpClaimGeneratorServiceForInnerFactory), Scope = InjectionScope.Singleton)]
    public class HttpClaimGeneratorServiceForInnerFactory : IFactory<IHttpClaimGeneratorService>
    {
        private HttpClaimGeneratorServiceForInner _httpClaimGeneratorServiceForInner;

        public HttpClaimGeneratorServiceForInnerFactory(HttpClaimGeneratorServiceForInner httpClaimGeneratorServiceForInner)
        {
            _httpClaimGeneratorServiceForInner = httpClaimGeneratorServiceForInner;
        }
        public IHttpClaimGeneratorService Create()
        {
            return _httpClaimGeneratorServiceForInner;
        }
    }
}
