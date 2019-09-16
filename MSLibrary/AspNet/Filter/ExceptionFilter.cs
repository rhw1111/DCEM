using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Logger;
using MSLibrary.AspNet.Filter.Application;
using MSLibrary.Context.Application;

namespace MSLibrary.AspNet.Filter
{
    /// <summary>
    /// 异常处理过滤器
    /// 将错误转换成ErrorMessage的json格式返回
    /// </summary>
    [Injection(InterfaceType = typeof(ExceptionFilter), Scope = InjectionScope.Transient)]
    public class ExceptionFilter : ExceptionFilterAttribute
    {
        private string _categoryName;
        private IAppExceptionContextLogConvert _appExceptionContextLogConvert;

        public ExceptionFilter(string categoryName, IAppExceptionContextLogConvert appExceptionContextLogConvert) :base()
        {
            _categoryName = categoryName;
            _appExceptionContextLogConvert = appExceptionContextLogConvert;
        }

        public override async Task OnExceptionAsync(ExceptionContext context)
        {
            if (context.Exception != null)
            {
                if (context.HttpContext.Items.TryGetValue("AuthorizeResult", out object objResult))
                {
                    try
                    {
                        ((IAppUserAuthorizeResult)objResult).Execute();
                    }
                    catch
                    {

                    }
                }

                if (context.Exception is UtilityException)
                {
                    var utilityException = (UtilityException)context.Exception;

                    ErrorMessage errorMessage = new ErrorMessage()
                    {
                        Code = utilityException.Code,
                        Message =await utilityException.GetCurrentLcidMessage()
                    };
                    context.Result = new JsonContentResult<ErrorMessage>(StatusCodes.Status500InternalServerError, errorMessage);
                }
                else
                {
                    ErrorMessage errorMessage = new ErrorMessage()
                    {
                        Code = -1,
                        Message = string.Format(StringLanguageTranslate.Translate(TextCodes.InnerError, "系统内部错误，请查看系统日志"))
                    };
                    context.Result = new JsonContentResult<ErrorMessage>(StatusCodes.Status500InternalServerError, errorMessage);
                }

                //加到日志中


                var logObj = await _appExceptionContextLogConvert.Do(context);


                LoggerHelper.LogError(_categoryName, logObj);


                //logger.Log(LogLevel.Error,new EventId(),logObj, context.Exception,)

                //logger.LogError($"Action {context.ActionDescriptor.DisplayName} error,\nmessage:{context.Exception.Message},\nstacktrace:{context.Exception.StackTrace}");
            }
        }



    }
}
