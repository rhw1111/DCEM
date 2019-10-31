using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Newtonsoft.Json;
using MSLibrary.Xrm;
using System.Threading.Tasks;
using System.Text;
using System;
using Microsoft.AspNetCore.Mvc.Core;
using System.Reflection;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/Vehowner")]
    [EnableCors("any")]
    [ApiController]
    public class VehownerController : ControllerBase
    {
        #region 初始化
        IVehownerService _vehownerService;
        public VehownerController()
        {
            _vehownerService = new VehownerFactory().Create().Result;
        }
        #endregion

        #region 获取车辆列表
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1全部 2保修到期 3保险到期</param>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(int pageindex = 1, string search = "")
        {
            return await _vehownerService.QueryList(pageindex, search);
        }
        #endregion

        #region 获取车型
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1全部 2保修到期 3保险到期</param>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCarmodelList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetCarmodelList()
        {
            return await _vehownerService.QueryCarmodelList();
        }
        #endregion
    }
    #endregion

}


