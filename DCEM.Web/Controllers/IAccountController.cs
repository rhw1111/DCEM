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
    public class IAccountController : ControllerBase
    {
        public IAppAccount app = null;
        public IAccountController()
        {
            if (app == null)
            {
                app = new AccountFactory().Create().Result;
            }
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(int orderstatus=0,string seachkey = "",string sort="",int pageSize=10,int page=1)
        {
            var result = await app.QueryList(null);
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

