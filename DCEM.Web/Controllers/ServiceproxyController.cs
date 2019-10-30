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
namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/Serviceproxy")]
    [EnableCors("any")]
    [ApiController]
    public class ServiceproxyController : ControllerBase
    {
        #region 初始化
        IServiceproxyService _serviceproxyService;
        public ServiceproxyController()
        {
            _serviceproxyService = new ServiceproxyFactory().Create().Result;
        }
        #endregion

        #region 获取问诊单 服务委托书列表
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1全部 2保修到期 3保险到期</param>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(int type = 1, int pageindex = 1, string search = "")
        {
            return await _serviceproxyService.QueryList(type, pageindex, search);
        }
        #endregion

        #region 获取问诊单 服务委托书详情
        [HttpGet]
        [Route("GetInfo")]
        public async Task<NewtonsoftJsonActionResult<ServiceproxyQueryInfoResponse>> GetInfo(string guid = "5A35949B-CEC7-E911-A81F-FB18ABF55380")
        {
            return await _serviceproxyService.QueryInfo(guid);
        }
        #endregion

        #region 问诊单 服务委托书添加编辑接口
        [HttpPost]
        [Route("AddOrUpdate")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request)
        {
            return await _serviceproxyService.AddOrUpdate(request);
        }
        #endregion

        #region 查询所有环检项
        [HttpGet]
        [Route("GetVehcheckresultList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetVehcheckresultList()
        {
            return await _serviceproxyService.QueryVehcheckresultList();
        }
        #endregion
    }
    #endregion

}


