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
using DCEM.Main.Entities;
using DCEM.Main.Response;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/changepwd")]
    [ApiController]
    public class IChangePasswordController : ApiController
    {
       
        /// <summary>
        /// 修改用户登录密码
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("EditPwd")]
        public async Task<NewtonsoftJsonActionResult<ResultResponse>> EditPwd(ChangePasswordModel model)
        {
            IChangePasswordService app = new ChangePasswordService();
            try
            {
                var result = await app.UpdatePwd(model);
                return result;
            }
            catch (Exception ex)
            {

                throw ex;
            }
          
        }
    }
}