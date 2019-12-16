using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using Newtonsoft.Json.Linq;
namespace DCEM.Web.Controllers.UCenter
{
    using DCEM.UserCenterService.Main.Application.Services.Contrac;

    [EnableCors("any")]
    [Route("api/SysConfig")]
    [ApiController]
    public class SysConfigServiceController : ApiController
    {
        public ISysConfigService _sysConfigService = null;
        public SysConfigServiceController()
        {
            _sysConfigService = new SysConfigFactory().Create().Result;
        }


        /// <summary>
        ///  商品查询接口
        /// </summary>
        /// <param name="appointmentInfoRequest"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCepConfig")]
        public async Task<NewtonsoftJsonActionResult<JObject>> GetCepConfig(string key)
        {
            return await _sysConfigService.QueryCepconfig(key);
        }

    }
}
