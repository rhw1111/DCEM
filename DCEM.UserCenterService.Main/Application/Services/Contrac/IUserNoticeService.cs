using DCEM.UserCenterService.Main.ViewModel.Request;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.UserCenterService.Main.ViewModel.Response;
using MSLibrary.Xrm;

namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{

    public interface IUserNoticeService
    {
        /// <summary>
        /// 获取C端用户的通知
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetUserNotices(UserNoticeRequest request);
    }
}
