using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary.Xrm.MessageHandle;
using MSLibrary.Xrm.Token;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
namespace DCEM.Web.Controllers
{
    [Route("Api/Customer")]
    [EnableCors("any")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerService _customerService;
        public CustomerController()
        {
            _customerService = new CustomerFactory().Create().Result;
        }

        [HttpGet]
        [Route("GetMyCustomerList")]
        public ActionResult<CrmEntityCollection> GetMyCustomerList()
        {
            return _customerService.QueryList().Result; 
        }





    }
}