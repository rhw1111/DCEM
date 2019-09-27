using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using MSLibrary.Context.ClaimContextGeneratorServices;

namespace DCEM.Main.Context.ClaimContextGeneratorServices
{
    /// <summary>
    /// 提供给内部服务使用的声明上下文生成服务
    /// </summary>
    public class ClaimContextGeneratorServiceForInner : IClaimContextGeneratorService
    {
        public void Do(IEnumerable<Claim> claims)
        {
            throw new NotImplementedException();
        }
    }
}
