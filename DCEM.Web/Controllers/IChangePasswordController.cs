using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DCEM.Main.RemoteService;
using DCEM.SalesAssistant.Main.Factory;
using Microsoft.AspNetCore.Cors;
using MSLibrary;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary.Xrm;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/changepwd")]
    [ApiController]
    public class IChangePasswordController : ApiController
    {

        public IChangePasswordService app = null;

        //private IFactory<IChangePasswordService> _remoteServiceFactory;

        //public IChangePasswordController(IFactory<IChangePasswordService> remoteServiceFactory)
        //{
        //    _remoteServiceFactory = remoteServiceFactory;
        //}
        //public IChangePasswordController()
        //{
        //    if (app == null)
        //    {
        //        app = _remoteServiceFactory.Create();
        //    }
        //}

        [HttpPost]
        [Route("EditPwd")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> EditPwd(ChangePasswordModel model)
        {        
            var result = await app.UpdatePwd(model);
            return result;
        }
    }
}