///xiong tao 
///附件上传公共接口 2019-11-25
using DCEM.ServiceAssistantService.Main.Application;
using DCEM.ServiceAssistantService.Main.DAL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Newtonsoft.Json;
using MSLibrary.Xrm;
using System.Threading.Tasks;
using System.Text;
using System;
using Microsoft.AspNetCore.Mvc.Core;
using System.Reflection;
using MSLibrary;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Factory;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Collections.Generic;

namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("api/attachment")]
    [EnableCors("any")]
    [ApiController]
    public class AttachmentController : ApiController
    {
        #region 初始化
        IAppAttachment _service;
        public AttachmentController()
        {
            _service = new AttachmentFactory().Create().Result;
        }
        #endregion

        #region 获取列表 
        [HttpPost]
        [Route("add")]
        public async Task<ValidateResult> Add([FromBody]Object obj)
        {
            var strjson = obj.ToString();
            List<AttachmentAddResponse> item = JsonConvert.DeserializeObject<List<AttachmentAddResponse>>(strjson);
            return await _service.Add(item);

        }
        #endregion

    }
    #endregion

}


