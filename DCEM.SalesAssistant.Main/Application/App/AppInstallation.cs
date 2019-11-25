//==============================================
//文件名：AppInstallation.cs
//功能描述：安装单接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppInstallation: IAppInstallation
    {
        private IInstallationService _installService;

        public AppInstallation(IInstallationService installService)
        {
            _installService = installService;
        }
        /// <summary>
        /// 勘测单列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetSurveyorderList(SurveyorderListRequest _request)
        {
            return await _installService.GetSurveyorderList(_request);
        }
        /// <summary>
        /// 勘测单详情接口
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetSurveyorderDetail(string guid)
        {
            return await _installService.GetSurveyorderDetail(guid);
        }
        /// <summary>
        /// 安装单列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationorderList(InstallationorderRequest _request)
        {
            return await _installService.GetInstallationorderList(_request);
        }

        /// <summary>
        /// 安装单详情接口
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetInstallationorderDetail(string guid)
        {
            return await _installService.GetInstallationorderDetail(guid);
        }

        /// <summary>
        /// 获取安装单进程列表
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationProcess(InstallationorderDetailRequest _request) {

            return await _installService.GetInstallationProcess(_request);
        }

        /// <summary>
        /// 获取安装单用户反馈列表
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetInstallationUser(InstallationorderDetailRequest _request) {
            return await _installService.GetInstallationUser(_request);
        }
    }
}
