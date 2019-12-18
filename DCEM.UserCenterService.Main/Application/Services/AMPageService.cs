//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System;
    using DCEM.UserCenterService.Main.Common;
    using Newtonsoft.Json.Linq;
    using System.IO;

    public class AMPageService : IAMPageService
    {
        
        private ICrmService _crmService;
        
        public IAMPageRepository _ampageRepository;
        
        public AMPageService(ICrmService crmService, IAMPageRepository ampageRepository)
        {
             _crmService = crmService;
                     _ampageRepository=ampageRepository;
        }

        public async Task<AMPageResponse> GenerateAMPage(Guid pageId)
        {
            var response = new AMPageResponse();
            try
            {
                //先查询落地页实体数据
                var crmRequestHelper = new CrmRequestHelper();
                var entity = await crmRequestHelper.Retrieve(_crmService, "mcs_am_page", pageId);
                if (entity == null)
                {
                    throw new Exception("未找到对应的落地页模板数据");
                }
                //根据落地页数据选择模板
                var fileName = GetTemplateNameByPageType(entity.Attributes["mcs_type"]?.ToString()) + ".html";
                //从模板地址读取数据写入新地址
                var prjRootPath = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
                var templateHtml = File.ReadAllText(prjRootPath + @"\HtmlResources\Templates\" + fileName);
                //todo:替换其中的自定义项
                var targetHtml = templateHtml;
                //写入目标地址
                var targetPath = @"\HtmlResources\Activities\" + entity.Attributes["mcs_am_pageid"].ToString();
                if (!Directory.Exists(prjRootPath + @"\wwwroot" + targetPath))
                {
                    Directory.CreateDirectory(prjRootPath + @"\wwwroot" + targetPath);
                }
                File.WriteAllText(prjRootPath + @"\wwwroot" + targetPath + @"\" + fileName, targetHtml);
                response.Url = targetPath + @"\" + fileName;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Url = ex.Message + ";" + ex.InnerException?.Message;
            }
            return response;
        }

        private string GetTemplateNameByPageType(string pageType)
        {
            switch (pageType)
            {
                //互动招募
                case "1":
                    return "Interact";
                    //线上报名
                case "2":
                    return "Online";
                    //预约
                case "3":
                default:
                    return "Reserve";
            }
        }
    }
}
