﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using System;
using Microsoft.AspNetCore.Http;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;

namespace DCEM.Web.Controllers
{
    [Route("api/vehnetwork")]
    [EnableCors("any")]
    [ApiController]
    public class VehnetworkController : ApiController
    {

        private IAppVehnetwork _appVehnetwork;
        public VehnetworkController()
        {
            _appVehnetwork = new VehnetworkFactory().Create().Result;
        }
        /// <summary>
        /// 列表获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> getlist(VehnetworkListRequest request)
        {
            return await _appVehnetwork.getlist(request);
        }

        /// <summary>
        /// 明细获取
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("getdetail")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<VehnetworkDetailRepository>> get(Guid id)
        {
            return await _appVehnetwork.getdetail(id);
        }
        /// <summary>
        /// 完成交车
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("updateover")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<string>>> updatestatus(Guid id)
        {
            return await _appVehnetwork.PostStatus(id);
        }
    }
}


