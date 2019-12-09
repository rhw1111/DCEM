using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aliyun.Acs.Core.Http;
using DCEM.Web.Filters;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    //[AuthFilter]
    public class ApiController : ControllerBase
    {
        public Guid UserId { set; get; }

        public ApiController()
        {
            
        }
    }

    

}