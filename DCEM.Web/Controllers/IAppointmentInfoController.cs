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
        public ActionResult<ResultResponse<AppointmentInfoModel>> GetList(string status="",string search = "")
        {
            var appointmentInfoRequest = new AppointmentInfoRequest()
            {
                mcs_status = status,
                search = search
            };

            Request.Headers.TryGetValue("token", out var traceValue);
            var list = app.QueryListByPage(appointmentInfoRequest, 10, 1, "", traceValue);
            var res = new ResultResponse<AppointmentInfoModel>()
            {
                Data = list.ToList(),
                Success = true,
                Mssage = "查询成功"
            };
            return res;
        }

    }
}
