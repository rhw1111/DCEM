using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.Application.App;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DCEM.HT.Controllers
{
    /// <summary>
    /// 用于落地页读取html模板动态生成html
    /// </summary>
    [EnableCors("any")]
    [Route("api/Page")]
    public class PageController : Controller
    {
        private IAppAMPage _appAMPage;
        public PageController()
        {
            _appAMPage = new AMPageFactory().Create().Result;
        }

        [HttpGet]
        [Route("GenerateAMPage")]
        public async Task<AMPageResponse> GenerateAMPage(Guid pageId)
        {
            return await _appAMPage.GenerateAMPage(pageId);
        }
    }
}
