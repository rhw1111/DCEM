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
    public class IBaseDataController : ApiController
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
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryRepairItemInfo(string dealerid, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var repairItemInfoRequest = new RepairItemInfoRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort,
                mcs_dealerid = dealerid
            };
            var list = await app.QueryRepairItemInfo(repairItemInfoRequest);
            return list;
        }

        /// <summary>
        /// 维修配件基础数据查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryRepairItemPart")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryRepairItemPart(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var repairItemPartRequest = new RepairItemPartRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryRepairItemPart(repairItemPartRequest);
            return list;
        }

        /// <summary>
        /// 维修类型查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryRepairItemTypeDetail")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryRepairItemTypeDetail(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var repairItemTypeDetailRequest = new RepairItemTypeDetailRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryRepairItemTypeDetail(repairItemTypeDetailRequest);
            return list;
        }

        /// <summary>
        /// 故障类别代码查询接口
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryMalFunctionType")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryMalFunctionType(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var malFunctionTypeRequest = new MalFunctionTypeRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryMalFunctionType(malFunctionTypeRequest);
            return list;
        }

        /// <summary>
        /// 车型
        /// </summary>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryVehicletype")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryVehicletype(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new VehicleTypeRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryVehicletype(req);
            return list;
        }

        /// <summary>
        ///基本车型
        /// </summary>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCarmodel")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetCarmodel(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new VehicleTypeRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.GetCarmodel(req);
            return list;
        }

        /// <summary>
        /// 车型颜色
        /// </summary>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryVehicleColor")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryVehicleColor(string carmodel, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new VehicleColorRequest()
            {
                carmodel= carmodel,
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryVehicleColor(req);
            return list;
        }


        /// <summary>
        /// 预约时段
        /// </summary>
        /// <param name="carmodel"></param>
        /// <param name="dealerid"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryReservationconfig")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryReservationconfig(string mcs_ordertime , string carmodel, string dealerid, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new ReservationconfigRequest()
            {
                mcs_ordertime= mcs_ordertime,
                dealerid = dealerid,
                carmodel = carmodel,
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryReservationconfig(req);
            return list;
        }

        /// <summary>
        /// 接待员
        /// </summary>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryReceptioncommissioner")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QueryReceptioncommissioner(string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new ReceptioncommissionerRequest()
            {
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryReceptioncommissioner(req);
            return list;
        }

        /// <summary>
        /// 行政区域
        /// </summary>
        /// <param name="pid">父id</param>
        /// <param name="level">级别</param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySysarea")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QuerySysarea(string pid, string level, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var req = new SysareaRequest()
            {
                pid = pid,
                level = level,
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QuerySysarea(req);
            return list;
        } 


        /// <summary>
        /// 查询用户个人信息
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySystemUser")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> QuerySystemUser(string systemuserid)
        {
            return await app.QuerySystemUser(systemuserid);
        }

        /// <summary>
        /// 查询用户个人信息
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuerySystemUserList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> QuerySystemUserList(string seachkey = "", string prxyUserId = "", string dealerId = "", int pageSize = 10, int page = 1, string sort = "")
        {
            return await app.QuerySystemUserByPage(seachkey, prxyUserId, dealerId, pageSize, page, sort);
        }
    }
}
