/*
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
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySmallBooking")]
        public async Task<NewtonsoftJsonActionResult<SmallBookingListResponse>> GetProductList([FromQuery]SmallBookingListRequest request)
        {
            return await app.QuerySmallBooking(request);
        }



    }
}
