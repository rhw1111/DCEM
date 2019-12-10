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
        /// ��Ʒ�ӿ�
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ProducListResponse> QueryProductList(ProducListRequest request);




    }
}
