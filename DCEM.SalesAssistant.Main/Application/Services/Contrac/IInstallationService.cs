﻿//==============================================
//文件名：IInstallationService.cs
//功能描述：安装单接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IInstallationService
    {
        /// <summary>
        /// 勘测单列表查询
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetSurveyorderList(SurveyorderListRequest _request);

        /// <summary>
        /// 获取勘测单列表接口（全字段查询）
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetSurveyorderListAll(SurveyorderListRequest _request);

        /// <summary>
        /// 获取勘测单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        Task<CrmEntity> GetSurveyorderDetail(string guid);


        /// <summary>
        /// 勘测单新增或编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> AddOrEditSurveyorder(SurveyorderMetadataModel request);

        /// <summary>
        /// 安装单列表查询
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetInstallationorderList(InstallationorderRequest _request);

        /// <summary>
        /// 获取安装单详情
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        Task<CrmEntity> GetInstallationorderDetail(string guid);

        /// <summary>
        /// 获取安装单进程列表
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetInstallationProcess(InstallationorderDetailRequest _request);

        /// <summary>
        /// 获取安装单用户反馈列表
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetInstallationUser(InstallationorderDetailRequest _request);

        /// <summary>
        /// 安装单新增或编辑
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ValidateResult<CrmEntity>> AddOrEditInstallationorder(InstallationorderMetadataModel request);

    }
}
