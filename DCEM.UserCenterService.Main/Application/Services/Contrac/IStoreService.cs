namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;

    public interface IStoreService
    {
        Task<ProducListResponse> QueryProductList(ProducListRequest request);

    }
}
