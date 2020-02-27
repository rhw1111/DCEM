﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Xrm.Message.FileAttributeUploadChunking;

namespace MSLibrary.Xrm.MessageHandle
{
    [Injection(InterfaceType = typeof(CrmMessageHandleForFileAttributeUploadChunking), Scope = InjectionScope.Singleton)]
    public class CrmMessageHandleForFileAttributeUploadChunking : ICrmMessageHandle
    {
        public async Task<CrmRequestMessageHandleResult> ExecuteRequest(CrmRequestMessage request)
        {
            if (!(request is CrmFileAttributeUploadChunkingRequestMessage))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.CrmRequestMessageTypeNotMatch,
                    DefaultFormatting = "消息请求类型不匹配，期待的类型为{0}，实际类型为{1}，位置为{2}",
                    ReplaceParameters = new List<object>() { typeof(CrmFileAttributeUploadChunkingRequestMessage).FullName, request.GetType().FullName, $"{ this.GetType().FullName }.ExecuteRequest" }
                };

                throw new UtilityException((int)Errors.CrmRequestMessageTypeNotMatch, fragment);
            }


          


            var realRequest = request as CrmFileAttributeUploadChunkingRequestMessage;
            var uploadUri = new Uri(new Uri(realRequest.OrganizationURI),realRequest.UploadUrl);

            var headers = new Dictionary<string, IEnumerable<string>>();        
            headers["x-ms-file-name"]=new List<string> { realRequest.FileName };

            var content = new ByteArrayContent(realRequest.Data);
            content.Headers.ContentRange = new ContentRangeHeaderValue(realRequest.Start, realRequest.End, realRequest.Total);
            content.Headers.Add("Content-Type", "application/octet-stream");

            CrmRequestMessageHandleResult result = new CrmRequestMessageHandleResult();
            result.Url = uploadUri.ToString();
            result.Method = HttpMethod.Patch;
            result.Headers = headers;
            result.Body = string.Empty;
            result.Extension = realRequest;
            result.ReplaceHttpContent = content;

            return await Task.FromResult(result);

        }

        public async Task<CrmResponseMessage> ExecuteResponse(object extension, string requestUrl, string requestBody, int responseCode, Dictionary<string, IEnumerable<string>> responseHeaders, string responseBody, HttpResponseMessage responseMessage)
        {
            CrmFileAttributeUploadChunkingResponseMessage response = new CrmFileAttributeUploadChunkingResponseMessage();
            return await Task.FromResult(response);
        }
    }
}
