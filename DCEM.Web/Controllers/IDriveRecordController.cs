/*
    文件名：IDriveRecordController.cs
    功能描述：试乘试驾接口接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Threading.Tasks;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;

namespace DCEM.Web.Controllers
{
    [EnableCors("any")]
    [Route("api/drive-record")]
    [ApiController]
    public class IDriveRecordController : ApiController
    {
        public IAppDriveRecord app = null;
        public IDriveRecordController()
        {
            if (app == null)
            {
                app = new DriveRecordFactory().Create().Result;
            }
        }

        /// <summary>
        /// 试乘试驾列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryList")]
        public async Task<NewtonsoftJsonActionResult<DriveRecordListResponse<CrmEntity>>> GetList([FromQuery]DriveRecordRequest request)
        {
            var list = await app.QueryList(request);
            return list;
        }
    }
}
