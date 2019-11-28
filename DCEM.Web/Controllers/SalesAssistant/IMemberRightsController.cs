//功能描述：整车订单权益项接口
//创建时间：2019年11月21日
//作者：刘俊
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;
using DCEM.Main.Response;
using DCEM.SalesAssistant.Main.Factory;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.RemoteService.DAL;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/MemberRights")]
    [ApiController]
    public class IMemberRightsController : ApiController
    {
    
        /// <summary>
        /// 获取整车订单权益项
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("GetMemberRightsList")]
        public async Task<NewtonsoftJsonActionResult<MemberRightsResponse>> GetMemberRightsList()
        {
            IMemberRightsService app = new MemberRightsService();

           var result = await app.GetMemberRights();
            return result;
        }
    }
}