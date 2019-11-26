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
using DCEM.ServiceAssistantService.Main.DTOModel;
using Newtonsoft.Json.Linq;
namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/Customer")]
    [EnableCors("any")]
    [ApiController]
    public class CustomerController : ApiController
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
        public async Task<NewtonsoftJsonActionResult<CustomerQueryListResponse<CrmEntity>>> GetMyCustomerList(int type = 1, int pageindex = 1, string search = "")
        {
            return await _customerService.QueryList(type, pageindex, search);
        }
        #endregion

        #region 获取我的客户详情
        [HttpGet]
        [Route("GetCustomerInfo")]
        public async Task<NewtonsoftJsonActionResult<CustomerQueryInfoResponse>> GetCustomerInfo(string guid = "3DBCC9F7-34CC-4232-B1FE-E8FE05DB2747")
        {
            return await _customerService.QueryInfo(guid);
        }
        #endregion

        #region 新增 编辑 客户信息
        [HttpPost]
        [Route("AddOrUpdate")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrUpdate([FromBody]Object body)
        {
            JObject jo = JObject.Parse(body.ToString());
            return await _customerService.AddOrUpdate(jo);
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


