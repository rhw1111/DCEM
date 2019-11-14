using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Logger;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.Context.Application;

namespace MSLibrary.AspNet.Middleware
{
    /// <summary>
    /// 实现对错误的包裹
    /// </summary>
    public class ExceptionWrapper
    {
        private RequestDelegate _nextMiddleware;
        private string _categoryName;
        private IAppExceptionHttpContextLogConvert _appExceptionHttpContextLogConvert;

        public ExceptionWrapper(RequestDelegate nextMiddleware,string categoryName, IAppExceptionHttpContextLogConvert appExceptionHttpContextLogConvert) :base()
        {
            _nextMiddleware = nextMiddleware;
            _categoryName = categoryName;
            _appExceptionHttpContextLogConvert = appExceptionHttpContextLogConvert;
        }

        public async Task Invoke(HttpContext context)
        {
            //context.Features.Get<IEndpointFeature>
            try
            {
                await _nextMiddleware.Invoke(context);
            }
            catch(Exception ex)
            {
                if (ex is UtilityException)
                {
                    var utilityException = (UtilityException)ex;

                    ErrorMessage errorMessage = new ErrorMessage()
                    {
                        Code = utilityException.Code,
                        Message =await utilityException.GetCurrentLcidMessage()
                    };
                    await context.Response.WriteJson(StatusCodes.Status500InternalServerError, errorMessage);
                }
                else
                {
                    ErrorMessage errorMessage = new ErrorMessage()
                    {
                        Code = -1,
                        Message = string.Format(StringLanguageTranslate.Translate(TextCodes.InnerError, "系统内部错误，请查看系统日志"))
                    };
                    await context.Response.WriteJson(StatusCodes.Status500InternalServerError, errorMessage);
                }


                //从Http上下文中获取上下文生成结果
                if (context.Items.TryGetValue("AuthorizeResult", out object objResult))
                {
                    try
                    {
                        ((IAppUserAuthorizeResult)objResult).Execute();
                    }
                    catch
                    {

                    }
                }

                //将异常存储在上下文的Item中
                context.Items.Add("ExecuteException", ex);

                //加到日志中
                var logObj=await _appExceptionHttpContextLogConvert.Convert(context);

                    LoggerHelper.LogError( _categoryName, logObj);
                
                //var logger = _loggerFactory.CreateLogger(_categoryName);
                //logger.LogError($"Unhandle Error,\nmessage:{ex.Message},\nstacktrace:{ex.StackTrace}");
            }

            
        }

    }
}
