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

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// C端用户登陆
    /// </summary>
    [Route("api/user")]
    [EnableCors("any")]
    [ApiController]
    public class UserController : ApiController
    {

        private IAppUser _appUser;
        private IAppUsermessage _appUsermessage;
        public UserController()
        {
            _appUser = new UserFactory().Create().Result;
            _appUsermessage = new UsermessageFactory().Create().Result;
        }

        /// <summary>
        /// 账号登陆
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("loginaccount")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> LoginAccount(UserLoginRequest request)
        {
            return await _appUser.LoginAccount(request);
        }

        /// <summary>
        /// 验证码发送
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [Route("sendmsg")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> SendMsg(UsermessageRequest model)
        {
            Random rad = new Random();
            model.valcode = rad.Next(1000, 9999).ToString();
            return await _appUsermessage.Add(model);
        }

        /// <summary>
        /// 短信验证接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("loginphone")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> loginphone(UserLoginRequest request)
        {

            UsermessageRequest req = new UsermessageRequest();
            req.phone = request.account;
            req.type = (request.type == "2" ? 2 : 1);//
            req.valcode = request.valcode;
            //验证码验证
            ValidateResult res = await _appUsermessage.ValCode(req);
            if (res.Result)
                return await _appUser.GetUser(request);
            else
            {
                ValidateResult<CrmEntity> ret = new ValidateResult<CrmEntity>();
                ret.Result = false;
                ret.Description = res.Description;
                return ret;
            }
        }


        [Route("adduser")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> AddUser(UserAddRequest request)
        {
            return await _appUser.AddUser(request);
        }

    }
}


