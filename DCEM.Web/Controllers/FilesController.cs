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
using DCEM.ServiceAssistantService.Main.DTOModel;
using Newtonsoft.Json.Linq;
using System.Web;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.IO;
namespace DCEM.Web.Controllers
{
    #region 控制器
    [Route("Api/Files")]
    [EnableCors("any")]
    [ApiController]
    public class FilesController : ApiController
    {
        #region 初始化
        public FilesController()
        {
        }
        #endregion

        #region 文件上传
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1全部 2保修到期 3保险到期</param>
        /// <param name="pageindex"></param>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Upload")]
        public async Task<ActionResult<string>> Upload([FromForm]IFormCollection formData)
        {
            //创建文件夹
            var dirName = AppDomain.CurrentDomain.BaseDirectory + "wwwroot/FilesDir/";
            Directory.CreateDirectory(dirName);
            if (formData.Files.Count > 0)
            {
                foreach (var file in formData.Files)
                {
                    var filePath = dirName + file.FileName;
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                }
            }
            return "";
        }
        #endregion


    }
    #endregion


}


