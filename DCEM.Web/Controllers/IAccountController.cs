using System;
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

using MSLibrary.Xrm;
using MSLibrary;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/account")]
    [ApiController]
    public class IAccountController : ApiController
    {
        public IAppAccount app = null;
        public IAccountController()
        {
            if (app == null)
            {
                app = new AccountFactory().Create().Result;
            }
        }

        [HttpPost]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(AccountSearhRequest accountSearhRequest)
        {
            var result = await app.QueryList(accountSearhRequest);
            return result;
        }

        [HttpGet]
        [Route("GetDetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetDetail(Guid id)
        {
            var result = await app.QueryById(id);
            return result;
        }

        [HttpPost]
        [Route("AddOrEdit")]
        public async Task<NewtonsoftJsonActionResult<Guid>> AddOrEdit(AccountRequest request)
        {
            var result = await app.AddOrEditEntity(request);
            return result;
        }
    }
}

