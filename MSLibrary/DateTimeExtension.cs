using System;
using System.Collections.Generic;
using System.Text;

namespace MSLibrary
{
    /// <summary>
    /// 时间的扩展方法
    /// </summary>
    public static class DateTimeExtension
    {
        public static DateTime ToCurrentUserTimeZone(this DateTime time)
        {
            //获取当前用户的时区
            var timeZone= ContextContainer.GetValue<int>(ContextTypes.CurrentUserTimezoneOffset);
            return time.AddHours(timeZone);
        }
    }
}
