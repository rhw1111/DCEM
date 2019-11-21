//==============================================
//文件名：IInstallationRepository.cs
//功能描述：安装单接口实体xml接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IInstallationRepository
    {
        /// <summary>
        /// 获取勘测单列表
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        string GetSurveyorderList(SurveyorderListRequest _request);
        /// <summary>
        /// 获取勘测单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        string GetSurveyorderDetail(Guid guid);

        /// <summary>
        /// 获取安装单列表
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        string GetInstallationorderList(InstallationorderRequest _request);

        /// <summary>
        /// 获取安装单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        string GetInstallationorderDetail(Guid guid);
    }
}
