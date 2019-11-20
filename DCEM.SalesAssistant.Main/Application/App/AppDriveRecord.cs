using System;
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
        /// 试乘试驾新增修改
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrEdit(DriveRecordAddOrEditRequest request)
        {
            return await _driveRecordService.AddOrEdit(request);
        }

        /// <summary>
        /// 试乘试驾车辆查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryDriveCarList(TestDriveCarRequest request)
        {
            return await _driveRecordService.QueryDriveCarList(request);
        } 

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryDriveRouteList(DriveRouteRequest request)
        {
            return await _driveRecordService.QueryDriveRouteList(request);
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
        /// <summary>
        /// 试乘试驾明细查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<DriverecordDetailRepository> GetDetail(Guid id)
        {
            return await _driveRecordService.GetDetail(id);
        }

        public async Task<TestdrivefeedbackRepository> GetTestdrivefeedback(Guid id)
        {
            return await _driveRecordService.GetTestdrivefeedback(id);
        }

        /// <summary>
        /// 试乘试驾预约时段列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryReservationList(DriveReservationRequest request)
        {
            return await _driveRecordService.QueryReservationList(request);
        }
    }
}
