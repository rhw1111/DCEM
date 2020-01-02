namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using Newtonsoft.Json.Linq;
    using MSLibrary.Xrm;
    using MSLibrary;

    public interface IStoreService
    {
        /// <summary>
        /// 商品接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ProducListResponse> QueryProductList(ProducListRequest request);

        /// <summary>
        /// 订单查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<JObject>> QueryOrderList(int pageindex = 1, string search = "");


        /// <summary>
        /// 订单单个查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<OrderQueryInfoResponse> QueryOrderInfo(string guid);

    }
}
