using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Linq;
using MSLibrary;
using MSLibrary.Context.ClaimContextGeneratorServices;
using MSLibrary.LanguageTranslate;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main.Configuration;

namespace DCEM.Main.Context.ClaimContextGeneratorServices
{
    /// <summary>
    /// 使用默认信息的声明上下文生成服务
    /// </summary>
    [Injection(InterfaceType = typeof(ClaimContextGeneratorServiceForDefault), Scope = InjectionScope.Singleton)]
    public class ClaimContextGeneratorServiceForDefault : IClaimContextGeneratorService
    {
        private ISystemConfigurationRepository _systemConfigurationRepository;

        public ClaimContextGeneratorServiceForDefault(ISystemConfigurationRepository systemConfigurationRepository)
        {
            _systemConfigurationRepository = systemConfigurationRepository;
        }
        public void Do(IEnumerable<Claim> claims)
        {
            var defaultContextInfoConfig= _systemConfigurationRepository.QueryByName(SystemConfigurationNames.DefaultContextInfo);

            if (defaultContextInfoConfig==null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundSystemConfigurationByName,
                    DefaultFormatting = "找不到名称为{0}的系统配置",
                    ReplaceParameters = new List<object>() { SystemConfigurationNames.DefaultContextInfo}
                };
                throw new UtilityException((int)Errors.NotFoundSystemConfigurationByName, fragment);
            }

            var contextInfo= defaultContextInfoConfig.GetConfigurationValue<DefaultContextInfo>();
            if (contextInfo==null || contextInfo.UserID==Guid.Empty)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.SystemConfigurationConvertTypeFail,
                    DefaultFormatting = "系统配置{0}转成类型{1}失败，配置内容为{2}",
                    ReplaceParameters = new List<object>() { SystemConfigurationNames.DefaultContextInfo,typeof(DefaultContextInfo).FullName, defaultContextInfoConfig.Content }
                };
                throw new UtilityException((int)Errors.SystemConfigurationConvertTypeFail, fragment);
                
            }

            ContextContainer.SetValue<Guid>(ContextExtensionTypes.CurrentUserID, contextInfo.UserID);
            ContextContainer.SetValue<int>(ContextTypes.CurrentUserLcid, contextInfo.Lcid);
            ContextContainer.SetValue<int>(ContextTypes.CurrentUserTimezoneOffset, contextInfo.TimezoneOffset);
            ContextContainer.SetValue<Dictionary<string, object>>(ContextTypes.Dictionary, new Dictionary<string, object>());

        }
    }
}
