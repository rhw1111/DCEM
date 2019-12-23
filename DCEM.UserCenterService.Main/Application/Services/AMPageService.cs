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
    using System.Xml.Linq;
    using static DCEM.UserCenterService.Main.Common.UserEnum;
    using System.Linq;
    using System.Text;

    public class AMPageService : IAMPageService
    {
        
        private ICrmService _crmService;
        
        public IAMPageRepository _ampageRepository;

        public IConfigRepository _configRepository;

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
                var fileName = @"\" + GetTemplateNameByPageType(entity.Attributes["mcs_type"]?.ToString()) + "Temp.html";
                //从模板地址读取数据写入新地址
                var prjRootPath = Directory.GetCurrentDirectory();
                var templateHtml = File.ReadAllText(prjRootPath + @"\wwwroot\HtmlResources\Templates\Temp\" + fileName);
                //替换其中的自定义项
                var targetHtml = await TransHtml(pageId, templateHtml, crmRequestHelper);
                //写入目标地址
                var resultPath = @"HtmlResources\Activities\" + entity.Attributes["mcs_am_pageid"].ToString();
                var targetPath = prjRootPath + @"\wwwroot\" + resultPath;
                if (!Directory.Exists(targetPath))
                {
                    Directory.CreateDirectory(targetPath);
                }
                File.WriteAllText(targetPath + fileName, targetHtml);
                response.Url = resultPath + fileName;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Url = ex.Message + ";" + ex.InnerException?.Message;
            }
            return response;
        }

        /// <summary>
        /// 根据模板的配置，自定义模板中的元素
        /// </summary>
        /// <param name="pageId"></param>
        /// <param name="templateHtml"></param>
        /// <returns></returns>
        private async Task<string> TransHtml(Guid pageId, string templateHtml, CrmRequestHelper crmRequestHelper)
        {
            //获取当前模板页的所有配置项
            XDocument fetchXdoc = await _ampageRepository.GetPageDetailsXml(pageId);
            var pageDetails = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_pagedetail", fetchXdoc);
            //读取应有的全部元素配置
            fetchXdoc = await _ampageRepository.GetElementConfigsXml();
            var elementConfigs = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_elementconfig", fetchXdoc);
            //用全部的配置去对应模板页的配置，如果模板有则获取模板的，没有则读取配置自己的默认值
            var result = new StringBuilder(templateHtml);
            foreach (var item in elementConfigs.Results)
            {
                var pageDetail = pageDetails.Results.First(p => p.Attributes["mcs_element"].ToString() == item.Attributes["mcs_am_elementconfigid"].ToString());
                var tempValue = string.Empty;
                if (pageDetail == null)
                {
                    tempValue = item.Attributes["mcs_defaultvalue"].ToString();
                }
                else
                {
                    tempValue = pageDetail.Attributes["mcs_content"].ToString();
                }
                result.Replace(item.Attributes["mcs_code"].ToString(), tempValue);
            }
            return result.ToString();
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
