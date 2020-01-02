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

        /// <summary>
        /// 更新C端用户的阅读状态
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<bool> UpdateUserNoticeReadStatus(UserNoticeRequest request);
        /// <summary>
        /// 获取C端用户的通知未阅读数量
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<int> GetUserNoticesNoReadCount(string userid);
        
    }
}
