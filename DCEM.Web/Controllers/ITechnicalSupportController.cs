using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using MSLibrary.Serializer;
using System.Text;
using System.Net;
using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/tech-support")]
    [ApiController]
    public class ITechnicalSupportController : ControllerBase
    {
        public IAppTechnicalSupport app = null;
        public ITechnicalSupportController()
        {
            if (app == null)
            {
                app = new TechnicalSupportFactory().Create().Result;
            }
        }


        // GET api/values
        [HttpGet]
        [Route("GetList")]
        public ActionResult<BaseResponse<TechnicalSupportModel>> GetList()
        {
            Request.Headers.TryGetValue("token", out var traceValue);
            var list = app.QueryListByPage("",10,1, "mcs_supportorderid desc", traceValue);
            var res = new BaseResponse<TechnicalSupportModel>()
            {
                Datas = list.ToList(),
                Success = true,
                Mssage = "查询成功"
            };
            
            return res;
        }

    }


    public class BaseResponse<T>
    {
        public List<T> Datas { get; set; }

        public bool Success { get; set; }
        public string Mssage { get; set; }
    }
}

