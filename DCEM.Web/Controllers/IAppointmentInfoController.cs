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

        // GET api/values
        [HttpGet]
        [Route("GetList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(string status="", string search = "", int pageindex = 1)
        {
            var appointmentInfoRequest = new AppointmentInfoRequest()
            {
                mcs_status = status,
                search = search
            };

            Request.Headers.TryGetValue("token", out var traceValue);
            var list = await app.QueryListByPage(appointmentInfoRequest, 10, pageindex);
            return list;
        }

    }



}
