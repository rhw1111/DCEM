using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Linq;
using MSLibrary;
using MSLibrary.Context.ClaimContextGeneratorServices;
using MSLibrary.LanguageTranslate;
using MSLibrary.DI;

namespace DCEM.Main.Context.ClaimContextGeneratorServices
{
    /// <summary>
    /// 提供给内部服务使用的声明上下文生成服务
    /// </summary>
    [Injection(InterfaceType = typeof(ClaimContextGeneratorServiceForInner), Scope = InjectionScope.Singleton)]
    public class ClaimContextGeneratorServiceForInner : IClaimContextGeneratorService
    {
        public void Do(IEnumerable<Claim> claims)
        {
            //获取用户ID
            var strUserID = (from item in claims
                            where item.Type == ClaimsTypes.UserID
                            select item.Value).FirstOrDefault();

            if (!string.IsNullOrEmpty(strUserID))
            {
                ContextContainer.SetValue<Guid>(ContextExtensionTypes.CurrentUserID, Guid.Parse(strUserID));
            }
            else
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundTypeInClaims,
                    DefaultFormatting = "找不到类型为{0}的声明，发生位置：{1}",
                    ReplaceParameters = new List<object>() { ContextExtensionTypes.CurrentUserID, $"{this.GetType().FullName}.Do" }
                };
                throw new UtilityException((int)Errors.NotFoundTypeInClaims, fragment);
            }

            //获取Lcid
            var strLcid = (from item in claims
                             where item.Type == ClaimsTypes.Lcid
                             select item.Value).FirstOrDefault();

            if (!string.IsNullOrEmpty(strLcid))
            {
                ContextContainer.SetValue<int>(ContextTypes.CurrentUserLcid, Int32.Parse(strLcid));
            }
            else
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundTypeInClaims,
                    DefaultFormatting = "找不到类型为{0}的声明，发生位置：{1}",
                    ReplaceParameters = new List<object>() { ContextTypes.CurrentUserLcid, $"{this.GetType().FullName}.Do" }
                };
                throw new UtilityException((int)Errors.NotFoundTypeInClaims, fragment);
            }

            //获取TimezoneOffset
            var strTO = (from item in claims
                           where item.Type == ClaimsTypes.TimezoneOffset
                           select item.Value).FirstOrDefault();

            if (!string.IsNullOrEmpty(strLcid))
            {
                ContextContainer.SetValue<int>(ContextTypes.CurrentUserTimezoneOffset, Int32.Parse(strTO));
            }
            else
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundTypeInClaims,
                    DefaultFormatting = "找不到类型为{0}的声明，发生位置：{1}",
                    ReplaceParameters = new List<object>() { ContextTypes.CurrentUserTimezoneOffset, $"{this.GetType().FullName}.Do" }
                };
                throw new UtilityException((int)Errors.NotFoundTypeInClaims, fragment);
            }

            //增加字典上下文
            ContextContainer.SetValue<Dictionary<string, object>>(ContextTypes.Dictionary, new Dictionary<string, object>());

        }
    }
}
