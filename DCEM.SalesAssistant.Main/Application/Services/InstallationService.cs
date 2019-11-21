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
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_surveyorder",
                    FetchXml = fetchXdoc,
                    ProxyUserId = userInfo != null ? userInfo.systemuserid : null
                };
                var fetchResponse = await helper.ExecuteAsync(_crmService, "mcs_surveyorder", fetchXdoc);
                //var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
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
    }
}
