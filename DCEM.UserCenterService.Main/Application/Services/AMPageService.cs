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
    using System.Collections.Generic;

    public class AMPageService : IAMPageService
    {
        
        private ICrmService _crmService;
        
        public IAMPageRepository _ampageRepository;

        public IConfigRepository _configRepository;

        public AMPageService(ICrmService crmService, IAMPageRepository ampageRepository, IConfigRepository configRepository)
        {
            _crmService = crmService;
            _ampageRepository = ampageRepository;
            _configRepository = configRepository;
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
                //从模板地址读取数据写入新地址
                var prjRootPath = Directory.GetCurrentDirectory();
                var templateHtml = File.ReadAllText(prjRootPath + @"\wwwroot\HtmlResources\Templates\Temp.html");
                //替换其中的自定义项
                var targetHtml = await TransHtml(pageId, templateHtml, crmRequestHelper);
                //数据id作为文件名
                var fileName = "/" + entity.Attributes["mcs_am_pageid"].ToString() + ".html";
                //写入目标相对地址
                var resultPath = @"HtmlResources/Activities";
                //通过配置值获取绝对路径，方便前端处理
                var absoluteFilePath = await GetAbsoluteFilePath(crmRequestHelper, resultPath + fileName);
                response.Url = absoluteFilePath;
                //再替换一下链接部分
                targetHtml = targetHtml.Replace("$pageurl$", absoluteFilePath);
                var targetPath = prjRootPath + @"\wwwroot\" + resultPath;
                if (!Directory.Exists(targetPath))
                {
                    Directory.CreateDirectory(targetPath);
                }
                File.WriteAllText(targetPath + fileName, targetHtml);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Url = ex.Message + ";" + ex.InnerException?.Message;
            }
            return response;
        }

        /// <summary>
        /// 根据模板的配置，自定义模板中的页面元素和表单元素
        /// </summary>
        /// <param name="pageId"></param>
        /// <param name="templateHtml"></param>
        /// <returMyAllOrdersns></returns>
        private async Task<string> TransHtml(Guid pageId, string templateHtml, CrmRequestHelper crmRequestHelper)
        {
            //原有逻辑废弃，考虑删除
            ////先替换元素配置
            ////获取当前模板页的所有元素配置项
            //XDocument fetchXdoc = await _ampageRepository.GetPageDetailsXml(pageId);
            //var pageDetails = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_pagedetail", fetchXdoc);
            ////读取应有的全部元素配置
            //fetchXdoc = await _ampageRepository.GetElementConfigsXml();
            //var elementConfigs = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_elementconfig", fetchXdoc);
            ////用全部的配置去对应模板页的配置，如果模板有则获取模板的，没有则读取配置自己的默认值
            //var result = new StringBuilder(templateHtml);
            //foreach (var item in elementConfigs.Results)
            //{
            //    var pageDetail = pageDetails.Results.FirstOrDefault(p => p.Attributes["_mcs_element_value"]?.ToString() == item.Attributes["mcs_am_elementconfigid"]?.ToString());
            //    var tempValue = string.Empty;
            //    if (pageDetail == null)
            //    {
            //        tempValue = item.Attributes["mcs_defaultvalue"]?.ToString();
            //    }
            //    else
            //    {
            //        tempValue = pageDetail.Attributes["mcs_content"]?.ToString();
            //    }
            //    result.Replace(item.Attributes["mcs_code"]?.ToString(), tempValue);
            //}

            //新逻辑 先决定页面元素数量和顺序
            var result = new StringBuilder(templateHtml);
            XDocument fetchXdoc = await _ampageRepository.GetPageDetailsXml(pageId);
            var pageDetails = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_pagedetail", fetchXdoc);
            if (pageDetails == null || pageDetails.Results == null || pageDetails.Results.Count <= 0)
            {
                throw new Exception("请添加模板配置元素");
            }
            var layoutHtml = new StringBuilder();
            foreach (var item in pageDetails.Results.OrderBy(p => p.Attributes["mcs_sort"]))
            {
                var code = item.Attributes["config.mcs_code"].ToString();
                switch (code)
                {
                    case "$form$":
                        layoutHtml.Append("$formsettings$");
                        break;
                    case "$image$":
                        layoutHtml.Append(@$"<img src=""{item.Attributes["mcs_content"].ToString()}"" style=""max-width:100%;margin-bottom: 40px;"" />");
                        break;
                }
            }
            result.Replace("$layoutcontent$", layoutHtml.ToString());

            //再替换表单配置
            //获取当前模板页的所有表单配置项
            fetchXdoc = await _ampageRepository.GetPageFieldsXml(pageId);
            var pageConfigs = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_pagefield", fetchXdoc);
            if (pageConfigs == null || pageConfigs.Results == null || pageConfigs.Results.Count <= 0)
            {
                throw new Exception("请添加模板配置字段");
            }
            //此处逻辑暂时先hardcode，后续可改为配置处理
            var formHtml = new StringBuilder();
            //加表单头
            formHtml.Append($@"<form name=""myForm"" class=""form-horizontal"" role=""form"">
                                            <div class=""person-info clearfix"" style=""padding-bottom: 10px;"">
                                                <h3 class=""title"">请填写您的信息</h3>");
            foreach (var item in pageConfigs.Results.OrderBy(p => p.Attributes["mcs_displayorder"]))
            {
                var code = item.Attributes["config.mcs_name"]?.ToString();
                var label = item.Attributes["mcs_label"]?.ToString();
                var placeholder = item.Attributes["mcs_placeholder"]?.ToString();
                var tip = item.Attributes["mcs_tip"]?.ToString();
                var required = (bool)item.Attributes["mcs_required"];
                formHtml.Append(@$"<div class=""detail"">
                                                    <label>{label}");
                if (required)
                {
                    formHtml.Append(@$"<a style=""color:red;"">*</a>");
                }
                switch (code)
                {
                    case "$city$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <select style=""border: 2px solid #bbb;width:100%;height:40px;"" id=""sltCity"" data-required=""{required}"" data-label=""{label}"">
                                                            <option value=""-1"">{placeholder}</option>
                                                            <option value=""330100"">杭州</option>
                                                            <option value=""110100"">北京</option>
                                                            <option value=""310100"">上海</option>
                                                            <option value=""440300"">深圳</option>
                                                            <option value=""440100"">广州</option>
                                                            <option value=""320100"">南京</option>
                                                            <option value=""220403"">西安</option>
                                                        </select>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$address$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <input type=""text"" id=""txtAddress"" name=""Address"" placeholder=""{placeholder}""  data-required=""{required}"" data-label=""{label}"" />
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$email$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <input type=""text"" id=""txtEmail"" name=""Email"" placeholder=""{placeholder}""  data-required=""{required}"" data-label=""{label}"" />
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$gender$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <select style=""border: 2px solid #bbb;width:100%;height:40px;"" id=""sltAppellation""  data-required=""{required}"" data-label=""{label}"">
                                                            <option value=""-1"">{placeholder}</option>
                                                            <option value=""1"">先生</option>
                                                            <option value=""2"">女士</option>
                                                        </select>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$level$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <select style=""border: 2px solid #bbb;width:100%;height:40px;"" id=""sltBuyPlan""  data-required=""{required}"" data-label=""{label}"">
                                                            <option value=""-1"">{placeholder}</option>
                                                            <option value=""0"">预计90天内成交</option>
                                                            <option value=""1"">预计3~6个月内成交</option>
                                                            <option value=""2"">预计6~12个月内成交</option>
                                                            <option value=""3"">预计12个月以上成交</option>
                                                            <option value=""5"">无购车计划</option>
                                                        </select>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$name$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <input type=""text"" id=""txtName"" name=""surname"" placeholder=""{placeholder}""  data-required=""{required}"" data-label=""{label}"" />
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$phone$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <input type=""text"" id=""txtMobile"" name=""Mobile"" placeholder=""{placeholder}""   data-required=""{required}"" data-label=""{label}""/>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        formHtml.Append(@$"<div class=""detail"">
                                                    <label></label>
                                                    <div class=""content"">
     <input type=""button"" value=""获取验证码"" style=""width: 49%;margin-top:-4px;"" class=""button button-blue"" onclick=""GetCode()"" id=""btn_code"">                                                   <input type=""text""  name=""Mobile"" placeholder=""请输入验证码""  style=""width: 49%;margin-top: -3px;"">
</div></div>");
                        break;
                    case "$vehcolor$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <select style=""border: 2px solid #bbb;width:100%;height:40px;"" id=""sltCarColor""  data-required=""{required}"" data-label=""{label}"">
                                                            <option value=""-1"">{placeholder}</option>");
                        var colors = await GetVehColors(crmRequestHelper);
                        foreach (var color in colors)
                        {
                            formHtml.Append(@$"<option value=""{color.Attributes["mcs_code"].ToString()}"">{color.Attributes["mcs_name"].ToString()}</option>");
                        }
                        formHtml.Append(@$"</select>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                    case "$vehtype$":
                        formHtml.Append(@$"</label>
                                                    <div class=""content"">
                                                        <select style=""border: 2px solid #bbb;width:100%;height:40px;"" id=""sltCarPlan""  data-required=""{required}"" data-label=""{label}"">
                                                            <option value=""-1"">{placeholder}</option>");
                        var types = await GetVehTypes(crmRequestHelper);
                        foreach (var type in types)
                        {
                            formHtml.Append(@$"<option value=""{type.Attributes["mcs_code"].ToString()}"">{type.Attributes["mcs_name"].ToString()}</option>");
                        }
                        formHtml.Append(@$"</select>
                                                        <span>{tip}</span>
                                                    </div>
                                                </div>");
                        break;
                }
            }
            //加表单尾
            formHtml.Append(@$"</div>
                                            <div class=""law one-line"">
                                                <span class=""tips""><a style=""color:red;"">*</a>带星号的选项必须填写</span>
                                            </div>
                                            <div class=""action-bar"" style=""position: fixed;bottom: 10px;padding-right: 40px;"">
                                                <div class=""action"">
                                                    <span class=""button button-blue"" onclick=""SubmitClick()"" gcdm-form-submit>提交</span>
                                                </div>
                                            </div>");
            result.Replace("$formsettings$", formHtml.ToString());

            //替换线索媒体，引流渠道和用户行为
            fetchXdoc = await _ampageRepository.GetUserBehaviorXml(pageId);
            var leadConfigs = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_am_page", fetchXdoc);
            var shareable = false;
            if (leadConfigs != null && leadConfigs.Results != null && leadConfigs.Results.Count > 0)
            {
                var channel = leadConfigs.Results[0].Attributes["mcs_channel"]?.ToString();
                result.Replace("$channel$", channel);
                var behaviorCode = leadConfigs.Results[0].Attributes["behavior.mcs_code"]?.ToString();
                result.Replace("$behavior$", behaviorCode);
                var media = leadConfigs.Results[0].Attributes["media.mcs_code"]?.ToString();
                result.Replace("$media$", media);
             
                shareable = (bool)leadConfigs.Results[0].Attributes["mcs_shareable"];
            }
            else
            {
                //设置默认值
                result.Replace("$channel$", "1");
                result.Replace("$behavior$", "activity_online_registration");
                result.Replace("$media$", "official_site");
            }
            //新需求：决定是否可分享
            result.Replace("$shareable$", shareable ? "block" : "none");

            //最后替换配置值（潜客留资url地址等配置值）
            fetchXdoc = await _configRepository.GetConfigFetchXml("MSCRMInApiUrlConfig");
            var urlConfig = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_cepconfig", fetchXdoc);
            if (urlConfig == null || urlConfig.Results == null || urlConfig.Results.Count <= 0)
            {
                throw new Exception("请配置潜客中心In接口地址");
            }
            result.Replace("$urlconfig$", urlConfig.Results[0].Attributes["mcs_val"].ToString());
        
            return result.ToString();
        }

        private async Task<string> GetAbsoluteFilePath(CrmRequestHelper crmRequestHelper, string relativeFilePath)
        {
            //落地页地址配置
            var fetchXdoc = await _configRepository.GetConfigFetchXml("Key_HtmlTemplateUrlConfig");
            var urlConfig2 = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_cepconfig", fetchXdoc);
            if (urlConfig2 == null || urlConfig2.Results == null || urlConfig2.Results.Count <= 0)
            {
                throw new Exception("请配置落地页html生成和请求地址");
            }
            return urlConfig2.Results[0].Attributes["mcs_val"].ToString() + relativeFilePath;
        }

        private async Task<List<CrmEntity>> GetVehColors(CrmRequestHelper crmRequestHelper)
        {
            var fetchXdoc = await _configRepository.GetVehicleColorXml();
            var results = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_vehiclecolor", fetchXdoc);
            if (results == null || results.Results == null || results.Results.Count <= 0)
            {
                throw new Exception("没有车型颜色数据");
            }
            return results.Results;
        }

        private async Task<List<CrmEntity>> GetVehTypes(CrmRequestHelper crmRequestHelper)
        {
            var fetchXdoc = await _configRepository.GetVehicleTypeXml();
            var results = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_vehicletype", fetchXdoc);
            if (results == null || results.Results == null || results.Results.Count <= 0)
            {
                throw new Exception("没有车型数据");
            }
            return results.Results;
        }
    }
}
