//功能描述：整车订单接口类
//创建时间：2019年11月11日
//作者：刘俊
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using MSLibrary;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using Microsoft.AspNetCore.Cors;

namespace DCEM.Web.Controllers
{

    [EnableCors("any")]
    [Route("api/vehorder")]
    [ApiController]
    public class IVehorderController : ApiController
    {
        public IAppVehorder app = null;
        public IVehorderController()
        {
            if (app == null)
            {
                app = new VehorderFactory().Create().Result;
            }
        }

        #region 整车订单列表查询
        
        [HttpGet]
        [Route("GetVehorderList")]
        public async Task<NewtonsoftJsonActionResult<QueryResult<CrmEntity>>> GetVehorderList(string seachkey = "", int pageSize = 10, int page = 1,string sort="",int mcs_rostatus=0)
        {         
            var vehorderRequest = new VehorderRequest()
            {
                SearchKey = seachkey,                   
                PageIndex = page,
                PageSize = pageSize,
                mcs_rostatus= mcs_rostatus
            };

            var list = await app.GetVehorderList(vehorderRequest);
            return list;
        }
        #endregion

        #region 根据主键id获取厅店整车订单明细
       
        [HttpGet]
        [Route("GetVehorderDetail")]
        public async Task<NewtonsoftJsonActionResult<VehorderDetailModel>> GetVehorderDetail(string mcs_vehorderid)
        {
            var result = await app.GetVehorderDetail(mcs_vehorderid);
            return result;
        }

        #endregion

    }
}