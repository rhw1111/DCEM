/*
    文件名：IDriveRecordController.cs
    功能描述：试乘试驾接口接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using System;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/drive-record")]
    [ApiController]
    public class IDriveRecordController : ApiController
    {
        public IAppDriveRecord app = null;
        public IDriveRecordController()
        {
            if (app == null)
            {
                app = new DriveRecordFactory().Create().Result;
            }
        }

        /// <summary>
        /// 试乘试驾列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryList")]
        public async Task<NewtonsoftJsonActionResult<DriveRecordListResponse<CrmEntity>>> GetList([FromQuery]DriveRecordRequest request)
        {
            var list = await app.QueryList(request);
            return list;
        }

        /// <summary>
        /// 试乘试驾明细查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetDetail")]
        public async Task<NewtonsoftJsonActionResult<DriverecordDetailResponse>> GetDetail(Guid id)
        {
            var item = await app.GetDetail(id);
            return item;
        }

        /// <summary>
        /// 问题反馈查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetTestdrivefeedback")]
        public async Task<NewtonsoftJsonActionResult<TestdrivefeedbackResponse>> GetTestdrivefeedback(Guid id)
        {
            var item = await app.GetTestdrivefeedback(id);
            return item;
        }

        /// <summary>
        /// 试乘试驾预约时段列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryReservationList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryReservationList([FromQuery]DriveReservationRequest request)
        {
            var list = await app.QueryReservationList(request);
            return list;
        }

        /// <summary>
        /// 试乘试驾新增修改
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("AddOrEdit")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrEdit(DriveRecordAddOrEditRequest request)
        {
            return await app.AddOrEdit(request);
        }

        /// <summary>
        /// 试乘试驾车辆
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryDriveCarList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryDriveCarList([FromQuery]TestDriveCarRequest request)
        {
            var list = await app.QueryDriveCarList(request);
            return list;
        }

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryDriveRouteList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryDriveRouteList([FromQuery]DriveRouteRequest request)
        {
            var list = await app.QueryDriveRouteList(request);
            return list;
        }
    }
}
