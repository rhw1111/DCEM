/*
    文件名：IAppointmentInfoController.cs
    功能描述：预约跟进接口类  
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
    [Route("api/appointment-info")]
    [ApiController]
    public class IAppointmentInfoController : ControllerBase
    {
        public IAppAppointmentInfo app = null;
        public IAppointmentInfoController()
        {
            if (app == null)
            {
                app = new AppointmentInfoFactory().Create().Result;
            }
        }

        /// <summary>
        /// 预约记录列表查询
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(int status, string seachkey = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var appointmentInfoRequest = new AppointmentInfoRequest()
            {
                status = status,
                search = seachkey,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.QueryListByPage(appointmentInfoRequest);
            return list;
        }

        /// <summary>
        /// 查询预约单详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetDetail")]
        public async Task<NewtonsoftJsonActionResult<CrmEntity>> GetDetail(string entityid) 
        {
            return await app.QueryDetail(entityid);
        }


        /// <summary>
        /// 预约跟进记录
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetLog")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetLog(string entityid = "", string sort = "", int pageSize = 10, int page = 1)
        {
            var appointmentInfoLogRequest = new AppointmentInfoLogRequest()
            {
                entityid= entityid,
                page = page,
                pageSize = pageSize,
                sort = sort
            };
            var list = await app.GetLog(appointmentInfoLogRequest);
            return list;
        }
    }



}
