//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Cors;
//using DCEM.UserCenterService.Main.Application.App.Contrac;
//using System.Threading.Tasks;
//using MSLibrary.Xrm;
//using DCEM.UserCenterService.Main.Factory;
//using MSLibrary;
//using DCEM.UserCenterService.Main.ViewModel.Request;

//namespace DCEM.Web.Controllers
//{
//    /// <summary>
//    /// 
//    /// </summary>
//    [Route("api/order")]
//    public class OrderController : ApiController
//    {
//        /// <summary>
//        /// IOrderLogic 工厂，默认使用 OrderLogicFactory
//        /// </summary>
//        private static IFactory<IOrderLogic> _orderLogicFactory = new OrderLogicFactory();
//        private static IFactory<IOrderLogic> _orderLogicCRMFactory = new OrderLogicCRMFactory();
//        /// <summary>
//        /// 订单管理工厂实例对象
//        /// </summary>
//        private static readonly CRM.Core.IFactory<IOrderManager> orderLogicFactory = new OrderManagerFactory();


//        /// <summary>
//        /// 提供静态属性用于替换IOrderLogic工厂
//        /// </summary>
//        public static IFactory<IOrderLogic> OrderLogicFactory
//        {
//            set
//            {
//                _orderLogicFactory = value;
//            }
//        }

//        #region 大订订单最新的实现方法
//        /// <summary>
//        /// 大订订单创建接口
//        /// </summary>
//        /// <param name="param">请求参数</param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("CreateOrder")]
//        //[InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<CreateOrderManagerResponse> CreateOrder([FromBody]CreateOrderManagerRequest param)
//        {
//            var logic = orderLogicFactory.Create();
//            return await logic.CreateOrder(param);
//        }

//        /// <summary>
//        /// 大订订单取消接口
//        /// 备注：我们调用营销云
//        /// </summary>
//        /// <param name="param"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("cancelOrder")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<MktCloudDataContract> CancelOrder([FromBody]CancelOrderRequest param)
//        {
//            var orderLogic = orderLogicFactory.Create();
//            return await orderLogic.CancelOrder(param);
//        }

//        /// <summary>
//        /// 订单状态同步接口
//        /// 备注：我们调用营销云
//        /// </summary>
//        /// <param name="param">请求参数</param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("UpdateDeliveryInfo")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<MktCloudDataContract> UpdateDeliveryInfo(UpdateDeliveryInfoRequest param)
//        {
//            var orderLogic = orderLogicFactory.Create();
//            return await orderLogic.UpdateDeliveryInfo(param);
//        }
//        #endregion

//        #region 以前的方法
//        /// <summary>
//        /// 创建订单
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("CreateOrder2")]
//        [InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public CreateOrderResponse CreateOrder2([FromBody]CreateOrderRequest request)
//        {
//            var response = new CreateOrderResponse() { IsSuccess = false };
//            if (request == null)
//            {
//                response.Message = "请求参数不能为空";
//                response.Code = EnumHelper.GetDescription(ApiStatus.MissingParameters);
//                return response;
//            }
//            if (request.OrderData == null)
//            {
//                response.Message = "request.OrderData 订单数据不能为空";
//                response.Code = EnumHelper.GetDescription(ApiStatus.MissingParameters);
//                return response;
//            }
//            var orderLogic = _orderLogicCRMFactory.Create();
//            var result = orderLogic.CreateOrder2(request);
//            return result;
//        }

//        /// <summary>
//        /// 订单支付完成确认
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("PayedConfrim")]
//        [InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<ExcuteResutResponse> OrderPayedConfrim([FromBody]OrderPayedConfrimRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.OrderPayedConfrim(request);
//            return await result;
//        }

//        /// <summary>
//        /// 订单详情查询
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [EnableCors(origins: "*", headers: "*", methods: "*")]
//        [HttpPost]
//        [Route("OrderDetail")]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<GetOrderDetailResponse> GetOrderDetail(GetOrderDetailRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.GetOrderDetail(request);
//            return await result;
//        }

