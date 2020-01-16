using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DCEM.UserCenterService.Main.Application.App;
using DCEM.UserCenterService.Main.Application.App.Contrac;
using DCEM.UserCenterService.Main.Factory;
using DCEM.UserCenterService.Main.ViewModel.Request;
using DCEM.UserCenterService.Main.ViewModel.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using static DCEM.UserCenterService.Main.Common.UserEnum;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DCEM.HT.Controllers
{
    /// <summary>
    /// 用于落地页读取html模板动态生成html
    /// </summary>
    [EnableCors("any")]
    [Route("api/Page")]
    [ApiController]
    public class PageController : ApiController
    {
        private IAppAMPage _appAMPage;
        public PageController()
        {
            _appAMPage = new AMPageFactory().Create().Result;
        }

        /// <summary>
        /// 落地页生成
        /// </summary>
        /// <param name="pageId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GenerateAMPage")]
        public async Task<AMPageResponse> GenerateAMPage(Guid pageId)
        {
            return await _appAMPage.GenerateAMPage(pageId);
        }

        /// <summary>
        /// 批量落地页生成
        /// </summary>
        /// <param name="pageIds"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("BatchGenerateAMPage")]
        public async Task<AMPageResponse> BatchGenerateAMPage(Guid[] pageIds)
        {
            var resultCount = 0;
            var errorMsgs = new StringBuilder();
            foreach (var pageId in pageIds)
            {
                var result = await _appAMPage.GenerateAMPage(pageId);
                if (result.IsSuccess)
                {
                    resultCount++;
                }
                else
                {
                    errorMsgs.AppendLine(pageId + ":" + result.Url);
                }
            }
            return new AMPageResponse() { IsSuccess = true, Url = $"成功{resultCount}条，失败{pageIds.Length - resultCount}条，失败日志：{errorMsgs.ToString()}" };
        }

        [HttpPost]
        [Route("LogAMPageAction")]
        public async Task<AMPageResponse> LogAMPageAction(AMPageRequest request)
        {
            return await _appAMPage.LogAMPageAction(request);
        }
    }
}
