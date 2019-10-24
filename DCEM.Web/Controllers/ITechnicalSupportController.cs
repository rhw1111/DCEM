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
using MSLibrary.Xrm;
using MSLibrary;

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
        public async Task<QueryResult<CrmEntity>> GetList()
        {
            var result = await app.QueryListByPage("",10,1, "mcs_supportorderid desc");
            return result;
        }
    }
}

