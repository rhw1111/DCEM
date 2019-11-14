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
    public class ServiceproxyController : ApiController
    {
        #region 初始化
        IServiceproxyService _serviceproxyService;
        public ServiceproxyController()
        {
            _serviceproxyService = new ServiceproxyFactory().Create().Result;
        }
        #endregion

        #region 查询 问诊单 服务委托书 列表
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

        #region 查询 问诊单 服务委托书 详情
        [HttpGet]
        [Route("GetInfo")]
        public async Task<NewtonsoftJsonActionResult<ServiceproxyQueryInfoResponse>> GetInfo(string guid = "5A35949B-CEC7-E911-A81F-FB18ABF55380")
        {
            return await _serviceproxyService.QueryInfo(guid);
        }
        #endregion

        #region 添加编辑 问诊单 服务委托书
        [HttpPost]
        [Route("AddOrUpdate")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request)
        {
            return await _serviceproxyService.AddOrUpdate(request);
        }
        #endregion

        #region 删除 问诊单 服务委托书
        [HttpGet]
        [Route("Delete")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> Delete(string serviceproxyGuid)
        {
            return await _serviceproxyService.Delete(serviceproxyGuid);
        }
        #endregion

        #region  问诊单转服务委托书
        [HttpGet]
        [Route("ToServiceproxy")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> ToServiceproxy(string serviceproxyGuid)
        {
            return await _serviceproxyService.ToServiceproxy(serviceproxyGuid);
        }
        #endregion

        #region 查询 环检项 列表
        [HttpGet]
        [Route("GetVehcheckList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetVehcheckList()
        {
            return await _serviceproxyService.QueryVehcheckList();
        }
        #endregion

        #region 查询 工位 列表
        [HttpGet]
        [Route("GetRepairlocationList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetRepairlocationList()
        {
            return await _serviceproxyService.QueryRepairlocationList();
        }
        #endregion

        #region 查询 保养项 列表
        [HttpGet]
        [Route("GetMaintenanceList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetMaintenanceList()
        {
            return await _serviceproxyService.QueryMaintenanceList();
        }
        #endregion

        #region 查询 保养项 详情
        [HttpGet]
        [Route("GetMaintenanceInfo")]
        public async Task<NewtonsoftJsonActionResult<MaintenanceQueryInfoResponse>> GetMaintenanceInfo(string maintenanceGuid = "B48C1BD2-FB93-E911-A81F-FB18ABF55380", string dealeridGuid = "D2B7AE95-72F4-E911-A821-F2106C4094A1")
        {
            return await _serviceproxyService.QueryMaintenanceInfo(maintenanceGuid, dealeridGuid);
        }
        #endregion

        #region 查询 维修项目 列表
        [HttpGet]
        [Route("GetRepairitemList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetRepairitemList(int pageIndex, string search, string dealeridGuid = "D2B7AE95-72F4-E911-A821-F2106C4094A1")
        {
            return await _serviceproxyService.QueryRepairitemList(dealeridGuid, pageIndex, search);
        }
        #endregion

        #region 查询 维修配件 列表
        [HttpGet]
        [Route("GetPartsList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetPartsList(int pageIndex, string search)
        {
            return await _serviceproxyService.QueryPartsList(pageIndex, search);
        }
        #endregion

    }
#endregion

}


