
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
using DCEM.ServiceAssistantService.Main.DTOModel;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Serializer;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Web.Controllers
{
    [Route("api/user")]
    [EnableCors("any")]
    [ApiController]
    public class IUserController : ApiController
    {
        public IAppBaseData app = null;
        public IUserController()
        {
            if (app == null)
            {
                app = new BaseDataFactory().Create().Result;
            }
        }
        
        [HttpGet]
        [Route("GetAuthToken")]
        public async Task<ActionResult<LoginModel>> GetAuthToken(string username, string password)
        {
            return await app.GetAuthToken(username,password);
        }
    }
}
