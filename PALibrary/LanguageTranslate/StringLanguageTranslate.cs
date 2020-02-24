using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Entities;

namespace PALibrary.LanguageTranslate
{
    /// <summary>
    /// 字符串类型的多语言转换扩展方法类
    /// 所有需要多语言的文本必须从该类中获取
    /// </summary>
    public class StringLanguageTranslate
    {

        private static ILanguageTranslateService _languageTranslateService = LanguageTranslateServiceFacotry.Get();

        /// <summary>
        /// 多语言转换需要用到的转换服务
        /// 默认为LanguageTranslateService
        /// </summary>
        public static ILanguageTranslateService LanguageTranslateService
        {
            get { return _languageTranslateService; }
            set { _languageTranslateService = value; }
        }

        /// <summary>
        /// 多语言转换
        /// 如果多语言文件中可以找到对饮文本编号和当前用户语言编号的文本
        /// 则返回找到的文本，否则返回默认文本
        /// </summary>
        /// <param name="code">文本编号</param>
        /// <param name="strDefault">默认文本</param>
        /// <returns></returns>
        public static string Translate(string code, string strDefault)
        {
            //从上下文中获取当前用户信息
            var currentUserInfo = ContextContainer.GetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser);
            return Translate(code, currentUserInfo.GetLcid(), strDefault);
        }


        public static string Translate(string code, int lcid, string strDefault)
        {
            var text = _languageTranslateService.Translate(code, lcid);

            if (text != null)
            {
                return text;
            }
            else
            {
                return strDefault;
            }
        }

    }

    public class LanguageTranslateServiceFacotry : SingletonFactorySelf<ILanguageTranslateService, LanguageTranslateServiceFacotry>
    {

        protected override ILanguageTranslateService RealCreate()
        {
            //throw new Exception();
            IPAWebResourceRepository paWebResourceRepository = PAWebResourceRepositoryFactory.Get();
            IConfigurationService configurationService = ConfigurationServiceFactory.Get();
            LanguageTranslateService languageTranslateService = new LanguageTranslateService(paWebResourceRepository, configurationService);
            return languageTranslateService;
        }
    }
}
