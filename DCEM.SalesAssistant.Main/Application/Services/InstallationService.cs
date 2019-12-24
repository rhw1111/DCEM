//==============================================
//文件名：InstallationService.cs
//功能描述：安装单接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.ViewModel.Request;
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
    public class InstallationService: IInstallationService
    {
        private CrmService _crmService;
        private CrmRequestHelper helper=new CrmRequestHelper();
        private IInstallationRepository _InstallationRepository;

        public InstallationService(CrmService crmService, IInstallationRepository installationRepository)
        {
            _crmService = crmService;
            _InstallationRepository = installationRepository;
        }
        /// <summary>
        /// 勘测单列表查询
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetSurveyorderList(SurveyorderListRequest _request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null)
                    _request.mcs_dealerid = userInfo.mcs_dealerid;
                var fetchString = _InstallationRepository.GetSurveyorderList(_request);
               
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_surveyorder",
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo != null ? userInfo.systemuserid : null
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = _request.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// 获取勘测单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetSurveyorderDetail(string guid) {

            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var fetchString = _InstallationRepository.GetSurveyorderDetail(Guid.Parse(guid));
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchResponse = await helper.ExecuteAsync(_crmService, "mcs_surveyorder", fetchXdoc);
                if (fetchResponse!=null && fetchResponse.Results.Count>0) {
                    var item = fetchResponse.Results[0];
                    var crmEntity = new CrmEntity(item.EntityName, item.Id);
                    crmEntity.Attributes = item.Attributes;
                    crmEntity.IsActivity = item.IsActivity;
                    crmEntity.Version = item.Version;
                    return crmEntity;

                }
                else
                    return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        #region 勘测单新增或编辑
        /// <summary>
        /// 勘测单新增或编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrEditSurveyorder(SurveyorderMetadataModel request)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            try
            {
                Guid guid = string.IsNullOrEmpty(request.mcs_surveyorderid) ? Guid.NewGuid() : Guid.Parse(request.mcs_surveyorderid);
                CrmExecuteEntity Entity = new CrmExecuteEntity("mcs_surveyorder", guid);
                if (!string.IsNullOrEmpty(request.mcs_surveyordertype.ToString()))
                {
                    Entity.Attributes.Add("mcs_surveyordertype", request.mcs_surveyordertype);
                }
                if (!string.IsNullOrEmpty(request.mcs_accountid))
                {
                    Entity.Attributes.Add("mcs_accountid", new CrmEntityReference("account", Guid.Parse(request.mcs_accountid)));
                }     
                if (!string.IsNullOrEmpty(request.mcs_username))
                {
                    Entity.Attributes.Add("mcs_username", request.mcs_username);
                }
                if (!string.IsNullOrEmpty(request.mcs_userphone))
                {
                    Entity.Attributes.Add("mcs_userphone", request.mcs_userphone);
                }
                if (!string.IsNullOrEmpty(request.mcs_idcard))
                {
                    Entity.Attributes.Add("mcs_idcard", request.mcs_idcard);
                }
                if (!string.IsNullOrEmpty(request.mcs_email))
                {
                    Entity.Attributes.Add("mcs_email", request.mcs_email);
                }
                if (!string.IsNullOrEmpty(request.mcs_carmodelid))
                {
                    Entity.Attributes.Add("mcs_carmodelid", new CrmEntityReference("mcs_carmodel", Guid.Parse(request.mcs_carmodelid)));
                }
                if (!string.IsNullOrEmpty(request.mcs_dealer))
                {
                    Entity.Attributes.Add("mcs_dealer", new CrmEntityReference("mcs_dealer", Guid.Parse(request.mcs_dealer)));
                }
                if (!string.IsNullOrEmpty(request.mcs_salesconsultant))
                {
                    Entity.Attributes.Add("mcs_salesconsultant", new CrmEntityReference("systemuser", Guid.Parse(request.mcs_salesconsultant)));
                }
                if (!string.IsNullOrEmpty(request.mcs_contactname))
                {
                    Entity.Attributes.Add("mcs_contactname", request.mcs_contactname);
                }
                if (!string.IsNullOrEmpty(request.mcs_contactphone))
                {
                    Entity.Attributes.Add("mcs_contactphone", request.mcs_contactphone);
                }
                if (!string.IsNullOrEmpty(request.mcs_contactemail))
                {
                    Entity.Attributes.Add("mcs_contactemail", request.mcs_contactemail);
                }
                if (!string.IsNullOrEmpty(request.mcs_province))
                {
                    Entity.Attributes.Add("mcs_province", new CrmEntityReference("mcs_sysarea", Guid.Parse(request.mcs_province)));
                }
                if (!string.IsNullOrEmpty(request.mcs_city))
                {
                    Entity.Attributes.Add("mcs_city", new CrmEntityReference("mcs_sysarea", Guid.Parse(request.mcs_city)));
                }
                if (!string.IsNullOrEmpty(request.mcs_area))
                {
                    Entity.Attributes.Add("mcs_area", new CrmEntityReference("mcs_sysarea", Guid.Parse(request.mcs_area)));
                }
                if (!string.IsNullOrEmpty(request.mcs_installationaddress))
                {
                    Entity.Attributes.Add("mcs_installationaddress", request.mcs_installationaddress);
                }
                if (!string.IsNullOrEmpty(request.mcs_detailaddress))
                {
                    Entity.Attributes.Add("mcs_detailaddress", request.mcs_detailaddress);
                }
                if (!string.IsNullOrEmpty(request.mcs_chargingpilemodel))
                {
                    Entity.Attributes.Add("mcs_chargingpilemodel", new CrmEntityReference("mcs_mc_chargingpilemodel", Guid.Parse(request.mcs_chargingpilemodel)));
                }
                if (!string.IsNullOrEmpty(request.mcs_communityname))
                {
                    Entity.Attributes.Add("mcs_communityname", request.mcs_communityname);
                }
                if (!string.IsNullOrEmpty(request.mcs_residentialnature.ToString()))
                {
                    Entity.Attributes.Add("mcs_residentialnature", request.mcs_residentialnature);
                }
                if (!string.IsNullOrEmpty(request.mcs_price.ToString()))
                {
                    Entity.Attributes.Add("mcs_price", request.mcs_price);
                }
                if (!string.IsNullOrEmpty(request.mcs_parkingspace.ToString()))
                {
                    Entity.Attributes.Add("mcs_parkingspace", request.mcs_parkingspace);
                }
                if (!string.IsNullOrEmpty(request.mcs_residentialtype.ToString()))
                {
                    Entity.Attributes.Add("mcs_residentialtype", request.mcs_residentialtype);
                }
                if (!string.IsNullOrEmpty(request.mcs_remark))
                {
                    Entity.Attributes.Add("mcs_remark", request.mcs_remark);
                }

                if (!string.IsNullOrEmpty(request.mcs_surveyorderid))
                {
                    await _crmService.Update(Entity, userInfo?.systemuserid);
                }
                else
                {
                    guid = await _crmService.Create(Entity, userInfo?.systemuserid);
                }

                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }
            catch (Exception ex)
            {
                validateResult.Result = false;
                validateResult.Description = "操作失败，原因：" + ex.Message;
                throw ex;
            }


            return validateResult;
        }
        #endregion

        /// <summary>
        /// 安装单列表查询
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationorderList(InstallationorderRequest _request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                if (userInfo != null)
                    _request.mcs_dealerid = userInfo.mcs_dealerid;
                var fetchString = _InstallationRepository.GetInstallationorderList(_request);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_installationorder",
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo != null ? userInfo.systemuserid : null
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = _request.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 获取安装单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetInstallationorderDetail(string guid) {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var fetchString = _InstallationRepository.GetInstallationorderDetail(Guid.Parse(guid));
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchResponse = await helper.ExecuteAsync(_crmService, "mcs_installationorder", fetchXdoc);
                if (fetchResponse != null && fetchResponse.Results.Count > 0)
                {
                    var item = fetchResponse.Results[0];
                    var crmEntity = new CrmEntity(item.EntityName, item.Id);
                    crmEntity.Attributes = item.Attributes;
                    crmEntity.IsActivity = item.IsActivity;
                    crmEntity.Version = item.Version;
                    return crmEntity;

                }
                else
                    return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// 获取安装单进程列表
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationProcess(InstallationorderDetailRequest _request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var fetchString = _InstallationRepository.GetInstallationProcess(Guid.Parse(_request.Guid));
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchResponse = await helper.ExecuteAsync(_crmService, "mcs_installationprogress", fetchXdoc);

                if (fetchResponse != null && fetchResponse.Results.Count > 0)
                {
                    var queryResult = new QueryResult<CrmEntity>();
                    queryResult.Results = fetchResponse.Results;
                    return queryResult;

                }
                else
                    return null; 
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 获取安装单用户反馈列表
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationUser(InstallationorderDetailRequest _request) {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var fetchString = _InstallationRepository.GetInstallationUser(Guid.Parse(_request.Guid));
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchResponse = await helper.ExecuteAsync(_crmService, "mcs_surveysatisfaction", fetchXdoc);

                if (fetchResponse != null && fetchResponse.Results.Count > 0)
                {
                    var queryResult = new QueryResult<CrmEntity>();
                    queryResult.Results = fetchResponse.Results;
                    return queryResult;

                }
                else
                    return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
