using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.Application.App;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DCEM.HT.Controllers
{
    /// <summary>
    /// 用于内容管理根据富文本内容生成html
    /// </summary>
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
        /// 内容html生成
        /// </summary>
        /// <param name="contentPageRequest"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GenerateContentPage")]
        public async Task<ContentPageResponse> GenerateContentPage(ContentPageRequest contentPageRequest)
        {
            return await _appContentManagement.GenerateContentPage(contentPageRequest);
        }

    }
}
