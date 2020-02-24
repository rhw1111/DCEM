using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Entities;
using PALibrary.Cache;

namespace PALibrary.LanguageTranslate
{
    /// <summary>
    /// 默认实现多语言转换接口
    /// 此实现采用读取WebResource的Json文本资源的方式实现
    /// json格式为
    /// {
    ///    "code1":
    ///    {
    ///         "1033":"XXXXXXXXX",
    ///         "2052":"XXXXXXXXX"
    ///    },
    ///   "code2":
    ///   {
    ///         "1033":"XXXXXXXXX",
    ///         "2052":"XXXXXXXXX"
    ///   }
    /// }
    /// </summary>
    public class LanguageTranslateService : ILanguageTranslateService
    {
        private static Dictionary<string, Dictionary<int, string>> _textList = null;
  

        /// <summary>
        /// 用来存放Json文件的webresource名称
        /// 需要在初始化时配置
        /// </summary>
        public static string JsonWebResourceName
        {
            get;set;
        }


        public static VersionCacheController CacheController
        {
            get;
        } = new VersionCacheController();


        private IPAWebResourceRepository _paWebResourceRepository;
        private IConfigurationService _configurationService;

        public LanguageTranslateService(IPAWebResourceRepository paWebResourceRepository, IConfigurationService configurationService)
        {
            _paWebResourceRepository = paWebResourceRepository;
            _configurationService = configurationService;
        }

        private void loadResource()
        {
            var jsonResource=_paWebResourceRepository.QueryByName(JsonWebResourceName);
            if (jsonResource==null)
            {
                throw new UtilityException((int)Errors.NotFoundPAWebResourceByName, string.Format("找不到名称为{0}的PAWebResource",JsonWebResourceName));
            }
            _textList=jsonResource.ConvertFromJson<Dictionary<string, Dictionary<int, string>>>();
        }

        public string Translate(string code, int lcid)
        {
            string text = null;


            CacheController.Execute(() =>
             {
                 return _textList == null;
             },
             ()=>
             {
                 var contextDict = ContextContainer.GetValue<Dictionary<string, object>>(ContextTypes.Dictionary);
                 if (!contextDict.ContainsKey(ContextDictionaryKeys.LanguageTranslateFileLoad))
                 {
                     try
                     {
                         contextDict[ContextDictionaryKeys.LanguageTranslateFileLoad] = true;
                         loadResource();
                     }
                     finally
                     {
                         contextDict.Remove(ContextDictionaryKeys.LanguageTranslateFileLoad);
                     }
                 }
             }
             );

            if (_textList.TryGetValue(code, out Dictionary<int, string> lcidList))
            {
                if (lcidList.TryGetValue(lcid, out text))
                {
                    return text;
                }
            }

            return text;
        }


    }
}