//        /// <summary>
//        /// 订单删除
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("Delete")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<ExcuteResutResponse> OrderDelete(OrderDeleteRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.OrderDelete(request);
//            return await result;
//        }

//        /// <summary>
//        /// 订单退货申或取消结果查询
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("CancelOrReturnResult")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<QueryCancelOrReturnResultResponse> QueryCancelOrReturnResult(QueryCancelOrReturnResultRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.QueryCancelOrReturnResult(request);
//            return await result;
//        }
//        /// <summary>
//        /// 获取订单透明化记录
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("QueryStatus")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<QueryStatusResponse> QueryOrderStatusRecord(QueryStatusRequest request)
//        {
//            var logic = orderLogicFactory.Create();
//            return await logic.QueryStatus(request);
//        }
//        /// <summary>
//        /// 我的订单列表查询
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [EnableCors(origins: "*", headers: "*", methods: "*")]
//        [Route("MyAllOrders")]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<QueryMyAllOrdersResponse> QueryMyAllOrders(QueryMyAllOrdersRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.QueryMyAllOrders(request);
//            return await result;
//        }

//        /// <summary>
//        /// 同步订单状态变更记录
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("CreateTransOrderRecord")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<int> CreateTransOrderRecord(TransOrderRecordEntity request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.TransOrderRecordCreate(request);
//            return await result;
//        }

//        /// <summary>
//        /// 整车子订单状态修改
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("ModifySubordersCar")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<ResponseBase> ModifySubordersCar(ModifySubordersCarRequest request)
//        {
//            if (request == null)
//            {
//                return new ResponseBase() { Code = "001", Message = "参数错误" };
//            }
//            if (!request.SubOrderCode.HasValue || request.SubOrderCode.Value == 0)
//            {
//                return new ResponseBase() { Code = "002", Message = "子订单不能为空" };
//            }
//            if (request.Status == 0)
//            {
//                return new ResponseBase() { Code = "004", Message = "订单状态不能为空" };
//            }
//            if (!request.UpdateTime.HasValue)
//            {
//                return new ResponseBase() { Code = "003", Message = "修改时间不能为空" };
//            }
//            var orderLogic = _orderLogicFactory.Create();
//            var result = await orderLogic.ModifySubordersCar(request);
//            return result;
//        }

//        /// <summary>
//        /// 配送子订单状态修改
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("ModifySubordersDeliveryStatus")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<ResponseBase> ModifySubordersDeliveryStatus(SubordersDeliveryStatusRequest request)
//        {
//            if (request == null)
//            {
//                return new ResponseBase() { Code = "001", Message = "参数错误" };
//            }
//            if (string.IsNullOrWhiteSpace(request.SubOrderCode))
//            {
//                return new ResponseBase() { Code = "002", Message = "子订单编号为空" };
//            }
//            if (request.Status == 0)
//            {
//                return new ResponseBase() { Code = "003", Message = "状态为空" };
//            }
//            var orderLogic = _orderLogicFactory.Create();
//            var result = await orderLogic.ModifySubordersDeliveryStatus(request);
//            return result;
//        }

//        /// <summary>
//        /// 根据运单号查询配送信息
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("GetShippingDetail")]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<ShippingDetailResutResponse> QueryStockQuantity(QueryShippingDetailRequest request)
//        {
//            if (request == null)
//            {
//                return new ShippingDetailResutResponse() { Code = "001", Message = "参数错误" };
//            }
//            if (string.IsNullOrWhiteSpace(request.ShippingCode))
//            {
//                return new ShippingDetailResutResponse() { Code = "002", Message = "运单号不能为空" };
//            }
//            var orderLogic = _orderLogicFactory.Create();
//            var result = await orderLogic.GetShippingDetailList(request);
//            return result;
//        }
//        #endregion

//        #region 子订单退货接口
//        /// <summary>
//        /// 子订单退货接口
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("SubOrdersReturn")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<SubOrderReturnApplyResponse> SubOrdersReturnApply([FromBody]SubOrderReturnApplyRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.SubOrderReturnApply(request);
//            return await result;

//        }
//        #endregion

//        #region 子订单取消接口
//        /// <summary>
//        /// 子订单取消接口
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("SubOrdersCancel")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<SubOrderCancelApplyResponse> SubOrdersCancelApply([FromBody]SubOrderCancelApplyRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.SubOrderCancelApply(request);
//            return await result;

//        }
//        #endregion

//        #region 订单取消
//        /// <summary>
//        /// 订单取消
//        /// </summary>
//        /// <param name="param"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("Cancel")]
//        //[InterfaceSuccessFilter]
//        //[OtherSystemAuthenticationActionFilter]
//        public async Task<ExcuteResutResponse> OrderCancelApply([FromBody]OrderCancelApplyRequest param)
//        {
//            var logic = orderLogicFactory.Create();
//            return await logic.OrderCancelApply(param);
//        }
//        #endregion

//        #region 订单退货申请
//        /// <summary>
//        /// 订单退货申请
//        /// </summary>
//        /// <param name="request"></param>
//        /// <returns></returns>
//        [HttpPost]
//        [Route("Return")]
//        [InterfaceSuccessFilter]
//        [OtherSystemAuthenticationActionFilter]
//        public async Task<ExcuteResutResponse> OrderReturnApply([FromBody]OrderReturnApplyRequest request)
//        {
//            var orderLogic = _orderLogicFactory.Create();
//            var result = orderLogic.OrderReturnApply(request);
//            return await result;
//        }
//        #endregion
//    }
//}