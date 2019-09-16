using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Logger;
using MSLibrary.AspNet.Middleware.Application;
using MSLibrary.Context.Application;

namespace MSLibrary.AspNet.Middleware
{
    /// <summary>
    /// 实现DI容器的包裹
    /// 同时实现日志的记录
    /// </summary>
    public class DIWrapper
    {
        private RequestDelegate _nextMiddleware;
        private string _name;
        private string _categoryName;
        ILoggerFactory _loggerFactory;
        private IAppHttpContextLogConvert _appHttpContextLogConvert;
        private IAppGetLogExcludePaths _appGetLogExcludePaths;
        private IAppGetOutputStreamReplaceExcludePaths _appGetOutputStreamReplaceExcludePaths;

        /// <summary>
        /// 传入指定上下文容器名称作为DI上下文容器的名称
        /// </summary>
        /// <param name="next"></param>
        /// <param name="name"></param>
        public DIWrapper(RequestDelegate next,string name, string categoryName, ILoggerFactory loggerFactory, IAppHttpContextLogConvert appHttpContextLogConvert, IAppGetLogExcludePaths appGetLogExcludePaths, IAppGetOutputStreamReplaceExcludePaths appGetOutputStreamReplaceExcludePaths)
        {
            _nextMiddleware = next;
            _name = name;
            _categoryName = categoryName;
            _loggerFactory = loggerFactory;
            _appHttpContextLogConvert = appHttpContextLogConvert;
            _appGetLogExcludePaths = appGetLogExcludePaths;
            _appGetOutputStreamReplaceExcludePaths = appGetOutputStreamReplaceExcludePaths;
        }

        public async Task Invoke(HttpContext context)
        {
            using (var diContainer = DIContainerContainer.CreateContainer())
            {
                ContextContainer.SetValue<IDIContainer>(_name, diContainer);

                var replaceExcludePaths = await _appGetOutputStreamReplaceExcludePaths.Do();
                bool needReplace = true;
                if (context.Request.Path.HasValue)
                {
                    //检查当前请求路径是否匹配
                    foreach (var item in replaceExcludePaths)
                    {
                        Regex regex = new Regex(item, RegexOptions.IgnoreCase);
                        if (regex.IsMatch(context.Request.Path.Value))
                        {
                            needReplace = false;
                            break;
                        }
                    }
                }

                if (needReplace)
                {
                    Stream originalBody = context.Response.Body;
                    try
                    {

                        using (var responseStream = new MemoryStream())
                        {
                            context.Response.Body = responseStream;


                            await InnerInvoke(context);


                            responseStream.Position = 0;
                            await responseStream.CopyToAsync(originalBody);

                        }
                    }
                    finally
                    {
                        context.Response.Body = originalBody;
                    }
                }
                else
                {
                    await InnerInvoke(context);
                }

            }



        }



        private async Task InnerInvoke(HttpContext context)
        {

            await _nextMiddleware.Invoke(context);

            var excludePaths = await _appGetLogExcludePaths.Do();

            bool needDo = true;
            if (context.Request.Path.HasValue)
            {
                //检查当前请求路径是否匹配
                foreach (var item in excludePaths)
                {
                    Regex regex = new Regex(item, RegexOptions.IgnoreCase);
                    if (regex.IsMatch(context.Request.Path.Value))
                    {
                        needDo = false;
                        break;
                    }
                }
            }

            if (needDo)
            {


                var logObj = await _appHttpContextLogConvert.Convert(context);

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


                    LoggerHelper.LogInformation(_categoryName, logObj);
                

            }



        }
    }
}
