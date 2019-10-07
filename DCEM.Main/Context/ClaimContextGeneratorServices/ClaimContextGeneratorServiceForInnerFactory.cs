using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Context.ClaimContextGeneratorServices;

namespace DCEM.Main.Context.ClaimContextGeneratorServices
{
    [Injection(InterfaceType = typeof(ClaimContextGeneratorServiceForInnerFactory), Scope = InjectionScope.Singleton)]
    public class ClaimContextGeneratorServiceForInnerFactory : IFactory<IClaimContextGeneratorService>
    {
        private ClaimContextGeneratorServiceForInner _claimContextGeneratorServiceForInner;

        public ClaimContextGeneratorServiceForInnerFactory(ClaimContextGeneratorServiceForInner claimContextGeneratorServiceForInner)
        {
            _claimContextGeneratorServiceForInner = claimContextGeneratorServiceForInner;
        }
        public IClaimContextGeneratorService Create()
        {
            return _claimContextGeneratorServiceForInner;
        }
    }
}
