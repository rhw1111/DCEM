//==============================================
//文件名：InstallationController.cs
//功能描述：安装单相关接口控制器
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.Web.Controllers
{
    [Route("api/Installation")]
    [EnableCors("any")]
    [ApiController]
    public class InstallationController : ApiController
    {
        IAppInstallation app =null;
        public InstallationController() {
            if (app == null) {
                app = new InstallationFactory().Create().Result;
            }           
        }
        /// <summary>
        /// 获取勘测单列表接口
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetSurveyorderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetSurveyorderList(SurveyorderListRequest _request)
        {
            var list = await app.GetSurveyorderList(_request);
            return list;
        }
        /// <summary>
        /// 获取勘测单详情接口
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetSurveyorderDetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetSurveyorderDetail(SurveyorderDetailRequest _request)
        {
            var detail = await app.GetSurveyorderDetail(_request.Guid);
            return detail;
        }

        /// <summary>
        /// 新增或编辑勘测单
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("AddOrEditSurveyorder")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrEditSurveyorder(SurveyorderMetadataModel request)
        {
            var result = await app.AddOrEditSurveyorder(request);
            return result;
        }



        /// <summary>
        /// 获取安装单列表接口 
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetInstallationorderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetInstallationorderList(InstallationorderRequest _request)
        {
            var list = await app.GetInstallationorderList(_request);
            return list;
        }

        /// <summary>
        /// 获取安装单详情接口
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetInstallationorderDetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetInstallationorderDetail(InstallationorderDetailRequest _request)
        {
            var detail = await app.GetInstallationorderDetail(_request.Guid);
            return detail;
        }

        /// <summary>
        /// 获取安装单进程接口
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetInstallationorderProcess")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetInstallationorderProcess(InstallationorderDetailRequest _request)
        {
            var list = await app.GetInstallationProcess(_request);
            return list;
        }

        /// <summary>
        /// 获取安装单用户反馈列表
        /// </summary>
        /// <param name="_request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GetInstallationorderUser")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetInstallationorderUser(InstallationorderDetailRequest _request)
        {
            var list = await app.GetInstallationUser(_request);
            return list;
        }

        /// <summary>
        /// 新增或编辑安装单
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("AddOrEditInstallationorder")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrEditInstallationorder(InstallationorderMetadataModel request)
        {
            var result = await app.AddOrEditInstallationorder(request);
            return result;
        }

    }
}