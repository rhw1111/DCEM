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

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/tech-support")]
    [ApiController]
    public class ITechnicalSupportController : ControllerBase
    {



        // GET api/values
        [HttpGet]
        [Route("GetList")]
        public ActionResult<TestDriveResponse> GetList(int status)
        {
            var res = new TestDriveResponse()
            {
                Datas = new List<TestDriveModel>(),
                Success = true,
                Mssage = "查询成功"
            };
            
            return res;
           
        }

    }

}

