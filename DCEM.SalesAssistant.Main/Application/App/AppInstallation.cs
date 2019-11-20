﻿//==============================================
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
    }
}