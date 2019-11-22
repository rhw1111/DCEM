//功能描述：整车订单权益项接口
//创建时间：2019年11月21日
//作者：刘俊
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;
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
        public IMemberRightsService app = null;
       
        private IFactory<IMemberRightsService> _remoteServiceFactory;

        public IMemberRightsController(IFactory<IMemberRightsService> remoteServiceFactory)
        {
            _remoteServiceFactory = remoteServiceFactory;
        }

        public IMemberRightsController()
        {
            if (app == null)
            {                
                app = _remoteServiceFactory.Create();
            }
        }

        [HttpPost]
        [Route("GetMemberRightsList")]
        public async Task<NewtonsoftJsonActionResult<MemberRightsResponse>> GetMemberRightsList(string mcs_vehorderid)
        {
            var service = _remoteServiceFactory.Create();
            var result = await app.GetTest(mcs_vehorderid);
            return result;
        }
    }
}