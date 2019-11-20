using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class DriveRecordService : IDriveRecordService
    {
        private CrmService _crmService;
        private IDriveRecordRepository _driveRecordRepository;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;

        public DriveRecordService(CrmService crmService, IDriveRecordRepository driveRecordRepository)
        {
            _crmService = crmService;
            _driveRecordRepository = driveRecordRepository;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        /// <summary>
        /// 试乘试驾新增修改
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrEdit(DriveRecordAddOrEditRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
            {
                request.driveRecord.DealerId = Guid.Parse(userInfo.mcs_dealerid);
            }
            if (userInfo != null && userInfo.systemuserid != null)
            {
                request.driveRecord.ConsultantId = userInfo.systemuserid;
            }
            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = new CrmEntity("mcs_driverecord", new Guid());
            //新增预约单
            if (request.driveRecord.DriveRecordId == null)
            {
                var createEntity = new CrmExecuteEntity("mcs_driverecord", Guid.NewGuid());
                //预约状态 创建默认是已提交
                createEntity.Attributes.Add("mcs_status", 10);
                BasicAssignment(createEntity, request);
                var reuset = await _crmService.Create(createEntity, userInfo.systemuserid);
                reusetCrmEntity.Id = createEntity.Id;
            }
            //编辑预约单
            if (request.driveRecord.DriveRecordId != null)
            {
                var updateEntity = new CrmExecuteEntity("mcs_driverecord", (Guid)request.driveRecord.DriveRecordId);
                //预约状态
                if (request.driveRecord.DriveStatus != null)
                {
                    updateEntity.Attributes.Add("mcs_status", request.driveRecord.DriveStatus);
                }
                BasicAssignment(updateEntity, request);
                await _crmService.Update(updateEntity, userInfo.systemuserid);
                reusetCrmEntity.Id = (Guid)request.driveRecord.DriveRecordId;
            }
            validateResult.Data = reusetCrmEntity;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }

        /// <summary>
        /// 基础字段赋值
        /// </summary>
        /// <param name="createEntity"></param>
        /// <param name="request"></param>
        private CrmExecuteEntity BasicAssignment(CrmExecuteEntity entity, DriveRecordAddOrEditRequest request)
        {
            //姓名
            if (!string.IsNullOrWhiteSpace(request.driveRecord.FullName))
            {
                entity.Attributes.Add("mcs_fullname", request.driveRecord.FullName);
            }
            //手机号
            if (!string.IsNullOrWhiteSpace(request.driveRecord.MobilePhone))
            {
                entity.Attributes.Add("mcs_mobilephone", request.driveRecord.MobilePhone);
            }
            //试驾车型
            if (request.driveRecord.CarModel != null)
            {
                var carModelEntityRef = new CrmEntityReference("mcs_carmodel", (Guid)request.driveRecord.CarModel);
                entity.Attributes.Add("mcs_carmodel", carModelEntityRef);
            }
            //业务类型
            if (request.driveRecord.BusinessType != null)
            {
                entity.Attributes.Add("mcs_businesstype", request.driveRecord.BusinessType);
            }
            //预约日期
            if (request.driveRecord.OrderTime != null)
            {
                var ordertime = request.driveRecord.OrderTime.Value.ToUniversalTime();
                entity.Attributes.Add("mcs_ordertime", ordertime);
            }
            //预约试驾时段
            if (request.driveRecord.TestDriveTime != null)
            {
                var configEntityRef = new CrmEntityReference("mcs_reservationconfiguration", (Guid)request.driveRecord.TestDriveTime);
                entity.Attributes.Add("mcs_testdrivetime", configEntityRef);
            }
            //预约厅店
            if (request.driveRecord.DealerId != null)
            {
                var dealerEntityEF = new CrmEntityReference("mcs_dealer", (Guid)request.driveRecord.DealerId);
                entity.Attributes.Add("mcs_dealerid", dealerEntityEF);
            }
            //销售顾问
            if (request.driveRecord.ConsultantId != null)
            {
                var systemUserEntityEF = new CrmEntityReference("systemuser", (Guid)request.driveRecord.ConsultantId);
                entity.Attributes.Add("mcs_consultantid", systemUserEntityEF);
            }
            return entity;
        }

        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<DriveRecordListResponse<CrmEntity>> QueryList(DriveRecordRequest request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
                {
                    // request.DealerId = Guid.Parse(userInfo.mcs_dealerid);
                }
                #region 查询结果集
                var fetchString = _driveRecordRepository.QueryList(request);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                //#region 查询总条数
                //var status = 0;
                //var fetchAllTotalCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchAllTotalXdoc = XDocument.Parse(fetchAllTotalCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchAllTotalXdoc,
                //    ProxyUserId = userInfo?.systemuserid
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var allTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                //#region 已提交
                //status = 10;
                //var fetchSubmittedCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchSubmittedXdoc = XDocument.Parse(fetchSubmittedCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchSubmittedXdoc,
                //     ProxyUserId = userInfo?.systemuserid
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var SubmittedCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                //#region 已排程
                //status = 12;
                //var fetchScheduledCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchScheduledXdoc = XDocument.Parse(fetchScheduledCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchScheduledXdoc,
                //    ProxyUserId = userInfo?.systemuserid
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var ScheduledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                //#region 已取消
                //status = 13;
                //var fetchCancelledCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchCancelledXdoc = XDocument.Parse(fetchCancelledCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchCancelledXdoc,
                //    ProxyUserId = userInfo?.systemuserid
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var CancelledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                //#region 开始试驾
                //status = 14;
                //var fetchCancelledCountString = _driveRecordRepository.QueryListByCount(request, status);
                //var fetchCancelledXdoc = XDocument.Parse(fetchCancelledCountString);
                //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                //{
                //    EntityName = "mcs_driverecord",
                //    FetchXml = fetchCancelledXdoc
                //};
                //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                //fetchResponse = await _crmService.Execute(fetchRequest);
                //var CancelledCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                //#endregion

                var queryResult = new DriveRecordListResponse<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageIndex;
                //queryResult.ALLTotalCount = (int)allTotalCountResults.Value.Results[0].Attributes["count"];
                //queryResult.ScheduledCount = (int)SubmittedCountResults.Value.Results[0].Attributes["count"];
                //queryResult.CancelledCount = (int)CancelledCountResults.Value.Results[0].Attributes["count"];
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 试乘试驾明细查询
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<DriverecordDetailResponse> GetDetail(Guid id)
        {

            try
            {

                DriverecordDetailResponse model = new DriverecordDetailResponse();
                var fetchXdoc = _driveRecordRepository.GetDriveRecordDetaill(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                model.Detail = detailResult.Value.Results[0];

                fetchXdoc = _driveRecordRepository.GetAttachmentDetaillFetchXml(id);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_attachment",
                    FetchXml = fetchXdoc.Result
                };
                fetchResponse = await _crmService.Execute(fetchRequest);
                detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                model.AttachmentDetail = detailResult.Value.Results;
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// 问题反馈
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<TestdrivefeedbackResponse> GetTestdrivefeedback(Guid id)
        {

            try
            {
                TestdrivefeedbackResponse model = new TestdrivefeedbackResponse();
                var fetchXdoc = _driveRecordRepository.GetTestdrivefeedback(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_testdrivefeedbackmaster",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                if (detailResult.Value.Results.Count > 0)
                {
                    model.Master = detailResult.Value.Results[0];
                    fetchXdoc = _driveRecordRepository.GetTestdrivefeedbackDetail(detailResult.Value.Results[0].Id);
                    fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                    {
                        EntityName = "mcs_testdrivefeedback",
                        FetchXml = fetchXdoc.Result
                    };
                    fetchResponse = await _crmService.Execute(fetchRequest);
                    detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                    model.Details = detailResult.Value.Results;
                }

                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 试乘试驾预约时段列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryReservationList(DriveReservationRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
            {
                // request.DealerId = Guid.Parse(userInfo.mcs_dealerid);
            }
            #region 查询结果集
            var fetchString = _driveRecordRepository.QueryReservationList(request);

            var fetchXdoc = XDocument.Parse(fetchString);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_reservationconfiguration",
                FetchXml = fetchXdoc,
                ProxyUserId = userInfo?.systemuserid
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = fetchResponseResult.Value.Results;
            queryResult.CurrentPage = request.PageIndex;
            queryResult.TotalCount = 0;
            return queryResult;
            #endregion
        }

        /// <summary>
        /// 试乘试驾车辆查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryDriveCarList(TestDriveCarRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
            {
                // request.DealerId = Guid.Parse(userInfo.mcs_dealerid);
            }
            #region 查询结果集
            var fetchString = _driveRecordRepository.QueryDriveCarList(request);

            var fetchXdoc = XDocument.Parse(fetchString);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_testdrivecar",
                FetchXml = fetchXdoc,
                ProxyUserId = userInfo?.systemuserid
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = fetchResponseResult.Value.Results;
            queryResult.CurrentPage = request.PageIndex;
            queryResult.TotalCount = 0;
            return queryResult;
            #endregion
        }

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryDriveRouteList(DriveRouteRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
            {
                // request.DealerId = Guid.Parse(userInfo.mcs_dealerid);
            }
            #region 查询结果集
            var fetchString = _driveRecordRepository.QueryDriveRouteList(request);

            var fetchXdoc = XDocument.Parse(fetchString);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_testdrivecar",
                FetchXml = fetchXdoc,
                ProxyUserId = userInfo?.systemuserid
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = fetchResponseResult.Value.Results;
            queryResult.CurrentPage = request.PageIndex;
            queryResult.TotalCount = 0;
            return queryResult;
            #endregion
        }
    }
}
