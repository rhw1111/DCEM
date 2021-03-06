﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;
using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.DTOModel;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class AppointmentInfoService : IAppointmentInfoService
    {
        private ICrmService _crmService;
        private IAppointmentInfoRepository _appointmentInfoRepository;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;

        public AppointmentInfoService(CrmService crmService, IAppointmentInfoRepository appointmentInfoRepository)
        {
            _crmService = crmService;
            _appointmentInfoRepository = appointmentInfoRepository;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        /// <summary>
        /// 预约列表查询
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        public async Task<AppointmentInfoListResponse<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                #region 查询结果集
                var fetchString = _appointmentInfoRepository.QueryListByPage(filterstr);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询总条数
                var status = 0;
                var fetchAllTotalCountString=_appointmentInfoRepository.QueryListByCount(filterstr, status);
                var fetchAllTotalXdoc = XDocument.Parse(fetchAllTotalCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchAllTotalXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var allTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询待跟进总条数
                status = 10;
                var fetchFollowingCountString = _appointmentInfoRepository.QueryListByCount(filterstr, status);
                var fetchFollowingXdoc = XDocument.Parse(fetchFollowingCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchFollowingXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var FollowingCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询已跟进总条数
                status = 20;
                var fetchFollowedCountString = _appointmentInfoRepository.QueryListByCount(filterstr, status);
                var fetchFollowedXdoc = XDocument.Parse(fetchFollowedCountString);
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchFollowedXdoc,
                    ProxyUserId = userInfo?.systemuserid
                };
                fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                fetchResponse = await _crmService.Execute(fetchRequest);
                var FollowedCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                var queryResult = new AppointmentInfoListResponse<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = filterstr.page;
                queryResult.ALLTotalCount = (int)allTotalCountResults.Value.Results[0].Attributes["count"];
                queryResult.FollowingCount = (int)FollowingCountResults.Value.Results[0].Attributes["count"];
                queryResult.FollowedCount= (int)FollowedCountResults.Value.Results[0].Attributes["count"];
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 预约记录明细
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QueryDetail(string entityid)
        {
            try
            {
                var fetchString = _appointmentInfoRepository.QueryDetail(entityid);
                CrmEntity entity = null;
                entity = await _crmService.Retrieve("mcs_appointmentinfo", Guid.Parse(entityid), fetchString, null, dicHead);
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 获取预约跟进记录
        /// </summary>
        /// <param name="logRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetLog(AppointmentInfoLogRequest logRequest)
        {
            try
            {
                var fetchString = _appointmentInfoRepository.Querylog(logRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfolog",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = logRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 获取预约时段配置记录
        /// </summary>
        /// <param name="appointmentConfiggRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetConfig(AppointmentConfigRequest appointmentConfiggRequest)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
                {
                    appointmentConfiggRequest.mcs_dealerid = Guid.Parse(userInfo.mcs_dealerid);
                }
                var fetchString = _appointmentInfoRepository.GetConfig(appointmentConfiggRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentconfig",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = appointmentConfiggRequest.page;
                queryResult.TotalCount = 0;
                
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 预约单创建与修改(包括取消预约)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrEdit(AppointmentInfoAddOrEditRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            if (userInfo != null && !string.IsNullOrWhiteSpace(userInfo.mcs_dealerid))
            {
                request.appointmentinfo.mcs_dealerid = Guid.Parse(userInfo.mcs_dealerid);
            }
            if (userInfo != null && userInfo.systemuserid!=null)
            {
                request.appointmentinfo.mcs_serviceadvisorid = userInfo.systemuserid;
            }
            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = new CrmEntity("mcs_appointmentinfo", new Guid());
            //新增预约单
            if (request.appointmentinfo.mcs_appointmentinfoid ==null)
            {
                var createEntity = new CrmExecuteEntity("mcs_appointmentinfo", Guid.NewGuid());
                //预约状态 创建默认是待跟进
                createEntity.Attributes.Add("mcs_status", 10);
                BasicAssignment(createEntity, request);
                var reuset = await _crmService.Create(createEntity, userInfo?.systemuserid);
                reusetCrmEntity.Id = createEntity.Id;
            }
            //编辑预约单
            if (request.appointmentinfo.mcs_appointmentinfoid !=null)
            {
                var updateEntity = new CrmExecuteEntity("mcs_appointmentinfo", (Guid)request.appointmentinfo.mcs_appointmentinfoid);
                //预约状态
                if (request.appointmentinfo.mcs_status != null)
                {
                    updateEntity.Attributes.Add("mcs_status", request.appointmentinfo.mcs_status);
                }
                BasicAssignment(updateEntity, request);
                await _crmService.Update(updateEntity, userInfo?.systemuserid);
                reusetCrmEntity.Id = (Guid)request.appointmentinfo.mcs_appointmentinfoid;
            }
            validateResult.Data = reusetCrmEntity;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }

        /// <summary>
        /// 预约单基础数据赋值
        /// </summary>
        /// <param name="createEntity"></param>
        /// <param name="request"></param>
        private CrmExecuteEntity BasicAssignment(CrmExecuteEntity entity, AppointmentInfoAddOrEditRequest request)
        {
            //VIN码
            if (request.appointmentinfo.mcs_customerid != null)
            {
                var vinEntityRef = new CrmEntityReference("mcs_vehowner", (Guid)request.appointmentinfo.mcs_customerid);
                entity.Attributes.Add("mcs_customerid", vinEntityRef);
            }
            //车主
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_customername))
            {

                entity.Attributes.Add("mcs_customername", request.appointmentinfo.mcs_customername);
            }
            //车牌
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_carplate))
            {
                entity.Attributes.Add("mcs_carplate", request.appointmentinfo.mcs_carplate);
            }
            //车型
            if (request.appointmentinfo.mcs_cartype !=null)
            {
                var carTypeEntityRef = new CrmEntityReference("mcs_carmodel", (Guid)request.appointmentinfo.mcs_cartype);
                entity.Attributes.Add("mcs_cartype", carTypeEntityRef);
            }
            //手机号
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_customerphone))
            {
                entity.Attributes.Add("mcs_customerphone", request.appointmentinfo.mcs_customerphone);
            }
            //客户标签
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_tag))
            {
                entity.Attributes.Add("mcs_tag", request.appointmentinfo.mcs_tag);
            }
            //预约服务类型
            if (request.appointmentinfo.mcs_ordertype != null)
            {
                entity.Attributes.Add("mcs_ordertype", request.appointmentinfo.mcs_ordertype);
            }
            //预约日期
            if (request.appointmentinfo.mcs_appointmentat != null)
            {
                var mcs_appointmentat = request.appointmentinfo.mcs_appointmentat.Value.ToUniversalTime();//.ToString("yyyy-MM-dd");
                entity.Attributes.Add("mcs_appointmentat", mcs_appointmentat);
            }
            //预约时段
            if (request.appointmentinfo.mcs_appointmentconfigid !=null)
            {
                var configEntityRef = new CrmEntityReference("mcs_appointmentconfig", (Guid)request.appointmentinfo.mcs_appointmentconfigid);
                entity.Attributes.Add("mcs_appointmentconfigid", configEntityRef);
            }
            //可预约数量
            if (request.appointmentinfo.mcs_surplusnum != null)
            {
                entity.Attributes.Add("mcs_surplusnum", request.appointmentinfo.mcs_surplusnum);
            }
            //客户要求
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_customercomment))
            {
                entity.Attributes.Add("mcs_customercomment", request.appointmentinfo.mcs_customercomment);
            }
            //问题描述
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_appointmendescript))
            {
                entity.Attributes.Add("mcs_appointmendescript", request.appointmentinfo.mcs_appointmendescript);
            }
            //取消原因
            if (request.appointmentinfo.mcs_cancelreasonnew != null)
            {
                entity.Attributes.Add("mcs_cancelreasonnew", request.appointmentinfo.mcs_cancelreasonnew);
            }
            //取消描述
            if (!string.IsNullOrWhiteSpace(request.appointmentinfo.mcs_canceldes))
            {
                entity.Attributes.Add("mcs_canceldes", request.appointmentinfo.mcs_canceldes);
            }
          
            //预约厅店
            if (request.appointmentinfo.mcs_dealerid != null)
            {
                var dealerEntityEF = new CrmEntityReference("mcs_dealer", (Guid)request.appointmentinfo.mcs_dealerid);
                entity.Attributes.Add("mcs_dealerid", dealerEntityEF);
            }
            //服务顾问
            if (request.appointmentinfo.mcs_serviceadvisorid != null)
            {
                var systemUserEntityEF = new CrmEntityReference("systemuser", (Guid)request.appointmentinfo.mcs_serviceadvisorid);
                entity.Attributes.Add("mcs_serviceadvisorid", systemUserEntityEF);
            }

            return entity;
        }
    }
}
