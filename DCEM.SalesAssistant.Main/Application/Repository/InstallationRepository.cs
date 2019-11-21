﻿//==============================================
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
    public class InstallationRepository : IInstallationRepository
    {
        /// <summary>
        /// 勘测单列表接口查询对象
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public string GetSurveyorderList(SurveyorderListRequest _request)
        {
            var filter = string.Empty;
            //if (_request.mcs_dealerid != null)
            //    filter += $"<condition attribute='mcs_dealer' operator='eq' value='{_request.mcs_dealerid}' />";
            if (_request.mcs_surveystatus != 0)
                filter += $"<condition attribute='mcs_surveystatus' operator='eq' value='{_request.mcs_surveystatus}' />";
            if (!string.IsNullOrWhiteSpace(_request.SearchKey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_username' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_userphone' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_installationaddress' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"</filter>";
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

        /// <summary>
        /// 获取勘测单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public string GetSurveyorderDetail(Guid guid)
        {
            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_surveyorder'>
                    <all-attributes/>
                    <filter type='and'>
                        <condition attribute='mcs_surveyorderid' operator='eq' value='{guid.ToString()}' />
                    </filter>
                   </entity>
                   </fetch>";
            return fetchString;

        }

        /// <summary>
        /// 获取安装单列表
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        public string GetInstallationorderList(InstallationorderRequest _request)
        {
            var filter = string.Empty;
            //if (_request.mcs_dealerid != null)
            //    filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{_request.mcs_dealerid}' />";
            if (_request.mcs_installationstatus != 0)
                filter += $"<condition attribute='mcs_installationstatus' operator='eq' value='{_request.mcs_installationstatus}' />";
            if (!string.IsNullOrWhiteSpace(_request.SearchKey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_username' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_userphone' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"<condition attribute='mcs_detailaddress' operator='like' value='%{_request.SearchKey}%' />";
                filter += $"</filter>";
            }


            var fetchString = $@"<fetch version='1.0' count='{_request.PageSize}' page='{_request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_installationorder'>
                <attribute name='mcs_installationorderid' />
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_username' />
                <attribute name='mcs_userphone' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_installationstatus' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";



            return fetchString;

        }

        /// <summary>
        /// 获取安装单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public string GetInstallationorderDetail(Guid guid) {
            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_installationorder'>
                    <all-attributes/>
                    <filter type='and'>
                        <condition attribute='mcs_installationorderid' operator='eq' value='{guid.ToString()}' />
                    </filter>
                   </entity>
                   </fetch>";
            return fetchString;
        }
    }



}
