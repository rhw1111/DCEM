using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 原始线索
    /// </summary>
    [Route("api/Originalclue")]
    [EnableCors("any")]
    [ApiController]
    public class OriginalclueController : ApiController
    { 
        private IAppOriginalclue _appOriginalclue;
        public OriginalclueController()
        {
            _appOriginalclue = new OriginalclueFactory().Create().Result;
        }
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<OriginalclueListResponse>> getlist(OriginalclueListRequest originalclueListRequest)
        {
            return await _appOriginalclue.GetOriginalclueList(originalclueListRequest);
        }

        [Route("get")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> get(OriginalclueDetailRequest originalclueDetailRequest)
        {
            return await _appOriginalclue.Get(originalclueDetailRequest);
        }
        [Route("create")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<OriginalclueCreateResponse>> create(OriginalclueCreateRequest originalclueCreateRequest)
        {
            return await _appOriginalclue.create(originalclueCreateRequest);
        }

        [Route("GetCustomerTagList")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<CustomerlabelListResponse>> GetCustomerTagList(CustomerlabelListRequest customerlabelListRequest)
        {
            return await _appOriginalclue.GetCustomerLabelList(customerlabelListRequest);
        }
    }
}


