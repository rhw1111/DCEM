//==============================================
//文件名：InstallationController.cs
//功能描述：安装单相关接口控制器
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.Web.Controllers
{
    [Route("api/Installation")]
    [EnableCors("any")]
    [ApiController]
    public class InstallationController : ApiController
    {
        IAppInstallation app =null;
        public InstallationController() {
            if (app == null) {
                app = new InstallationFactory().Create().Result;
            }           
        }

        [HttpGet]
        [Route("GetSurveyorderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetSurveyorderList(SurveyorderListRequest _request)
        {
            var list = await app.GetSurveyorderList(_request);
            return list;
        }
    }
}