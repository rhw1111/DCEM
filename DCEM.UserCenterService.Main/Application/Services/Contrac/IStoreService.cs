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
        /// 订单创建接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> CreateOrder(JObject jo);
    }
}
