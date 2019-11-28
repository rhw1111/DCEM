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
using DCEM.Main.Entities;
using DCEM.Main;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 门店
    /// </summary>
    [Route("api/dealer")]
    [EnableCors("any")]
    [ApiController]
    public class DealerController : ApiController
    {

        private IAppDealer _appDealer;
        public DealerController()
        {
            _appDealer = new DealerFactory().Create().Result;
        }
        /// <summary>
        /// 获取门店列表
        /// </summary> 
        [Route("getlist")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<DealerListResponse>> getlist(DealerListRequest dealerListRequest)
        {
            return await _appDealer.getlist(dealerListRequest);
        } 
    }
}


