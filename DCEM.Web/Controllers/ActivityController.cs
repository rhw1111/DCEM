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
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("api/activity")]
    [EnableCors("any")]
    [ApiController]
    public class ActivityController : ApiController
    {
        #region 初始化
        IAppActivity _service;
        public ActivityController()
        {
            _service = new ActivityFactory().Create().Result;
        }
        #endregion

        #region 获取列表 
        [HttpGet]
        [Route("getlist")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(ActivitysRequest request)
        {
            return await _service.getlist(request);
        }
        #endregion

        #region 获取明细  
         // 培育任务明细 
        [HttpGet]
        [Route("getdetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetDetail(Guid id) => await _service.getdetail(id);

        // 潜客获取 
        [HttpGet]
        [Route("getcontactdetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getContactDetail(Guid id) => await _service.getcontactdetail(id);

        // 唯一线索获取 
        [HttpGet]
        [Route("getonlyleaddetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getOnlyleadDetail(Guid id) => await _service.getonlyleaddetail(id);

        // 销售机会获取 
        [HttpGet]
        [Route("getaccountdetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> getAccountDetail(Guid id) => await _service.getaccountdetail(id);

        #endregion

        #region 新增修改 
        [HttpPost]
        [Route("addoredit")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> AddOrUpdate([FromBody]Object model)
        {
            ActivityEditRequest item = JsonConvert.DeserializeObject<ActivityEditRequest>(model.ToString());
            return await _service.AddOrUpdate(item);
        }
        #endregion
    }
    #endregion

}


