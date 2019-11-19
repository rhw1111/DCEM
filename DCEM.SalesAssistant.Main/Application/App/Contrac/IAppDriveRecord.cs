using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppDriveRecord
    {
        /// <summary>
        /// 试乘试驾列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<DriveRecordListResponse<CrmEntity>> QueryList(DriveRecordRequest request);
    }
}
