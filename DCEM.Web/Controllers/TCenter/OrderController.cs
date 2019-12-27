using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.Main.Entities.Response.OrderManager;
using DCEM.Main.Entities.Request;
using DCEM.Main.Entities.TCenter.MktCloud;
using DCEM.Main.Entities.Request.OrderManager;
using DCEM.Main.Entities;
using DCEM.Main.TCenter;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/order")]
    public class OrderController : ApiController
    {
        /// <summary>
        /// IAppProduct 工厂，默认使用 TCenterFactory
        /// </summary>
        public static ITCenterFactory _tCenterFactory;

        /// <summary>
        /// 提供静态属性用于替换ITCenterFactory工厂
        /// </summary>
        public OrderController(ITCenterFactory tCenterFactory)
        {
            _tCenterFactory = tCenterFactory;
        }

        #region 大订订单最新的实现方法
        /// <summary>
        /// 大订订单创建接口
        /// </summary>
        /// <param name="param">请求参数</param>
        /// <returns></returns>
        [HttpPost]
        [Route("CreateOrder")]
        public async Task<NewtonsoftJsonActionResult<CreateOrderManagerResponse>> CreateOrder([FromBody]CreateOrderManagerRequest param)
        {
            var logic = await _tCenterFactory.Create();
            return await logic.CreateOrder(param);
        }
        #endregion

        ///// <summary>
        ///// 大订订单取消接口
        ///// 备注：我们调用营销云
        ///// </summary>
        ///// <param name="param"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("cancelOrder")]
        //public async Task<MktCloudDataContract> CancelOrder([FromBody]CancelOrderRequest param)
        //{
        //    var orderLogic = await _tCenterFactory.Create();
        //    return await orderLogic.CancelOrder(param);
        //}

        ///// <summary>
        ///// 订单状态同步接口
        ///// 备注：我们调用营销云
        ///// </summary>
        ///// <param name="param">请求参数</param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("UpdateDeliveryInfo")]
        //public async Task<MktCloudDataContract> UpdateDeliveryInfo(UpdateDeliveryInfoRequest param)
        //{
        //    var orderLogic = await _tCenterFactory.Create();
        //    return await orderLogic.UpdateDeliveryInfo(param);
        //}
        //#endregion

        //#region 子订单退货接口
        ///// <summary>
        ///// 子订单退货接口
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("SubOrdersReturn")]
        //public async Task<SubOrderReturnApplyResponse> SubOrdersReturnApply([FromBody]SubOrderReturnApplyRequest request)
        //{
        //    var orderLogic = await _tCenterFactory.Create();
        //    var result = await orderLogic.SubOrderReturnApply(request);
        //    return await result;

        //}
        //#endregion

        //#region 子订单取消接口
        ///// <summary>
        ///// 子订单取消接口
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("SubOrdersCancel")]
        //public async Task<SubOrderCancelApplyResponse> SubOrdersCancelApply([FromBody]SubOrderCancelApplyRequest request)
        //{
        //    var orderLogic = await _tCenterFactory.Create();
        //    var result = await orderLogic.SubOrderCancelApply(request);
        //    return await result;

        //}
        //#endregion

        //#region 订单取消
        ///// <summary>
        ///// 订单取消
        ///// </summary>
        ///// <param name="param"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("Cancel")]
        //public async Task<ExcuteResutResponse> OrderCancelApply([FromBody]OrderCancelApplyRequest param)
        //{
        //    var logic = await _tCenterFactory.Create();
        //    return await logic.OrderCancelApply(param);
        //}
        //#endregion

        //#region 订单退货申请
        ///// <summary>
        ///// 订单退货申请
        ///// </summary>
        ///// <param name="request"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("Return")]
        //[OtherSystemAuthenticationActionFilter]
        //public async Task<ExcuteResutResponse> OrderReturnApply([FromBody]OrderReturnApplyRequest request)
        //{
        //    var orderLogic = await _tCenterFactory.Create();
        //    var result = await orderLogic.OrderReturnApply(request);
        //    return await result;
        //}
        //#endregion
    }
}