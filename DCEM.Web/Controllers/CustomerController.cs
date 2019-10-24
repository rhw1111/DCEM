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

namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/Customer")]
    [EnableCors("any")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        #region 初始化
        ICustomerService _customerService;
        public CustomerController()
        {
            _customerService = new CustomerFactory().Create().Result;
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
        [Route("GetMyCustomerList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetMyCustomerList(int type = 1, int pageindex = 1, string search = "")
        {
            return await _customerService.QueryList(type, pageindex, search);
        }
        #endregion

    }
    #endregion

    #region 自定义

    #region 自定义ActionResult
    public sealed class NewtonsoftJsonActionResult<TValue> : IConvertToActionResult
    {
        public ActionResult Result { get; }
        public TValue Value { get; }
        public NewtonsoftJsonActionResult(TValue value)
        {
            Value = value;
        }
        public NewtonsoftJsonActionResult(ActionResult result)
        {
            Result = result ?? throw new ArgumentNullException(nameof(result));
        }

        public static implicit operator NewtonsoftJsonActionResult<TValue>(TValue value)
        {
            return new NewtonsoftJsonActionResult<TValue>(value);
        }


        public static implicit operator NewtonsoftJsonActionResult<TValue>(ActionResult result)
        {
            return new NewtonsoftJsonActionResult<TValue>(result);
        }

        IActionResult IConvertToActionResult.Convert()
        {
            return Result ?? new ObjectResult(JsonConvert.SerializeObject(Value))
            {
                DeclaredType = typeof(TValue),
            };
        }
    }
    #endregion

    #endregion
}