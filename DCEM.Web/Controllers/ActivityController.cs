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
        [HttpGet]
        [Route("getdetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetDetail(Guid id)
        {
            ActivityEditRequest model = new ActivityEditRequest();
            string json = JsonConvert.SerializeObject(model);


            return await _service.getdetail(id);
        }
        #endregion

        #region 新增修改 
        [HttpPost]
        [Route("addoredit")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult>> AddOrUpdate(ActivityEditRequest model)
        {
            return await _service.AddOrUpdate(model);
        }
        #endregion
    }
    #endregion

}


