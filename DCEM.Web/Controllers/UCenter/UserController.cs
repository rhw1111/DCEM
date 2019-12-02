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
            request.ip = Request.Host.Value;
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
            //注册短信或者忘记密码发送验证当前账号是否已存在
            if (model.type == (int)UserEnum.UserMessEnum.注册 || model.type == (int)UserEnum.UserMessEnum.忘记密码)
            {
                UserLoginRequest request = new UserLoginRequest();
                request.account = model.phone;
                request.logintype = (int)UserEnum.UserLogintypeEnum.手机;
                ValidateResult<CrmEntity> ret = await _appUser.GetUser(request);
                if (model.type == (int)UserEnum.UserMessEnum.注册)
                {
                    if (ret.Data != null)
                    {
                        ValidateResult res = new ValidateResult();
                        res.Result = false;
                        res.Description = "当前账号已存在！";
                        return res;
                    }
                }
                else if (model.type == (int)UserEnum.UserMessEnum.忘记密码)
                {
                    if (ret.Data == null)
                    {
                        ValidateResult res = new ValidateResult();
                        res.Result = false;
                        res.Description = "当前账号不存在！";
                        return res;
                    }
                }

            }

            Random rad = new Random();
            model.valcode = "1234";// rad.Next(1000, 9999).ToString();
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
            req.type = (request.type == "2" ? (int)UserEnum.UserMessEnum.登陆 : (int)UserEnum.UserMessEnum.注册);//
            req.valcode = request.valcode;
            //验证码验证
            ValidateResult res = await _appUsermessage.ValCode(req);
            if (res.Result)
            {

                //验证通过;判断是登陆还是注册，登陆获取用户信息，注册直接返回验证成功
                if (request.type == "2")
                {

                    ValidateResult<CrmEntity> crm = await _appUser.GetUser(request);
                    _appUser.LoginLog(request, crm.Data.Id, (int)UserEnum.LoginlogEnum.成功);
                    return crm;
                }
                else
                {
                    ValidateResult<CrmEntity> ret = new ValidateResult<CrmEntity>();
                    ret.Result = true;
                    res.Description = "验证成功！";
                    return ret;
                }
            }
            else
            { 
                ValidateResult<CrmEntity> ret = new ValidateResult<CrmEntity>();
                ret.Result = false;
                ret.Description = res.Description;
                return ret;
            }
        }


        /// <summary>
        /// 注册用户
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("adduser")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> AddUser(UserAddRequest request)
        {
            return await _appUser.AddUser(request);
        }

        /// <summary>
        /// 获取用户
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [Route("getuser")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> GetUser(UserLoginRequest req)
        {
            return await _appUser.GetUser(req);
        }

        /// <summary>
        /// 问题列表
        /// </summary>
        /// <returns></returns>
        [Route("getquestions")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<List<CrmEntity>>>> GetSecurityquestion()
        {
            return await _appUser.GetSecurityquestion();
        }
    }
}


