using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppDriveRecord : IAppDriveRecord
    {
        private IDriveRecordService _driveRecordService;

        public AppDriveRecord(IDriveRecordService driveRecordService)
        {
            _driveRecordService = driveRecordService;
        }

        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<DriveRecordListResponse<CrmEntity>> QueryList(DriveRecordRequest request)
        {
            return await _driveRecordService.QueryList(request);
        }
    }
}
