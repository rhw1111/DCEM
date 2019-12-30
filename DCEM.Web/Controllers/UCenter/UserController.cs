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

        //问题积分埋点编号
        public string Integrallend_Key = "Integrallend_Key";
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
            if (model.type == (int)UserEnum.UserMessEnum.注册 || model.type == (int)UserEnum.UserMessEnum.登陆 || model.type == (int)UserEnum.UserMessEnum.忘记密码)
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
                else if (model.type == (int)UserEnum.UserMessEnum.忘记密码 || model.type == (int)UserEnum.UserMessEnum.登陆)
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
                //登陆验证失败，写入登陆日志
                if (request.type == "2")
                {
                    ValidateResult<CrmEntity> crm = await _appUser.GetUser(request);
                    _appUser.LoginLog(request, crm.Data.Id, (int)UserEnum.LoginlogEnum.失败);
                }
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
        /// 修改用户信息
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("updateuser")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> UpdateUser(UserAddRequest request)
        {
            return await _appUser.UpdateUser(request);
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


        [Route("resetpwd")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> UpdatePwd(UserLoginRequest request)
        {
            UsermessageRequest req = new UsermessageRequest();
            req.phone = request.account;
            req.type = int.Parse(request.type);
            req.valcode = request.valcode;
            //验证码验证
            ValidateResult res = await _appUsermessage.ValCode(req);
            if (res.Result)
            {
                return await _appUser.UpdateUserPwd(request);
            }
            else
                return res;
        }
        [Route("integraladd")]
        [HttpPost]
        public async void IntegralCreate(UserLoginRequest request)
        {
            ValidateResult<CrmEntity> crm = await _appUser.GetUser(request);
            _appUser.IntegralCreate(Integrallend_Key, crm.Data.Id.ToString());
            
        }

        [Route("resetpwdtoquestion")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> UpdatePwdToQuestion(UserLoginRequest req)
        {

            //验证码验证
            ValidateResult res = await _appUser.ValUserSecurityquestion(req);
            if (res.Result)
            {
                return await _appUser.UpdateUserPwd(req);
            }
            else
                return res;
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

        /// <summary>
        /// 详情接口
        /// </summary>
        /// <returns></returns>
        [Route("getuserdetail")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getuserdetail(UserDetailRequest userDetailRequest)
        {
            return await _appUser.getuserdetail(userDetailRequest);
        }

        /// <summary>
        /// 用户标签
        /// </summary>
        /// <returns></returns>
        [Route("getusertag")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<UserTagListResponse>> getusertag(UserDetailRequest userDetailRequest)
        {
            return await _appUser.getusertag(userDetailRequest);
        }

        /// <summary>
        /// 用户积分记录
        /// </summary>
        /// <returns></returns>
        [Route("getuserscore")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<UserScoreListResponse>> getuserscore(UserDetailRequest userDetailRequest)
        {
            return await _appUser.getuserscore(userDetailRequest);
        }
        /// <summary>
        /// 增减用户积分记录
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("addintegral")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> deducationintegral(UserDeDucationIntegralRequest request)
        {
            return await _appUser.DeDucationIntegral(request);
        }

        /// <summary>
        /// 获取注册用户协议
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("getagreement")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> GetAgreement(UserDetailRequest model)
        {
            return await _appUser.GetAgreement(model.id);
        }

        /// <summary>
        /// 获取用户通知信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("notices")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetUserNotices(UserNoticeRequest request)
        {
            return await _appUser.QueryUserNotices(request);
        }

        /// <summary>
        /// 更新用户通知阅读状态
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("toread")]
        [HttpPost]
        public async Task<bool> ToRead(UserNoticeRequest request)
        {
            return await _appUser.UpdateUserNoticeReadStatus(request);
        }

        /// <summary>
        /// 获取用户通知信息未阅读数量
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("noreadcount")]
        [HttpGet]
        public async Task<int> GetUserNoticesNoReadCount(string userId)
        {
            return await _appUser.GetUserNoticesNoReadCount(userId);
        }
    }
}


