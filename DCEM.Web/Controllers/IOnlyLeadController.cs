/*
    文件名：IOnlyLeadController.cs
    功能描述：唯一线索接口类  
    创建时间：2019年11月05日
    作者：黄贤顺
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;

namespace DCEM.Web.Controllers
{

    [EnableCors("any")]
    [Route("api/only-lead")]
    [ApiController]
    public class IOnlyLeadController : ControllerBase
    {
        public IAppOnlyLead app = null;
        public IOnlyLeadController()
        {
            if (app == null)
            {
                app = new OnlyLeadFactory().Create().Result;
            }
        }


        /// <summary>
        /// 预约记录列表查询
        /// </summary>
        /// <param name="status"></param>
        /// <param name="seachkey"></param>
        /// <param name="sort"></param>
        /// <param name="pageSize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QueryList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetList(Guid? mcs_dealerid, string seachkey = "", int pageSize = 10, int page = 1)
        {
            var onlyLeadRequest = new OnlyLeadRequest()
            {
                search = seachkey,
                mcs_dealerid = mcs_dealerid,
                PageIndex = page,
                PageSize = pageSize,
            };
            var list = await app.QueryList(onlyLeadRequest);
            return list;
        }

    }
}
