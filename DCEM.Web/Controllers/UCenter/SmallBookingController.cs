﻿/*
    文件名：SmallBookingController.cs
    功能描述：小订接口类  
    创建时间：2020年01月15日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Xrm;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;

namespace DCEM.Web.Controllers.UCenter
{
    /// <summary>
    /// 小订查询相关接口
    /// </summary>
    [Route("api/smallbooking")]
    [EnableCors("any")]
    [ApiController]
    public class SmallBookingController : ApiController
    {
        public IAppSmallBooking app = null;
        public SmallBookingController()
        {
            if (app == null)
            {
                app = new SmallBookingFactory().Create().Result;
            }
        }

        /// <summary>
        ///  小订订单活动查询接口（小订活动、小订权益包、小订权益项、小订选配）
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySmallBooking")]
        public async Task<NewtonsoftJsonActionResult<SmallBookingListResponse>> QuerySmallBooking([FromQuery]SmallBookingListRequest request)
        {
            return await app.QuerySmallBooking(request);
        }

        /// <summary>
        ///  小订订单创建、支付、退款申请、退订
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("AddOrEdit")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrEdit(SmallBookingRequest request)
        {
            return await app.AddOrEdit(request);
        }

        /// <summary>
        ///  小订订单列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySmallOrder")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QuerySmallOrder([FromQuery]SmallOrderListRequest request)
        {
            return await app.QuerySmallOrder(request);
        }

        /// <summary>
        ///  小订订单明细接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySmallOrderDetail")]
        public async Task<NewtonsoftJsonActionResult<SmallOrderListResponse>> QuerySmallOrderDetail([FromQuery]SmallOrderRequest request)
        {
            return await app.QuerySmallOrderDetail(request);
        }
    }



}
