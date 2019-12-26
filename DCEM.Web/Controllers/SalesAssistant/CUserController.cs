using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Newtonsoft.Json;
using MSLibrary.Xrm;
using System.Threading.Tasks;
using System.Text;
using System;
using Microsoft.AspNetCore.Mvc.Core;
using System.Reflection;
using MSLibrary;
using Newtonsoft.Json.Linq;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Collections.Generic;
namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/CUser")]
    [EnableCors("any")]
    [ApiController]
    public class CUserController : ApiController
    {
        #region 初始化
        ICUserService _cuserService;
        public CUserController()
        {
            _cuserService = new CUserFactory().Create().Result;
        }
        #endregion

        #region 获取我的客户列表
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1全部 2保修到期 3保险到期</param>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetUserList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<JObject>>> GetUserList(int pageindex = 1, string search = "")
        {
            return await _cuserService.QueryUserList(pageindex, search);
        }
        #endregion



    }
    #endregion

}


