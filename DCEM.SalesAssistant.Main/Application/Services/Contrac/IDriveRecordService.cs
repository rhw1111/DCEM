﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IDriveRecordService
    {
        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<DriveRecordListResponse<CrmEntity>> QueryList(DriveRecordRequest request);
        /// <summary>
        /// 试乘试驾明细查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<DriverecordDetailResponse> GetDetail(Guid id);
        /// <summary>
        /// 试乘试驾预约时段列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryReservationList(DriveReservationRequest request);
        /// <summary>
        /// 问题反馈
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TestdrivefeedbackResponse> GetTestdrivefeedback(Guid id);
        /// <summary>
        /// 试乘试驾新增修改
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> AddOrEdit(DriveRecordAddOrEditRequest request);

        /// <summary>
        /// 试乘试驾查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryDriveCarList(TestDriveCarRequest request);

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryDriveRouteList(DriveRouteRequest request);

        /// <summary>
        /// 查询试乘试驾附件
        /// </summary>
        /// <param name="driverecordid"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryAttachment(string driverecordid);
    }
}
