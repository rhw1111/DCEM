﻿using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class OriginalclueService : IOriginalclueService
    {
        private ICrmService _crmService;
        private IOriginalclueRepository _originalclueRepository;
        private ICustomerLabelRepository _customerLabelRepository;
        private const string entityName = "lead";
        private const string tagEntityName = "mcs_tag";
        public OriginalclueService(ICrmService crmService, IOriginalclueRepository originalclueRepository, ICustomerLabelRepository customerLabelRepository)
        {
            _crmService = crmService;
            _originalclueRepository = originalclueRepository;
            _customerLabelRepository = customerLabelRepository;
        }
        /// <summary>
        /// 获取原始线索列表数据
        /// </summary>
        public async Task<OriginalclueListResponse> GetOriginalclueList(OriginalclueListRequest originalclueListRequest)
        {
            try
            {
                var response = new OriginalclueListResponse() { };
                var fetchXdoc = await _originalclueRepository.GetGetQueryListFetchXml(originalclueListRequest);
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
                response.originalclues = entities.Results;
                response.ALLTotalCount = entities.Count;
                response.PageSize = originalclueListRequest.PageSize;
                response.CurrentPage = originalclueListRequest.PageIndex;
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// 获取原始线索详情
        /// </summary>  
        public async Task<CrmEntity> Get(OriginalclueDetailRequest originalclueDetailRequest)
        {
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(originalclueDetailRequest.Id), Guid.Parse(originalclueDetailRequest.UserId));
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// 创建原始线索
        /// </summary>
        public async Task<OriginalclueCreateResponse> create(OriginalclueCreateRequest originalclueCreateRequest)
        {
            try
            {
                var createEntity = new CrmExecuteEntity(entityName, Guid.NewGuid());
               
                createEntity.Attributes.Add("lastname", originalclueCreateRequest.username);
                createEntity.Attributes.Add("mobilephone", originalclueCreateRequest.mobile);
                if (!string.IsNullOrEmpty(originalclueCreateRequest.mail))
                {
                    createEntity.Attributes.Add("emailaddress1", originalclueCreateRequest.mail);
                }
                createEntity.Attributes.Add("mcs_leadorigin", Int32.Parse(originalclueCreateRequest.clues));
                createEntity.Attributes.Add("mcs_accountpoints", Int32.Parse(originalclueCreateRequest.score));
                createEntity.Attributes.Add("description", originalclueCreateRequest.describe);
                createEntity.Attributes.Add("mcs_gender", originalclueCreateRequest.gender);
                if (!string.IsNullOrWhiteSpace(originalclueCreateRequest.province))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(originalclueCreateRequest.province));
                    createEntity.Attributes.Add("mcs_provinceid", salesarea);
                }
                if (!string.IsNullOrWhiteSpace(originalclueCreateRequest.city))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(originalclueCreateRequest.city));
                    createEntity.Attributes.Add("mcs_cityid", salesarea);
                }
                if (!string.IsNullOrWhiteSpace(originalclueCreateRequest.area))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(originalclueCreateRequest.area));
                    createEntity.Attributes.Add("mcs_districtid", salesarea);
                }
                var dealer = new CrmEntityReference("mcs_dealer", Guid.Parse(originalclueCreateRequest.dealerid));
                createEntity.Attributes.Add("mcs_dealerid", dealer);
                
                //var mcs_behaviorEntityRefence = new CrmEntityReference("mcs_behavior", Guid.Parse(originalclueCreateRequest.behaviorid));

                var mcs_behaviorEntityRefence=await GetBehaviorEntityByCode(originalclueCreateRequest.behaviorcode);
                if (mcs_behaviorEntityRefence!=null)
                {
                    createEntity.Attributes.Add("mcs_behaviorid", mcs_behaviorEntityRefence);
                }
                var entityId = await _crmService.Create(createEntity, Guid.Parse(originalclueCreateRequest.UserId));
                return new OriginalclueCreateResponse() { Id = entityId.ToString() };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// 获取客户标签
        /// </summary>
        /// <returns></returns>
        public async Task<CustomerlabelListResponse> GetCustomerLabelList(CustomerlabelListRequest customerlabelListRequest)
        {
            try
            {
                var response = new CustomerlabelListResponse() { };
                var fetchXdoc = await _customerLabelRepository.GetAll();
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, tagEntityName, fetchXdoc, Guid.Parse(customerlabelListRequest.UserId));
                response.customerlabels = entities.Results;
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #region 私有方法
        private async Task<CrmEntityReference> GetBehaviorEntityByCode(string code)
        {
            CrmEntityReference referenceEntity = null;
            try
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_behavior'>
    <attribute name='mcs_behaviorid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <order attribute='mcs_name' descending='false' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='mcs_code' operator='eq' value='{code}' />
    </filter>
  </entity>
</fetch>";
               var fetchXdoc=  XDocument.Parse(fetchXml);
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_behavior", fetchXdoc);
                if (entities!=null && entities.Results[0]!=null)
                {
                    var  entity = entities.Results[0];
                    referenceEntity = new CrmEntityReference(entity.EntityName, entity.Id);
                }
            }
            catch (Exception ex)
            {
                referenceEntity = null;
            }
            return referenceEntity;
        }
        #endregion
    }
}
