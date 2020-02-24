using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.LanguageTranslate;

namespace PALibrary
{
    public static class ExceptionExtension
    {
        /// <summary>
        /// 获取基于当前用户语言的错误内容（同步）
        /// </summary>
        /// <param name="exception"></param>
        /// <returns></returns>
        public static string GetCurrentLcidMessageSync(this Exception exception)
        {
            if (exception is UtilityException)
            {
                var userContext = ContextContainer.GetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser);
                return ((UtilityException)exception).Fragment.GetLanguageTextSync(userContext.GetLcid());
            }
            else
            {
                return exception.Message;
            }
        }
    }
}
