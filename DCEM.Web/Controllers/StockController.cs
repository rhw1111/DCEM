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
    [Route("Api/Stock")]
    [EnableCors("any")]
    [ApiController]
    public class StockController : ApiController
    {
        #region 初始化
        IStockService _stockService;
        public StockController()
        {
            _stockService = new StockFactory().Create().Result;
        }
        #endregion

        #region 获取厅店旧件库存
        /// <summary>
        /// 
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetSpmdspStockList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetSpmdspStockList(int pageindex = 1, string search = "")
        {
            return await _stockService.QuerySpmdspStockList(pageindex, search);
        }
        #endregion

        #region 获取厅店库存台帐
        /// <summary>
        /// 
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetDeliverycentercarStockList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetDeliverycentercarStockList(int pageindex = 1, string search = "")
        {
            return await _stockService.QueryDeliverycentercarStockList(pageindex, search);
        }
        #endregion

        #region 厅店库存台帐详情
        [HttpGet]
        [Route("GetDeliverycentercarStockInfo")]
        public async Task<NewtonsoftJsonActionResult<DeliverycentercarStockInfoResponse>> GetDeliverycentercarStockInfo(string guid)
        {
            return await _stockService.QueryDeliverycentercarStockInfo(guid);
        }
        #endregion

    }
    #endregion

}


