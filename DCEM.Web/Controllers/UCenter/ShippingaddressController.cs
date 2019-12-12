using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary;
using MSLibrary.DI;
using System;
using Microsoft.AspNetCore.Http;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.Main.Entities;
using DCEM.Main;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using DCEM.UserCenterService.Main.Application.App;
using System.Collections.Generic;
using Newtonsoft.Json;
using DCEM.UserCenterService.Main.Common;

namespace DCEM.Web.Controllers
{
    /// <summary>
    /// 收货地址
    /// </summary>
    [Route("api/shippingaddress")]
    [EnableCors("any")]
    [ApiController]
    public class ShippingaddressController : ApiController
    {

        private IAppShippingaddress _app;
        public ShippingaddressController()
        {
            _app = new ShippingaddressFactory().Create().Result;
        }



        /// <summary>
        /// 地址详情
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("getdetail")]
        [HttpGet]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<CrmEntity>>> GetDetail(Guid id)
        {
            return await _app.GetDetail(id);
        }
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [Route("getlist")]
        [HttpPost]
        public NewtonsoftJsonActionResult<ValidateResult<List<CrmEntity>>> GetList(ShippingaddressListRequest req)
        {
            return _app.GetList(req);
        }

        /// <summary>
        /// 修改新增用户收货地址
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [Route("addorupate")]
        [HttpPost]
        public async Task< NewtonsoftJsonActionResult<ValidateResult<List<CrmEntity>>>> AddOrUpdate(ShippingaddressAddRequest model)
        {
            ValidateResult<List<CrmEntity>> res = new ValidateResult<List<CrmEntity>>();
            ValidateResult valres = await _app.AddOrUpdate(model);
            if (valres.Result)
            {
                ShippingaddressListRequest req = new ShippingaddressListRequest();
                req.mcs_userid = model.userid.Value;
                ValidateResult<List<CrmEntity>> crmres = _app.GetList(req);
                return crmres;
            }
            res.Result = false;
            res.Description = valres.Description;
            return res;
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [Route("delete")]
        [HttpPost]
        public async Task<NewtonsoftJsonActionResult<ValidateResult<List<CrmEntity>>>> Delete(ShippingaddressAddRequest model) {
            ValidateResult<List<CrmEntity>> res = new ValidateResult<List<CrmEntity>>();
            ValidateResult valres =await _app.Delete(model);
            if (valres.Result)
            {
                ShippingaddressListRequest req = new ShippingaddressListRequest();
                req.mcs_userid = model.userid.Value;
                ValidateResult<List<CrmEntity>> crmres = _app.GetList(req);
                return crmres;
            }
            res.Result = false;
            res.Description = valres.Description;
            return res;
        } 
    }
}


