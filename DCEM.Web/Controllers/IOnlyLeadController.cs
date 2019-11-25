/*
    文件名：IOnlyLeadController.cs
    功能描述：唯一线索接口类  
    创建时间：2019年11月05日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;

namespace DCEM.Web.Controllers
{

    [EnableCors("any")]
    [Route("api/only-lead")]
    [ApiController]
    public class IOnlyLeadController : ApiController
    {
        public IAppOnlyLead app = null;
        public IOnlyLeadController()
        {
            if (app == null)
            {
                app = new OnlyLeadFactory().Create().Result;
            }
        }


        #region 唯一线索 相关接口
        /// <summary>
        /// 预约记录列表查询
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList([FromQuery]OnlyLeadRequest onlyLeadRequest)
        {
            var list = await app.QueryList(onlyLeadRequest);
            return list;
        }

        /// <summary>
        /// 唯一线索修改
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Edit")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> Edit(OnlyLeadEditRequest request)
        {
            return await app.Edit(request);
        }


        /// <summary>
        /// 查询唯一线索详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetOnlyLeadDetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetOnlyLeadDetail(string entityid)
        {
            return await app.GetOnlyLeadDetail(entityid);

        }

        #endregion

        #region 培育任务相关接口

        #region 查询与唯一线索关联的培育任务        
        [HttpGet]
        [Route("GetActivityList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetActivityList(string entityid = "", string systemuserid = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var activityrequest = new ActivityRequest()
            {
                entityid = entityid,
                UserId = systemuserid,
                PageIndex = page,
                PageSize = pageSize,
                Sort = sort
            };
            var list = await app.GetActivityList(activityrequest);
            return list;
        }
        #endregion

        #region 我的培育任务列表查询

        [HttpGet]
        [Route("GetMyActivityList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetMyActivityList(string seachkey = "", string systemuserid = "", int pageSize = 10, int page = 1, string sort = "", int mcs_activitystatus = -1)
        {        
            var request = new ActivityRequest()
            {          
                SearchKey = seachkey,              
                PageIndex = page,
                PageSize = pageSize,
                mcs_activitystatus = mcs_activitystatus,
                UserId= systemuserid
            };

            var list = await app.GetActivityList(request);
            return list;
        }
        #endregion

        #region 根据主键id获取培育任务详情

        [HttpGet]
        [Route("GetAcvitityDetail")]
        public async Task<NewtonsoftJsonActionResult<ActivityDetailModel>> GetAcvitityDetail(string mcs_activityid)
        {
            var result = await app.GetAcvitityDetail(mcs_activityid);
            return result;
        }

        #endregion

        #endregion

        #region  跟进记录(logcall）相关接口
        //查询与唯一线索关联的跟进记录（logcall）
        [HttpGet]
        [Route("GetLogCallList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetLogCallList(string entityid = "", string systemuserid = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var logcallrequest = new LogCallRequest()
            {
                entityid = entityid,
                UserId = systemuserid,
                PageIndex = page,
                PageSize = pageSize,
                Sort = sort
            };
            var list = await app.GetLogCallList(logcallrequest);
            return list;
        }

        /// <summary>
        /// logcall 新增或编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("AddOrEditLogcall")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrEditLogcall(LogCallRequest request)
        {
            var result = await app.AddOrEditEntity(request);
            return result;
        }

        //根据主键查询跟进记录（logcall）
        [HttpGet]
        [Route("GetLogCallById")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetLogCallById(string mcs_logcallid = "", string systemuserid = "")
        {
            var logcallrequest = new LogCallRequest()
            {
                mcs_logcallid = mcs_logcallid,
                UserId = systemuserid
              
            };
            var list = await app.GetLogCallList(logcallrequest);
            return list;
        }
        #endregion

    
    }
}
