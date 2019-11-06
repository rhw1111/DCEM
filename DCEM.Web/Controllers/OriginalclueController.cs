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
    [Route("api/Originalclue")]
    [EnableCors("any")]
    [ApiController]
    public class OriginalclueController : Controller
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
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> get(OriginalclueDetailRequest originalclueDetailRequest)
        {
            return await _appOriginalclue.Get(originalclueDetailRequest);
        }
    }
}


