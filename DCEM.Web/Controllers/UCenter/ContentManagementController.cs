using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.Web.Controllers.Content
{
    [EnableCors("any")]
    [Route("api/ContentManagement")]
    [ApiController]
    public class ContentManagementController : ApiController
    {
        private IAppContentManagement _appContentManagement;
        public ContentManagementController()
        {
            _appContentManagement = new ContentManagementFactory().Create().Result;
        }

        /// <summary>
        /// 获取内容列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("GetContentList")]
        public async Task<NewtonsoftJsonActionResult<ContentListResponse>> GetContentList(ContentListRequest contentListRequest)
        {
            return await _appContentManagement.GetList(contentListRequest);
        }

        /// <summary>
        /// 获取内容详情
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("GetContentDetail")]
        public async Task<NewtonsoftJsonActionResult<ContentDetailResponse>> GetContentDetail(ContentDetailRequest contentDetailRequest)
        {
            return await _appContentManagement.GetDetail(contentDetailRequest);
        }
    }
}