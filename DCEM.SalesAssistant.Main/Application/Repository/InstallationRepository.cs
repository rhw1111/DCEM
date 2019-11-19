//==============================================
//文件名：InstallationRepository.cs
//功能描述：安装单接口实体xml
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class InstallationRepository: IInstallationRepository
    {
        /// <summary>
        /// 勘测单列表接口查询对象
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public string GetSurveyorderList(SurveyorderListRequest _request) {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(_request.SearchKey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_username' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_userphone' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_installationaddress' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"</filter>";
            }
            if (_request.mcs_dealerid != null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_dealer' operator='eq' value='{_request.mcs_dealerid}' />";
                if (_request.mcs_surveystatus != 0)
                    filter += $"<condition attribute='mcs_surveystatus' operator='eq' value='{_request.mcs_surveystatus}' />";
                filter += $"</filter>";
            }
            else {
                if (_request.mcs_surveystatus != 0) {
                    filter += $"<filter type='and'>";
                    filter += $"<condition attribute='mcs_surveystatus' operator='eq' value='{_request.mcs_surveystatus}' />";
                    filter += $"</filter>";
                }
            }

            var fetchString = $@"<fetch version='1.0' count='{_request.PageSize}' page='{_request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_surveyorder'>
                <attribute name='mcs_surveyorderid' />
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_username' />
                <attribute name='mcs_userphone' />
                <attribute name='mcs_dealer' />
                <attribute name='mcs_surveystatus' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";



            return fetchString;

        }
    }
}
