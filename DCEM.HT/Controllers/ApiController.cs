using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aliyun.Acs.Core.Http;
using DCEM.HT.Filters;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.HT.Controllers
{
    [EnableCors("any")]
    [AuthFilter]
    public class ApiController : ControllerBase
    {
        public Guid UserId { set; get; }

        public ApiController()
        {
            
        }
    }

    

}