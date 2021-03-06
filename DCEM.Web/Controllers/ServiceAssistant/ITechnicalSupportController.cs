﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using MSLibrary.Serializer;
using System.Text;
using System.Net;
using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary.Xrm;
using MSLibrary;
using DCEM.Web.Filters;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/tech-support")]
    [ApiController]
    public class ITechnicalSupportController : ApiController
    {
        public IAppTechnicalSupport app = null;
        public ITechnicalSupportController()
        {
            if (app == null)
            {
                app = new TechnicalSupportFactory().Create().Result;
            }
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(int orderstatus = 0, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var result = await app.QueryListByPage(orderstatus, seachkey, pageSize, page, sort);
            return result;
        }

        [HttpGet]
        [Route("GetDetail")]
        public async Task<NewtonsoftJsonActionResult<TechnicalSupportInfoResponse>> GetDetail(Guid id)
        {
            var result = await app.QueryInfo(id);
            return result;
        }

        [HttpPost]
        [Route("AddOrEdit")]
        public async Task<NewtonsoftJsonActionResult<Guid>> AddOrEdit(TechnicalSupportRequest request)
        {
            var result = await app.AddOrEditEntity(request);
            return result;
        }



        [HttpPost]
        [Route("AddOrUpdate")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrUpdate([FromBody]Object body)
        {
            JObject jo = JObject.Parse(body.ToString());
            var result = await app.AddOrUpdate(jo);
            return result;
        }
    }
}

