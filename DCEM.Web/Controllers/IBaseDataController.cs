/*
    文件名：IBaseDataController.cs
    功能描述：基础信息接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.ServiceAssistantService.Main.DTOModel;
using System.Linq;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using MSLibrary;
using System;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/basedata")]
    [ApiController]
    public class IBaseDataController : ControllerBase
    {
        public IAppBaseData app = null;
        public IBaseDataController()
        {
            if (app == null)
            {
                app = new BaseDataFactory().Create().Result;
            }
        }

        /// <summary>
        /// 维修类别基础数据查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryRepairItemType")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryRepairItemType(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var repairItemTypeRequest = new RepairItemTypeRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryRepairItemType(repairItemTypeRequest);
            return list;
        }

        /// <summary>
        /// 维修项目基础数据查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryRepairItemInfo")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryRepairItemInfo(string dealerid,string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var repairItemInfoRequest = new RepairItemInfoRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort,
                 mcs_dealerid= dealerid
            };
            var list = await app.QueryRepairItemInfo(repairItemInfoRequest);
            return list;
        }


    }
}
