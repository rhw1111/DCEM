using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using System;
using Microsoft.AspNetCore.Http;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.Main.Entities;
using DCEM.Main;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using DCEM.UserCenterService.Main.Application.App;
using System.Collections.Generic;
using Newtonsoft.Json;
using DCEM.UserCenterService.Main.Common;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 问题问卷
    /// </summary>
    [Route("api/question")]
    [EnableCors("any")]
    [ApiController]
    public class QuestionController : ApiController
    {

        private IAppQuestion _appQuestion;
        private IAppUser _appUser;
        public QuestionController()
        {
            _appUser = new UserFactory().Create().Result;
            _appQuestion = new QuestionFactory().Create().Result;
        }



        /// <summary>
        /// 获取 
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [Route("getquestion")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<QuestionSettingResponse>>> GetQuestion(QuestionDetailRequest req)
        {
            return await _appQuestion.QueryQiestion(req.id);
        }

        [Route("add")]
        [HttpPost]
        public async Task<ValidateResult> AddAnswercontent(QuestionAddRequest model)
        {
            ValidateResult ts = await _appQuestion.AddAnswercontent(model);
            _appUser.IntegralCreate("", model.mcs_answername);
                return ts;
        }
    }
}


