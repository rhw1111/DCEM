using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aliyun.Acs.Core.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DCEM.Web.Controllers
{
    public class ApiController : ControllerBase
    {
        public Guid UserId { set; get; }

        public ApiController()
        {
            IHttpContextAccessor _accessor = new HttpContextAccessor();
            var userId = _accessor.HttpContext.Request.Headers["UserId"].ToString();

            if (!string.IsNullOrEmpty(userId))
            {
                UserId = Guid.Parse(userId);
            }
        }
    }

    

}