//xiongtao 
//上牌信息 2019-11-26
using Microsoft.AspNetCore.Cors;
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
using Newtonsoft.Json.Linq;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 上牌信息
    /// </summary>
    [Route("api/vehlisense")]
    [EnableCors("any")]
    [ApiController]
    public class VehlisenseController : ApiController
    {

        private IAppVehlisense _appVehlisense;
        public VehlisenseController()
        {
            _appVehlisense = new  VehlisenseFactory().Create().Result;
        }
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> getlist(VehlisenseListRequest request)
        {
            return await _appVehlisense.getlist(request);
        }

        [Route("getdetail")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<VehlisenseDetailRepository>> get(Guid id)
        {
            return await _appVehlisense.getdetail(id);
        }
        [HttpPost]
        [Route("AddOrUpdate")]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> AddOrUpdate([FromBody]Object body)
        {
            JObject jo = JObject.Parse(body.ToString());
            return await _appVehlisense.AddOrUpdate(jo);
        }

    }
}


