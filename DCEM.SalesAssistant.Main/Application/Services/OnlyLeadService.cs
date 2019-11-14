using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using System.Threading.Tasks;
using System.Xml.Linq;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class OnlyLeadService : IOnlyLeadService
    {
        private CrmService _crmService;
        private IOnlyLeadRepository _onlyLeadRepository;

        public OnlyLeadService(CrmService crmService, IOnlyLeadRepository onlyLeadRepository)
        {
            _crmService = crmService;
            _onlyLeadRepository = onlyLeadRepository;
        }

        /// <summary>
        /// 唯一线索列表查询
        /// </summary>
        /// <param name="onlyLeadRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(OnlyLeadRequest onlyLeadRequest)
        {
            try
            {
                var fetchString = _onlyLeadRepository.QueryList(onlyLeadRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_onlylead",
                    FetchXml = fetchXdoc,
                    ProxyUserId = Guid.Parse(onlyLeadRequest.UserId)
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = onlyLeadRequest.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #region 唯一线索详情查询
        /// <summary>
        /// 唯一线索详情查询
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetOnlyLeadDetail(string entityid)
        {
            try
            {
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });

                //var fetchString = _onlyLeadRepository.GetOnlyLeadDetail(entityid);
                CrmEntity entity = null;
                entity = await _crmService.Retrieve("mcs_onlylead", Guid.Parse(entityid), "", null, dicHead);
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region 查询跟进记录（logcall）
        /// <summary>
        /// 查询与唯一线索关联的跟进记录（logcall）
        /// </summary>
        /// <param name="activityrequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetLogCallList(LogCallRequest logcallrequest)
        {
            try
            {
                var fetchString = _onlyLeadRepository.GetLogCallList(logcallrequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_logcall",
                    FetchXml = fetchXdoc,
                    ProxyUserId = Guid.Parse(logcallrequest.UserId)
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = logcallrequest.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region 根据主键id
        #endregion

        #region 查询培育任务
        /// <summary>
        /// 查询与唯一线索关联的培育任务
        /// </summary>
        /// <param name="logcallrequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetActivityList(ActivityRequest activityrequest)
        {
            try
            {
                var fetchString = _onlyLeadRepository.GetActivityList(activityrequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_activity",
                    FetchXml = fetchXdoc,
                    ProxyUserId = Guid.Parse(activityrequest.UserId)
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = activityrequest.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #endregion

        #region 新增或编辑 logcall 
        /// <summary>
        /// 新增或编辑 logcall 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrEditEntity(LogCallRequest request)
        {
            var validateResult = new ValidateResult<CrmEntity>();

            try
            {
                Guid guid = string.IsNullOrEmpty(request.mcs_logcallid) ? Guid.NewGuid() : Guid.Parse(request.mcs_logcallid);
                CrmExecuteEntity Entity = new CrmExecuteEntity("mcs_logcall", guid);
                if (!string.IsNullOrEmpty(request.entityid))
                {
                    Entity.Attributes.Add("mcs_onlyleadid", new CrmEntityReference("mcs_onlylead", Guid.Parse(request.entityid)));
                }
                if (!string.IsNullOrEmpty(request.mcs_content))
                {
                    Entity.Attributes.Add("mcs_content", request.mcs_content);
                }
                if (!string.IsNullOrEmpty(request.mcs_fullname))
                {
                    Entity.Attributes.Add("mcs_fullname", request.mcs_fullname);
                }
                if (!string.IsNullOrEmpty(request.mcs_mobilephone))
                {
                    Entity.Attributes.Add("mcs_mobilephone", request.mcs_mobilephone);
                }
                if (!string.IsNullOrEmpty(request.mcs_results))
                {
                    Entity.Attributes.Add("mcs_results", request.mcs_results);
                }
                if (request.mcs_visittime.HasValue)
                {
                    Entity.Attributes.Add("mcs_visittime", request.mcs_visittime.Value);
                }

                if (!string.IsNullOrEmpty(request.mcs_logcallid))
                {
                    await _crmService.Update(Entity);
                }
                else
                {
                    guid = await _crmService.Create(Entity);
                }

                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }
            catch (Exception ex)
            {
                validateResult.Result = false;
                validateResult.Description = "操作失败，原因："+ex.Message;
                throw ex;
            }


            return validateResult;
        }
        #endregion
        /// <summary>
        /// 唯一线索编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> Edit(OnlyLeadEditRequest request)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = new CrmEntity("mcs_onlylead", request.onlylead.mcs_onlyleadid);
            //新增预约单
            if (request.actioncode == 2)
            {
                var updateEntity = new CrmExecuteEntity("mcs_onlylead", request.onlylead.mcs_onlyleadid);
               
                BasicAssignment(updateEntity, request);
                await _crmService.Update(updateEntity,request.onlylead.systemuserid);
                reusetCrmEntity.Id = updateEntity.Id;
            }
           
            validateResult.Data = reusetCrmEntity;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }

        /// <summary>
        /// 基础字段
        /// </summary>
        /// <param name="updateEntity"></param>
        /// <param name="request"></param>
        private void BasicAssignment(CrmExecuteEntity updateEntity, OnlyLeadEditRequest request)
        {
            // 姓名
            if (!string.IsNullOrWhiteSpace(request.onlylead.mcs_name))
            {
                updateEntity.Attributes.Add("mcs_name", request.onlylead.mcs_name);
            }
            // 线索来源
            if (request.onlylead.mcs_leadorigin!=null)
            {
                updateEntity.Attributes.Add("mcs_leadorigin", request.onlylead.mcs_leadorigin);
            }
            // 性别
            if (request.onlylead.mcs_gender != null)
            {
                updateEntity.Attributes.Add("mcs_gender", request.onlylead.mcs_gender);
            }
            // 邮箱
            if (!string.IsNullOrWhiteSpace(request.onlylead.mcs_emailaddress1))
            {
                updateEntity.Attributes.Add("mcs_name", request.onlylead.mcs_emailaddress1);
            }
            // 评分
            if (request.onlylead.mcs_accountpoints != null)
            {
                updateEntity.Attributes.Add("mcs_accountpoints", request.onlylead.mcs_accountpoints);
            }
            // 用车省份
            if (!string.IsNullOrWhiteSpace(request.onlylead.mcs_usecarprovince))
            {
                updateEntity.Attributes.Add("mcs_usecarprovince", request.onlylead.mcs_usecarprovince);
            }
            // 用车城市
            if (!string.IsNullOrWhiteSpace(request.onlylead.mcs_usecarcity))
            {
                updateEntity.Attributes.Add("mcs_usecarcity", request.onlylead.mcs_usecarcity);
            }
            // 省份ID
            if (request.onlylead.mcs_provinceid != null)
            {
                var provinceEntityRf = new CrmEntityReference("mcs_sysarea", (Guid)request.onlylead.mcs_provinceid);
                updateEntity.Attributes.Add("mcs_provinceid", provinceEntityRf);
            }
            // 市ID
            if (request.onlylead.mcs_cityid != null)
            {
                var cityEntityRf = new CrmEntityReference("mcs_sysarea", (Guid)request.onlylead.mcs_cityid);
                updateEntity.Attributes.Add("mcs_cityid", cityEntityRf);
            }
            // 区ID
            if (request.onlylead.mcs_districtid != null)
            {
                var districtEntityRf = new CrmEntityReference("mcs_sysarea", (Guid)request.onlylead.mcs_districtid);
                updateEntity.Attributes.Add("mcs_districtid", districtEntityRf);
            }

        }
    }
}
